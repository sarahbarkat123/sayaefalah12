// import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   return (
//     <footer className="bg-foreground text-white pt-16 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//           {/* Logo and About */}
//           <div className="col-span-1 md:col-span-1">
//             <div className="flex items-center gap-2 mb-4">
//               <Heart className="h-6 w-6 text-primary" />
//               <span className="font-bold text-xl">Saya-e-Falah</span>
//             </div>
//             <p className="text-white/80 mb-6">
//               A social welfare initiative dedicated to helping society through missing persons search, child adoption, and ambulance awareness.
//             </p>
//             <div className="flex gap-3">
//               <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors">
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors">
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors">
//                 <Youtube className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
          
//           {/* Quick Links */}
//           <div className="col-span-1 md:col-span-1">
//             <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//             <ul className="space-y-3">
//               <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Home</a></li>
//               <li><a href="#about" className="text-white/80 hover:text-primary transition-colors">About Us</a></li>
//               <li><a href="#services" className="text-white/80 hover:text-primary transition-colors">Our Services</a></li>
//               <li><a href="#testimonials" className="text-white/80 hover:text-primary transition-colors">Success Stories</a></li>
//               <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Volunteer</a></li>
//             </ul>
//           </div>
          
//           {/* Services */}
//           <div className="col-span-1 md:col-span-1">
//             <h3 className="font-bold text-lg mb-4">Our Services</h3>
//             <ul className="space-y-3">
//               <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Missing Persons</a></li>
//               <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Child Adoption</a></li>
//               <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Ambulance Awareness</a></li>
//               <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Community Support</a></li>
//               <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Donation Programs</a></li>
//             </ul>
//           </div>
          
//           {/* Contact */}
//           <div className="col-span-1 md:col-span-1">
//             <h3 className="font-bold text-lg mb-4">Contact Us</h3>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
//                 <span className="text-white/80">+92 300 1234567</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
//                 <span className="text-white/80">contact@sayaefalah.org</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
//                 <span className="text-white/80">123 Welfare Street, Karachi, Pakistan</span>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-white/60 text-sm">
//             © {currentYear} Saya-e-Falah. All rights reserved.
//           </p>
//           <div className="flex gap-6">
//             <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
//             <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
//             <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">FAQ</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-16 pb-8 text-left w-full">
      <div className="w-full max-w-[1800px] ml-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Saya-e-Falah</span>
            </div>
            <p className="text-white/80 mb-6">
              A social welfare initiative dedicated to helping society through
              missing persons search, child adoption, and ambulance awareness.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-primary transition-colors">Our Services</a></li>
              {/* <li><a href="#testimonials" className="text-white/80 hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Volunteer</a></li> */}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Missing Persons</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Child Adoption</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Ambulance Awareness</a></li>
              {/* <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Community Support</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Donation Programs</a></li> */}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/80">+92 300 1234567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/80">contact@sayaefalah.org</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/80">123 Welfare Street, Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Saya-e-Falah. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
