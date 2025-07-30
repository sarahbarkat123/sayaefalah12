// import { ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const CTA = () => {
//   return (
//     <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="bg-gradient-to-r from-primary/80 to-primary rounded-2xl p-8 md:p-12 shadow-lg relative z-10 overflow-hidden">
//           {/* Background shapes */}
//           <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-md"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-md"></div>
          
//           <div className="max-w-3xl mx-auto text-center relative z-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Give Us Feedback
//             </h2>
            
//             <p className="text-white/90 text-lg mb-8">
//               Whether you're looking to volunteer your time, donate resources, or spread awareness, your support can help us reunite families and create hope for those in need.
//             </p>
            
//             <div className="flex flex-wrap gap-4 justify-center">
//               <Button size="lg" className="bg-white text-primary hover:bg-white/90">
//                 Become a Volunteer
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
              
//               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
//                 Support the Mission
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTA;










// import { useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const CTA = () => {
//   const [showFeedbackForm, setShowFeedbackForm] = useState(false);
//   const [feedback, setFeedback] = useState('');

//   const handleSubmit = () => {
//     if (!feedback.trim()) {
//       alert('Please write some feedback first!');
//       return;
//     }

//     // You can integrate with Firebase or backend here
//     console.log('Submitted Feedback:', feedback);
//     alert('Thank you for your feedback!');
//     setFeedback('');
//     setShowFeedbackForm(false);
//   };

//   return (
//     <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="bg-gradient-to-r from-primary/80 to-primary rounded-2xl p-8 md:p-12 shadow-lg relative z-10 overflow-hidden">
          
//           {/* Background shapes */}
//           <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-md"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-md"></div>

//           <div className="max-w-3xl mx-auto text-center relative z-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Give Us Feedback
//             </h2>

//             <p className="text-white/90 text-lg mb-8">
//               We value your thoughts and suggestions! Your feedback helps us improve our services and continue making a difference in the lives of those who need us most.
//             </p>

//             <div className="flex flex-wrap gap-4 justify-center mb-6">
//               <Button
//                 size="lg"
//                 className="bg-white text-primary hover:bg-white/90"
//                 onClick={() => setShowFeedbackForm(!showFeedbackForm)}
//               >
//                 Write Feedback
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="bg-white text-primary hover:bg-white/90"
//               >
//                 View Feedback
//               </Button>
//             </div>

//             {showFeedbackForm && (
//               <div className="mt-4">
//                 <textarea
//                   className="w-full h-32 p-4 rounded-lg text-black resize-none focus:outline-none focus:ring-2 focus:ring-white/50"
//                   placeholder="Type your feedback here..."
//                   value={feedback}
//                   onChange={(e) => setFeedback(e.target.value)}
//                 ></textarea>

//                 <Button
//                   onClick={handleSubmit}
//                   className="mt-4 bg-white text-primary hover:bg-white/90"
//                 >
//                   Submit Feedback
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTA;







import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (!feedback.trim()) {
      alert('Please write some feedback first!');
      return;
    }

    // You can integrate with Firebase or backend here
    console.log('Submitted Feedback:', feedback);
    alert('Thank you for your feedback!');
    setFeedback('');
    setShowFeedbackForm(false);
  };

  return (
    <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/80 to-primary rounded-2xl p-8 md:p-12 shadow-lg relative z-10 overflow-hidden">
          
          {/* Background shapes */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-md"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-md"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Give Us Feedback
            </h2>

            <p className="text-white/90 text-lg mb-8">
              We value your thoughts and suggestions! Your feedback helps us improve our services and continue making a difference in the lives of those who need us most.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => setShowFeedbackForm(!showFeedbackForm)}
              >
                Write Feedback
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <a href="#testimonials">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  View Feedback
                </Button>
              </a>
            </div>

            {showFeedbackForm && (
              <div className="mt-4">
                <textarea
                  className="w-full h-32 p-4 rounded-lg text-black resize-none focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Type your feedback here..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>

                <Button
                  onClick={handleSubmit}
                  className="mt-4 bg-white text-primary hover:bg-white/90"
                >
                  Submit Feedback
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
