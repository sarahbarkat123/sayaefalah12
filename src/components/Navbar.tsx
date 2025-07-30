import { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import logoImg from '@/components/images/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Feedback', href: '#testimonials' },
  ];

  return (
    
<nav 
    // className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    // isScrolled ? 'bg-white/100 shadow-md py-6 h-[100px]' : 'bg-transparent py-6 h-[90px]'
  className={`fixed top-0 left-0 w-full z-50 mt-0 transition-all duration-300 ${
    isScrolled ? 'bg-white/100 shadow-md py-4 h-[72px]' : 'bg-transparent py-4 h-[90px]'
  }`}
>

      {/* <div className="container mx-auto px-4 flex items-center justify-between"> */}
      <div className="w-full max-w-[4000px] ml-[25px] pr-16 px-6 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Logo" className=" mt-0  h-14 w-14 object-contain" />
          {/* <Heart className="text-primary h-6 w-6" /> */}
          <span className="font-bold text-2xl md:text-3xl text-foreground">Saya-e-Falah</span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center gap-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground text-xl hover:text-primary font-semibold transition-colors"


                    // className="text-foreground hover:text-primary font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button variant="ghost" onClick={toggleMenu} className="p-1">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 animate-fade-in">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-foreground hover:text-primary font-medium block py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Volunteer Now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;











