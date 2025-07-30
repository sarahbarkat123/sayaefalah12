import { Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="section-title">Mission & Vision</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Saya-e-Falah is a beacon of hope dedicated to creating positive change in our community through compassion, connection, and concrete action.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-1.5 mt-0.5">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide critical support services that bring families together, help find missing loved ones, and promote community safety.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-1.5 mt-0.5">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A society where no one feels lost or alone, where communities work together to support each other in times of need.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-1.5 mt-0.5">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Values</h3>
                  <p className="text-muted-foreground">
                    Compassion, integrity, inclusivity, and unwavering dedication to those we serve guide every action we take.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary">1200+</p>
                <p className="text-sm text-muted-foreground">Missing People Found</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Successful Adoptions</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary">5000+</p>
                <p className="text-sm text-muted-foreground">Lives Impacted</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop" 
                alt="Community support" 
                className="rounded-lg shadow-xl w-full object-cover object-center h-[500px]"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs hidden md:block">
                <p className="text-sm font-medium">
                  "We believe in the power of community to transform lives and reunite families."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default About;