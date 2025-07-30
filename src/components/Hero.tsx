import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Heart } from 'lucide-react';
import heroImage from './images/digitalize-edhi-foundation.png';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="hero-gradient min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="w-full max-w-[2000px] ml-[30px] px-4 flex items-center justify-between">

      {/* <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center"> */}
        <div className="w-full md:w-1/2 z-10 mb-10 md:mb-0 md:pr-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Social Welfare Initiative</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Together for <span className="text-primary">Hope</span>, <span className="text-primary">Safety</span>
              <br />
              <span className="text-primary inline-block mt-3">&amp; Unity</span>
            </h1>

            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Joining hands to create a better society through care, support, and dedication to those in need.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 z-10">
          <div className="relative">
            <img 
               src={heroImage}
              // src="/components/images/digitalize-edhi-Foundation.png"
              //src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop" 
              alt="People helping each other" 
              className="rounded-lg shadow-xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">
                  We've helped over <span className="font-bold text-primary">2,500+</span> people
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;