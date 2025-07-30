// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// // import umairImg from "../components/images/umair.png";
// import umairImg from "./images/umair.png";

// const testimonials = [
//   {
//     name: "Ahmed Khan",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
//     quote: "After my son went missing, I was devastated. Saya-e-Falah helped us find him within a week. Their network and dedication are unmatched.",
//     role: "Parent of Found Child"
//   },
//   {
//     name: "Fatima Zaidi",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
//     quote: "The adoption process was overwhelming, but the team at Saya-e-Falah guided us through every step with patience and kindness.",
//     role: "Adoptive Parent"
//   },
//   {
//     name: "Imran Ahmed",
//      image: umairImg,
//     // image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop",
//     quote: "I volunteer with Saya-e-Falah because I've seen firsthand how they transform lives. Their commitment to helping others is inspiring.",
//     role: "Volunteer"
//   }
// ];

// const Testimonials = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   // Auto rotate testimonials every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextTestimonial();
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="testimonials" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <h2 className="section-title mx-auto">Feedback</h2>
//           <p className="text-muted-foreground text-lg">
//             Read about the impact we've had on the lives of people in our community.
//           </p>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-lg p-6 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
//           <div className="absolute top-4 left-4">
//             <Quote className="h-12 w-12 text-primary/10" />
//           </div>
          
//           <div className="text-center">
//             <div className="mx-auto w-20 h-20 rounded-full overflow-hidden mb-6">
//               <img 
//                 src={testimonials[currentTestimonial].image} 
//                 alt={testimonials[currentTestimonial].name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
            
//             <p className="text-lg md:text-xl mb-6 italic text-muted-foreground">
//               "{testimonials[currentTestimonial].quote}"
//             </p>
            
//             <h3 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h3>
//             <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
            
//             <div className="flex justify-center gap-4 mt-8">
//               <Button 
//                 variant="ghost" 
//                 size="icon" 
//                 onClick={prevTestimonial}
//                 className="rounded-full border border-border hover:bg-primary/10 hover:text-primary"
//               >
//                 <ChevronLeft className="h-5 w-5" />
//               </Button>
              
//               <div className="flex gap-2 items-center">
//                 {testimonials.map((_, index) => (
//                   <button 
//                     key={index}
//                     onClick={() => setCurrentTestimonial(index)}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       currentTestimonial === index ? 'bg-primary w-6' : 'bg-primary/30'
//                     }`}
//                     aria-label={`Go to testimonial ${index + 1}`}
//                   />
//                 ))}
//               </div>
              
//               <Button 
//                 variant="ghost" 
//                 size="icon" 
//                 onClick={nextTestimonial}
//                 className="rounded-full border border-border hover:bg-primary/10 hover:text-primary"
//               >
//                 <ChevronRight className="h-5 w-5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;















import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import umairImg from '@/components/images/umair.jpeg';
import nabeelImg from '@/components/images/Nabeel.jpeg';
import lalainImg from '@/components/images/lalain.jpeg';

const testimonials = [
  {
    name: "Lalain Anwar",
    image : lalainImg,
    // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    quote: "This project beautifully bridges technology and humanity to help lost people and families.",
    role: "UI/UX Designer"
  },
  {
    name: "Nabeel Akhtar",
    image: nabeelImg,
    // image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    quote: "Finally, a centralized system that makes adoption, ambulance tracking, and child welfare seamless and secure.",
    role: "Techward CEO"
  },
  {
    name: "Umair Ali Khatri",
    image: umairImg,

    // image: "components/images/umair.jpeg", // Using image from public folder
    quote: "The project reflects real empathy backed by technology — exactly what our society needs today.",
    role: "Figma Designer"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title mx-auto">Feedback</h2>
          <p className="text-muted-foreground text-lg">
            Read about the impact we've had on the lives of people in our community.
          </p>
        </div>

        <div
          className="bg-white rounded-xl shadow-lg p-6 md:p-12 max-w-4xl mx-auto relative overflow-hidden transition-all"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute top-4 left-4">
            <Quote className="h-12 w-12 text-primary/10" />
          </div>

          <div className="text-center">
            <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-6">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-lg md:text-xl mb-6 italic text-muted-foreground">
              "{testimonials[currentTestimonial].quote}"
            </p>

            <h3 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h3>
            <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border border-border hover:bg-primary/10 hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-primary w-6' : 'bg-primary/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border border-border hover:bg-primary/10 hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
