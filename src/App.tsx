/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { VehicleModal } from './components/VehicleModal';
import { HomePage } from './pages/HomePage';
import { VehiclesPage } from './pages/VehiclesPage';
import { OrderPage } from './pages/OrderPage';
import { RentalPage } from './pages/RentalPage';
import { ImportServicesPage } from './pages/ImportServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

const AppContent: React.FC = () => {
  const { currentPage } = useApp();

  return (
    <div className="min-h-screen bg-[#070D18] text-[#E6EEF8] flex flex-col font-sans selection:bg-[#1E60D5] selection:text-white">
      {/* Sticky navigation header */}
      <Navbar />

      {/* Main page content routed smoothly */}
      <main className="flex-1">
        {currentPage === 'accueil' && <HomePage />}
        {currentPage === 'vehicules' && <VehiclesPage />}
        {currentPage === 'services' && <HomePage />}
        {currentPage === 'commander' && <OrderPage />}
        {currentPage === 'location' && <RentalPage />}
        {currentPage === 'importation' && <ImportServicesPage />}
        {currentPage === 'apropos' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'admin' && <AdminPage />}
      </main>

      {/* Detailed interactive vehicle modal */}
      <VehicleModal />

      {/* Floating contextual WhatsApp button */}
      <WhatsAppButton />

      {/* Quiet, complete footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
