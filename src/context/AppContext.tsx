import React, { createContext, useContext, useState, useEffect } from 'react';
import { Vehicle, RentalVehicle, OrderRequest, RentalRequest, ContactMessage } from '../types';
import { INITIAL_VEHICLES, INITIAL_RENTAL_VEHICLES, INITIAL_ORDERS } from '../data/initialData';

export type PageView = 
  | 'accueil' 
  | 'vehicules' 
  | 'services' 
  | 'commander' 
  | 'location' 
  | 'importation' 
  | 'apropos' 
  | 'contact' 
  | 'admin';

interface AppContextType {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  vehicles: Vehicle[];
  rentalVehicles: RentalVehicle[];
  orders: OrderRequest[];
  rentals: RentalRequest[];
  messages: ContactMessage[];
  addVehicle: (vehicle: Omit<Vehicle, 'id'>) => void;
  updateVehicle: (id: string, vehicle: Partial<Vehicle>) => void;
  deleteVehicle: (id: string) => void;
  submitOrder: (order: Omit<OrderRequest, 'id' | 'createdAt' | 'status'>) => void;
  submitRental: (rental: Omit<RentalRequest, 'id' | 'createdAt' | 'status'>) => void;
  submitMessage: (message: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => void;
  selectedVehicleForModal: Vehicle | null;
  setSelectedVehicleForModal: (vehicle: Vehicle | null) => void;
  orderPreFill: { brand?: string; model?: string } | null;
  setOrderPreFill: (data: { brand?: string; model?: string } | null) => void;
  rentalPreFill: string | null;
  setRentalPreFill: (vehicleName: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageView>('accueil');
  const [selectedVehicleForModal, setSelectedVehicleForModal] = useState<Vehicle | null>(null);
  const [orderPreFill, setOrderPreFill] = useState<{ brand?: string; model?: string } | null>(null);
  const [rentalPreFill, setRentalPreFill] = useState<string | null>(null);

  // Vehicles state with LocalStorage
  const [vehicles, setVehicles] = useState<Vehicle[]>(() => {
    const saved = localStorage.getItem('diamant_vehicles');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return INITIAL_VEHICLES;
  });

  const [rentalVehicles] = useState<RentalVehicle[]>(INITIAL_RENTAL_VEHICLES);

  // Orders state with LocalStorage
  const [orders, setOrders] = useState<OrderRequest[]>(() => {
    const saved = localStorage.getItem('diamant_orders');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return INITIAL_ORDERS;
  });

  // Rentals state with LocalStorage
  const [rentals, setRentals] = useState<RentalRequest[]>(() => {
    const saved = localStorage.getItem('diamant_rentals');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return [];
  });

  // Messages state with LocalStorage
  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('diamant_messages');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('diamant_vehicles', JSON.stringify(vehicles));
  }, [vehicles]);

  useEffect(() => {
    localStorage.setItem('diamant_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('diamant_rentals', JSON.stringify(rentals));
  }, [rentals]);

  useEffect(() => {
    localStorage.setItem('diamant_messages', JSON.stringify(messages));
  }, [messages]);

  const addVehicle = (newVeh: Omit<Vehicle, 'id'>) => {
    const v: Vehicle = {
      ...newVeh,
      id: 'veh-' + Date.now()
    };
    setVehicles(prev => [v, ...prev]);
  };

  const updateVehicle = (id: string, updated: Partial<Vehicle>) => {
    setVehicles(prev => prev.map(v => v.id === id ? { ...v, ...updated } : v));
  };

  const deleteVehicle = (id: string) => {
    setVehicles(prev => prev.filter(v => v.id !== id));
  };

  const submitOrder = (orderData: Omit<OrderRequest, 'id' | 'createdAt' | 'status'>) => {
    const newOrder: OrderRequest = {
      ...orderData,
      id: 'cmd-' + Math.floor(100 + Math.random() * 900),
      createdAt: new Date().toISOString().split('T')[0],
      status: 'Nouveau'
    };
    setOrders(prev => [newOrder, ...prev]);
  };

  const submitRental = (rentalData: Omit<RentalRequest, 'id' | 'createdAt' | 'status'>) => {
    const newRental: RentalRequest = {
      ...rentalData,
      id: 'loc-' + Math.floor(100 + Math.random() * 900),
      createdAt: new Date().toISOString().split('T')[0],
      status: 'En attente'
    };
    setRentals(prev => [newRental, ...prev]);
  };

  const submitMessage = (msgData: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => {
    const newMsg: ContactMessage = {
      ...msgData,
      id: 'msg-' + Math.floor(100 + Math.random() * 900),
      createdAt: new Date().toISOString().split('T')[0],
      status: 'Non lu'
    };
    setMessages(prev => [newMsg, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        vehicles,
        rentalVehicles,
        orders,
        rentals,
        messages,
        addVehicle,
        updateVehicle,
        deleteVehicle,
        submitOrder,
        submitRental,
        submitMessage,
        selectedVehicleForModal,
        setSelectedVehicleForModal,
        orderPreFill,
        setOrderPreFill,
        rentalPreFill,
        setRentalPreFill
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
