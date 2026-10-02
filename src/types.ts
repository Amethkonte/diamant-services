export type VehicleStatus = 'disponible' | 'sur_commande' | 'en_arrivage';
export type FuelType = 'Essence' | 'Diesel' | 'Hybride' | 'Électrique';
export type TransmissionType = 'Automatique' | 'Manuelle';
export type BodyType = 'Berline' | 'SUV' | '4x4' | 'Coupé' | 'Pickup' | 'Commercial';

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  priceNumeric?: number;
  status: VehicleStatus;
  fuel: FuelType;
  transmission: TransmissionType;
  mileage: string;
  bodyType: BodyType;
  image: string;
  isExample: boolean;
  features: string[];
  description: string;
}

export interface RentalVehicle {
  id: string;
  name: string;
  category: string;
  dailyRate: string;
  monthlyRate?: string;
  image: string;
  seats: number;
  transmission: TransmissionType;
  fuel: FuelType;
  isExample: boolean;
}

export interface OrderRequest {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  brand: string;
  model: string;
  budget: string;
  vehicleType: string;
  targetYear: string;
  originCountry: string;
  message: string;
  createdAt: string;
  status: 'Nouveau' | 'En analyse' | 'Devis envoyé' | 'Validé';
}

export interface RentalRequest {
  id: string;
  fullName: string;
  phone: string;
  vehicleName: string;
  startDate: string;
  endDate: string;
  message: string;
  createdAt: string;
  status: 'En attente' | 'Confirmée' | 'Terminée';
}

export interface ContactMessage {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'Non lu' | 'Lu' | 'Répondu';
}
