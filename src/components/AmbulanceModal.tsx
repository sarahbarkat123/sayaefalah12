import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Ambulance, Download } from 'lucide-react';

interface AmbulanceModalProps {
  onClose: () => void;
}

const AmbulanceModal = ({ onClose }: AmbulanceModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      {/* Backdrop with blur effect */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <Card className="w-[90%] max-w-md p-8 bg-white rounded-xl shadow-xl relative z-10">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-3 top-3 hover:bg-gray-100 rounded-full"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
        
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-100 rounded-full p-5 mb-4">
            <Ambulance className="h-10 w-10 text-red-500" />
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-2">Service Unavailable</h3>
          
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg mb-4">
            <p className="text-red-600 font-medium">
              🚫 This service is currently not available on our website. Please download our mobile app for access.
            </p>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Our mobile application provides emergency ambulance services with GPS tracking and real-time updates.
          </p>
          
          <Button 
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 w-full py-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <Download className="h-5 w-5" />
            Download Mobile App
          </Button>
          
          <p className="text-xs text-muted-foreground mt-4">
            Available for iOS and Android devices
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AmbulanceModal;