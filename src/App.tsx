import { useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import ServiceAreas from './components/ServiceAreas';
import HowItWorks from './components/HowItWorks';
import DiagnosticForm from './components/DiagnosticForm';
import Differentials from './components/Differentials';
import TrustSignals from './components/TrustSignals';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SuccessMessage from './components/SuccessMessage';

function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ServiceAreas />
        <HowItWorks />
        <DiagnosticForm onSubmitSuccess={() => setShowSuccess(true)} />
        <Differentials />
        <TrustSignals />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />

      {showSuccess && <SuccessMessage />}
    </div>
  );
}

export default App;
