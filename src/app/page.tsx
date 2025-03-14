"use client";

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import FaucetForm from '@/components/FaucetForm';
import Footer from '@/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Only show the UI after mounting on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet, return nothing to prevent hydration errors
  if (!mounted) {
    return <div className="app"><div className="container">Loading...</div></div>;
  }

  return (
    <div className="app">
      <div className="container">
        <div className="box">
          <div className="box-content">
            <Header />
            <FaucetForm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
