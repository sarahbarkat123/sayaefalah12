import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show the button after scrolling down 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a 
      href="https://wa.me/923001234567?text=Hello%20Saya-e-Falah,%20I%20need%20assistance%20with" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 bg-green-500 p-3.5 rounded-full shadow-lg 
        transition-all duration-300 hover:bg-green-600 ${isVisible ? 'scale-100' : 'scale-0'}`}
      title="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;