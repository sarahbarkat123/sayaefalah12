import { useState } from 'react';
import { Search, Heart, Ambulance } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AuthForm from './AuthForm';
import MissingPersonForm from './MissingPersonForm';
import AdoptionForm from './AdoptionForm';
import AmbulanceModal from './AmbulanceModal';
import ambulanceImage from './images/ambulance.png'; 
import adoptionImage from './images/adoption.png';
import missingImage from './images/missing.png';


const Services = () => {
  const { toast } = useToast();
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showMissingPersonForm, setShowMissingPersonForm] = useState(false);
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);
  const [showAmbulanceModal, setShowAmbulanceModal] = useState(false);
  const [formType, setFormType] = useState<'missing' | 'adoption'>('missing');

  const handleServiceClick = (type: 'missing' | 'adoption') => {
    setFormType(type);
    setShowAuthForm(true);
  };

  const handleAuthSuccess = () => {
    setShowAuthForm(false);
    if (formType === 'missing') {
      setShowMissingPersonForm(true);
    } else if (formType === 'adoption') {
      setShowAdoptionForm(true);
    }
  };

  const services = [
    {
      icon: <img src={missingImage} alt="Missing People" className="h-12 w-12 object-contain" />,
      // icon: <Search className="h-12 w-12 text-primary" />,
      title: "Missing People",
      description: "Report or search for missing individuals. Our network helps reconnect loved ones.",
      buttonText: "Search or Report",
      action: () => handleServiceClick('missing')
    },
    {
      icon: <img src={adoptionImage} alt="Adoption" className="h-12 w-12 object-contain" />,
      // icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Adoption",
      description: "Information about adopting a child or giving a child for adoption with proper guidance.",
      buttonText: "Learn About Adoption",
      action: () => handleServiceClick('adoption')
    },
    {
      icon: <img src={ambulanceImage} alt="Ambulance" className="h-12 w-12 object-contain" />,
      // icon: <Ambulance className="h-12 w-12 text-primary" />,
      title: "Ambulance",
      description: "Emergency medical transportation services and awareness about ambulance protocols.",
      buttonText: "Emergency Services",
      action: () => setShowAmbulanceModal(true)
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title mx-auto">Core Modules</h2>
          <p className="text-muted-foreground text-lg">
            Our services are designed to address critical needs in the community, bringing help where it's needed most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 card-hover border border-border bg-white transition-all duration-300"
              onClick={service.action}
            >
              <div className="bg-primary/10 rounded-full p-4 w-fit mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <Button 
                className="w-full py-5 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                {service.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Auth Form Modal */}
      {showAuthForm && (
        <AuthForm 
          onClose={() => setShowAuthForm(false)} 
          onSuccess={handleAuthSuccess} 
          formType={formType}
        />
      )}

      {/* Missing Person Form */}
      {showMissingPersonForm && (
        <MissingPersonForm onClose={() => setShowMissingPersonForm(false)} />
      )}

      {/* Adoption Form */}
      {showAdoptionForm && (
        <AdoptionForm onClose={() => setShowAdoptionForm(false)} />
      )}

      {/* Ambulance Modal */}
      {showAmbulanceModal && (
        <AmbulanceModal onClose={() => setShowAmbulanceModal(false)} />
      )}
    </section>
  );
};

export default Services;