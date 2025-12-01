import Hero from '@/components/webapp/Hero';
import Benefits from '@/components/webapp/Benefits';
import Gallery from '@/components/webapp/Gallery';
import Testimonials from '@/components/webapp/Testimonials';
import Contact from '@/components/webapp/Contact';
import Footer from '@/components/webapp/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Benefits />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
