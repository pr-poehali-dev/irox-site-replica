import Hero from '@/components/webapp/Hero';
import Services from '@/components/webapp/Services';
import Gallery from '@/components/webapp/Gallery';
import Testimonials from '@/components/webapp/Testimonials';
import Contact from '@/components/webapp/Contact';
import Footer from '@/components/webapp/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;