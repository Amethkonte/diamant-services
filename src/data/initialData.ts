import { Vehicle, RentalVehicle, OrderRequest } from '../types';

export const INITIAL_VEHICLES: Vehicle[] = [
  {
    id: 'veh-1',
    name: 'Mercedes-Benz C-Class Coupé AMG',
    brand: 'Mercedes-Benz',
    model: 'Classe C Coupé',
    year: 2024,
    price: '38 500 000 FCFA',
    priceNumeric: 38500000,
    status: 'disponible',
    fuel: 'Essence',
    transmission: 'Automatique',
    mileage: '12 500 km',
    bodyType: 'Coupé',
    image: '/src/assets/images/showroom_luxury_fleet_1790952347276.jpg',
    isExample: true,
    features: ['Pack AMG Line', 'Toit ouvrant panoramique', 'Caméra 360°', 'Intérieur Cuir Nappa', 'Dédouané Dakar'],
    description: 'Modèle d’exception alliant sportivité et raffinement. Véhicule certifié, historique limpide, disponible immédiatement pour visite à Dakar.'
  },
  {
    id: 'veh-2',
    name: 'Range Rover Velar R-Dynamic',
    brand: 'Land Rover',
    model: 'Range Rover Velar',
    year: 2023,
    price: '49 000 000 FCFA',
    priceNumeric: 49000000,
    status: 'disponible',
    fuel: 'Essence',
    transmission: 'Automatique',
    mileage: '24 000 km',
    bodyType: 'SUV',
    image: '/src/assets/images/hero_diamant_auto_1790952335405.jpg',
    isExample: true,
    features: ['Transmission intégrale AWD', 'Suspension pneumatique', 'Cockpit virtuel Pivi Pro', 'Jantes 21 pouces'],
    description: 'Le SUV de luxe par excellence pour vos déplacements au Sénégal. Confort absolu sur route comme sur piste.'
  },
  {
    id: 'veh-3',
    name: 'Toyota Land Cruiser Prado TX-L',
    brand: 'Toyota',
    model: 'Land Cruiser Prado',
    year: 2024,
    price: 'Sur commande',
    priceNumeric: 45000000,
    status: 'sur_commande',
    fuel: 'Diesel',
    transmission: 'Automatique',
    mileage: 'Neuf 0 km',
    bodyType: '4x4',
    image: '/src/assets/images/suv_rental_dakar_1790952369286.jpg',
    isExample: true,
    features: ['Moteur D-4D Tropicalisé', '7 places assises', 'Climatisation tri-zone', 'Garde au sol surélevée'],
    description: 'La référence incontournable de robustesse et de fiabilité en Afrique de l’Ouest. Commandable neuf avec livraison et dédouanement clé en main.'
  },
  {
    id: 'veh-4',
    name: 'Ford Explorer Platinum 4WD',
    brand: 'Ford',
    model: 'Explorer',
    year: 2023,
    price: '31 500 000 FCFA',
    priceNumeric: 31500000,
    status: 'en_arrivage',
    fuel: 'Essence',
    transmission: 'Automatique',
    mileage: '18 200 km',
    bodyType: 'SUV',
    image: '/src/assets/images/shipping_import_port_1790952358058.jpg',
    isExample: true,
    features: ['EcoBoost 3.0L V6', 'Système audio B&O 14 haut-parleurs', 'Capteurs d’angle mort', 'Porte arrière motorisée'],
    description: 'Actuellement en transit maritime vers le Port Autonome de Dakar. Réservation prioritaire possible avec avance protégée.'
  },
  {
    id: 'veh-5',
    name: 'Acura MDX Advance Package',
    brand: 'Acura',
    model: 'MDX',
    year: 2022,
    price: '27 800 000 FCFA',
    priceNumeric: 27800000,
    status: 'disponible',
    fuel: 'Essence',
    transmission: 'Automatique',
    mileage: '35 000 km',
    bodyType: 'SUV',
    image: '/src/assets/images/showroom_luxury_fleet_1790952347276.jpg',
    isExample: true,
    features: ['SH-AWD', 'Sièges ventilés et chauffants', 'Affichage tête haute', 'Dédouanement complet'],
    description: 'SUV familial premium spacieux et puissant. Très apprécié à Dakar pour sa tenue de route et sa technologie embarquée.'
  },
  {
    id: 'veh-6',
    name: 'BMW Série 5 Berline M Sport',
    brand: 'BMW',
    model: 'Série 5',
    year: 2023,
    price: 'Sur commande',
    priceNumeric: 34000000,
    status: 'sur_commande',
    fuel: 'Essence',
    transmission: 'Automatique',
    mileage: '21 000 km',
    bodyType: 'Berline',
    image: '/src/assets/images/hero_diamant_auto_1790952335405.jpg',
    isExample: true,
    features: ['Pack M Sport complet', 'Éclairage Laser BMW', 'Assistance au stationnement autonome', 'Toit ouvrant'],
    description: 'Berline de direction prestige pour cadres, dirigeants et diplomates. Disponible sur commande depuis Dubaï ou l’Allemagne.'
  }
];

export const INITIAL_RENTAL_VEHICLES: RentalVehicle[] = [
  {
    id: 'rent-1',
    name: 'Toyota Land Cruiser Prado TX',
    category: 'SUV 4x4 Tout-Terrain',
    dailyRate: '85 000 FCFA / jour',
    monthlyRate: '1 800 000 FCFA / mois',
    image: '/src/assets/images/suv_rental_dakar_1790952369286.jpg',
    seats: 7,
    transmission: 'Automatique',
    fuel: 'Diesel',
    isExample: true
  },
  {
    id: 'rent-2',
    name: 'Mercedes-Benz C-Class Élégance',
    category: 'Berline Prestige & VIP',
    dailyRate: '65 000 FCFA / jour',
    monthlyRate: '1 400 000 FCFA / mois',
    image: '/src/assets/images/showroom_luxury_fleet_1790952347276.jpg',
    seats: 5,
    transmission: 'Automatique',
    fuel: 'Essence',
    isExample: true
  },
  {
    id: 'rent-3',
    name: 'Range Rover Velar Exécutif',
    category: 'SUV Grand Luxe avec Chauffeur optionnel',
    dailyRate: '120 000 FCFA / jour',
    monthlyRate: '2 600 000 FCFA / mois',
    image: '/src/assets/images/hero_diamant_auto_1790952335405.jpg',
    seats: 5,
    transmission: 'Automatique',
    fuel: 'Essence',
    isExample: true
  }
];

export const INITIAL_ORDERS: OrderRequest[] = [
  {
    id: 'cmd-101',
    fullName: 'Mamadou Ndiaye',
    phone: '+221 77 123 45 67',
    email: 'm.ndiaye@entreprise.sn',
    brand: 'Toyota',
    model: 'Land Cruiser 300',
    budget: '65 000 000 FCFA',
    vehicleType: '4x4',
    targetYear: '2024',
    originCountry: 'Dubaï (Émirats Arabes Unis)',
    message: 'Véhicule tropicalisé demandé, livraison souhaitée avant fin de trimestre.',
    createdAt: '2026-09-28',
    status: 'En analyse'
  }
];
