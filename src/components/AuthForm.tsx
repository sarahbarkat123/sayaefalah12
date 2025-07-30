// import { useState } from 'react';
// import { X, User, Lock, Mail, ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card } from '@/components/ui/card';
// import { useToast } from '@/hooks/use-toast';

// interface AuthFormProps {
//   onClose: () => void;
//   onSuccess: () => void;
//   formType: 'missing' | 'adoption';
// }

// const AuthForm = ({ onClose, onSuccess, formType }: AuthFormProps) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [slideDirection, setSlideDirection] = useState<'in' | 'out'>('in');
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate authentication process
//     setTimeout(() => {
//       setIsSubmitting(false);
//       toast({
//         title: isLogin ? "Login Successful" : "Account Created",
//         description: "You are now authenticated"
//       });
//       onSuccess();
//     }, 1500);
//   };

//   const toggleAuthMode = () => {
//     setSlideDirection('out');
//     setTimeout(() => {
//       setIsLogin(!isLogin);
//       setSlideDirection('in');
//     }, 300);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 animate-fade-in">
//       <Card className={`w-[90%] max-w-md p-6 relative bg-white shadow-xl transform transition-all duration-300 ${
//         slideDirection === 'in' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
//       }`}>
//         <Button 
//           variant="ghost" 
//           size="icon" 
//           className="absolute right-2 top-2" 
//           onClick={onClose}
//         >
//           <X className="h-4 w-4" />
//         </Button>
        
//         <div className="mb-6 text-center">
//           <h3 className="text-2xl font-bold text-foreground">
//             {isLogin ? 'Welcome Back' : 'Join Our Community'}
//           </h3>
//           <p className="text-muted-foreground mt-2">
//             {formType === 'missing' 
//               ? 'Help us find missing individuals' 
//               : 'Support the adoption process'}
//           </p>
//           <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
//         </div>

//         <form onSubmit={handleSubmit}>
//           {!isLogin && (
//             <div className="mb-4">
//               <Label htmlFor="name">Full Name</Label>
//               <div className="relative">
//                 <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                 <Input 
//                   id="name" 
//                   type="text" 
//                   placeholder="Enter your full name" 
//                   className="pl-10"
//                   required
//                 />
//               </div>
//             </div>
//           )}
          
//           <div className="mb-4">
//             <Label htmlFor="email">Email Address</Label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//               <Input 
//                 id="email" 
//                 type="email" 
//                 placeholder="Enter your email" 
//                 className="pl-10"
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="mb-6">
//             <Label htmlFor="password">Password</Label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//               <Input 
//                 id="password" 
//                 type="password" 
//                 placeholder="Enter your password" 
//                 className="pl-10"
//                 required
//               />
//             </div>
//           </div>
          
//           <Button 
//             type="submit" 
//             className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90" 
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Processing...' : isLogin ? 'Login' : 'Create Account'}
//             {!isSubmitting && <ArrowRight className="h-4 w-4" />}
//           </Button>
//         </form>
        
//         <div className="mt-4 text-center">
//           <Button 
//             variant="link" 
//             onClick={toggleAuthMode} 
//             className="text-primary hover:text-primary/80"
//           >
//             {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
//           </Button>
//         </div>
        
//         <div className="mt-6 pt-4 border-t border-border text-center">
//           <p className="text-sm text-muted-foreground">
//             By continuing, you agree to our <span className="text-primary cursor-pointer">Terms of Service</span> and <span className="text-primary cursor-pointer">Privacy Policy</span>
//           </p>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default AuthForm;














// import { useState } from 'react';

// const AuthForm = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const toggleToSignUp = () => setIsSignUp(true);
//   const toggleToSignIn = () => setIsSignUp(false);

//   return (
//     <div className="min-h-screen flex flex-col justify-center bg-[#f0f8ff]">
//       <div className="flex flex-col items-center px-5 py-8">
//         <h2 className="text-[35px] mb-6 text-[#003366] font-bold">Saya-e-Falah</h2>

//         <div
//           className={`relative w-full max-w-[768px] min-h-[650px] bg-white rounded-[10px] shadow-[0_14px_28px_rgba(0,0,0,0.2),_0_10px_10px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-500 ${
//             isSignUp ? 'right-panel-active' : ''
//           }`}
//         >
//           {/* Sign Up Form */}
//           <div
//             className={`absolute top-0 left-0 h-full w-1/2 p-10 flex flex-col items-center justify-center transition-all duration-700 ${
//               isSignUp ? 'translate-x-full opacity-100 z-10' : 'opacity-0 z-0'
//             }`}
//           >
//             <form className="w-full text-center">
//               <h1 className="text-2xl font-bold mb-2">Create Account</h1>
//               <p className="mb-4 text-sm">or use your email for registration</p>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="bg-[#eef6fb] mb-2 p-3 rounded w-full"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="bg-[#eef6fb] mb-2 p-3 rounded w-full"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="bg-[#eef6fb] mb-4 p-3 rounded w-full"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#0077b6] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-[#005f8e]"
//               >
//                 Sign Up
//               </button>
//             </form>
//           </div>

//           {/* Sign In Form */}
//           <div
//             className={`absolute top-0 left-0 h-full w-1/2 p-10 flex flex-col items-center justify-center transition-all duration-700 ${
//               isSignUp ? '-translate-x-full opacity-0 z-0' : 'opacity-100 z-10'
//             }`}
//           >
//             <form className="w-full text-center">
//               <h1 className="text-2xl font-bold mb-2">Sign In</h1>
//               <p className="mb-4 text-sm">or use your account</p>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="bg-[#eef6fb] mb-2 p-3 rounded w-full"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="bg-[#eef6fb] mb-2 p-3 rounded w-full"
//               />
//               <a href="#" className="text-sm text-blue-600 mb-4 block">
//                 Forgot your password?
//               </a>
//               <button
//                 type="submit"
//                 className="bg-[#0077b6] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-[#005f8e]"
//               >
//                 Sign In
//               </button>
//             </form>
//           </div>

//           {/* Overlay Section */}
//           <div
//             className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-20 transition-transform duration-700 ${
//               isSignUp ? '-translate-x-full' : ''
//             }`}
//           >
//             <div
//               className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white absolute left-[-100%] w-[200%] h-full flex items-center justify-around transition-transform duration-700 transform"
//               style={{ transform: isSignUp ? 'translateX(50%)' : 'translateX(0)' }}
//             >
//               {/* Left Overlay */}
//               <div className="w-1/2 text-center px-6">
//                 <h1 className="text-2xl font-bold mb-2">Welcome Back!</h1>
//                 <p className="mb-4 text-sm">
//                   To stay connected with Saya-e-Falah, please sign in
//                 </p>
//                 <button
//                   onClick={toggleToSignIn}
//                   className="border border-white text-white px-6 py-2 rounded-full uppercase font-semibold hover:bg-white hover:text-[#0077b6] transition"
//                 >
//                   Sign In
//                 </button>
//               </div>

//               {/* Right Overlay */}
//               <div className="w-1/2 text-center px-6">
//                 <h1 className="text-2xl font-bold mb-2">Hello, Friend!</h1>
//                 <p className="mb-4 text-sm">
//                   Enter your details and start your journey with Saya-e-Falah
//                 </p>
//                 <button
//                   onClick={toggleToSignUp}
//                   className="border border-white text-white px-6 py-2 rounded-full uppercase font-semibold hover:bg-white hover:text-[#0077b6] transition"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer className="bg-[#003366] text-white text-center py-4 text-sm mt-auto">
//         © 2025 Saya-e-Falah | All Rights Reserved
//       </footer>
//     </div>
//   );
// };

// export default AuthForm;













// import { useState } from 'react';
// import { X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/hooks/use-toast';

// interface AuthFormProps {
//   onClose: () => void;
//   onSuccess: () => void;
//   formType: 'missing' | 'adoption';
// }

// const AuthForm = ({ onClose, onSuccess, formType }: AuthFormProps) => {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       setIsSubmitting(false);
//       toast({
//         title: isSignUp ? 'Account Created' : 'Login Successful',
//         description: 'You are now authenticated',
//       });
//       onSuccess();
//     }, 1500);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
//       <div
//         className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl min-h-[600px] overflow-hidden transition-all duration-500"
//       >
//         <Button
//           variant="ghost"
//           size="icon"
//           className="absolute right-2 top-2 z-50"
//           onClick={onClose}
//         >
//           <X className="h-5 w-5" />
//         </Button>

//         <div
//           className={`flex transition-transform duration-700 ease-in-out ${
//             isSignUp ? '-translate-x-1/2' : ''
//           }`}
//           style={{ width: '200%', height: '100%' }}
//         >
//           {/* Sign In Form */}
//           <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-white text-center">
//             <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
//               <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
//               <p className="text-gray-500 text-sm mb-4">Use your account to continue</p>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 required
//                 className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none text-sm"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none text-sm"
//               />
//               <div className="text-right text-sm text-blue-500 hover:underline cursor-pointer">
//                 Forgot password?
//               </div>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="mt-4 w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
//               >
//                 {isSubmitting ? 'Processing...' : 'Sign In'}
//               </button>
//             </form>
//           </div>

//           {/* Sign Up Form */}
//           <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-white text-center">
//             <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
//               <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
//               <p className="text-gray-500 text-sm mb-4">Register with your details</p>
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 required
//                 className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none text-sm"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 required
//                 className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none text-sm"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none text-sm"
//               />
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="mt-4 w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
//               >
//                 {isSubmitting ? 'Processing...' : 'Sign Up'}
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Overlay Panels */}
//         <div className="absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-r from-blue-600 to-sky-400 text-white flex items-center justify-center transition-transform duration-700 ease-in-out z-10">
//           <div className="text-center px-8">
//             {isSignUp ? (
//               <>
//                 <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
//                 <p className="text-sm mb-6">
//                   Already have an account? Sign in to continue helping with&nbsp;
//                   <strong> Saya-e-Falah</strong>
//                 </p>
//                 <button
//                   onClick={() => setIsSignUp(false)}
//                   className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-blue-700 transition"
//                 >
//                   Sign In
//                 </button>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
//                 <p className="text-sm mb-6">
//                   Join us to make a difference with <strong>Saya-e-Falah</strong>
//                 </p>
//                 <button
//                   onClick={() => setIsSignUp(true)}
//                   className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-blue-700 transition"
//                 >
//                   Sign Up
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;












// import React, { useState } from 'react';

// interface AuthFormProps {
//   onClose: () => void;
//   onSuccess: () => void;
//   formType: 'missing' | 'adoption';
// }

// const AuthForm = ({ onClose, onSuccess, formType }: AuthFormProps) => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const toggleToSignUp = () => setIsSignUp(true);
//   const toggleToSignIn = () => setIsSignUp(false);

//   return (
//     <div className="auth-page">
//       <style>{`
//         .auth-page {
//           position: fixed;
//           inset: 0;
//           z-index: 50;
//           background-color: rgba(0, 0, 0, 0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-family: sans-serif;
//         }

//         .auth-wrapper {
//           background-color: #f0f8ff;
//           border-radius: 10px;
//           box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
//           max-width: 768px;
//           width: 100%;
//           overflow: hidden;
//           position: relative;
//         }

//         .auth-heading {
//           text-align: center;
//           font-size: 30px;
//           margin: 10px 0;
//           color: #003366;
//           font-weight: bold;
//         }

//         .container {
//           position: relative;
//           width: 100%;
//           display: flex;
//           min-height: 580px;
//           overflow: hidden;
//         }

//         .form-container {
//           position: absolute;
//           top: 0;
//           height: 100%;
//           transition: all 0.6s ease-in-out;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           width: 50%;
//           padding: 0 40px;
//           text-align: center;
//           background-color: #ffffff;
//         }

//         .sign-in-container {
//           left: 0;
//           z-index: 2;
//         }

//         .sign-up-container {
//           left: 0;
//           opacity: 0;
//           z-index: 1;
//         }

//         .container.right-panel-active .sign-in-container {
//           transform: translateX(100%);
//         }

//         .container.right-panel-active .sign-up-container {
//           transform: translateX(100%);
//           opacity: 1;
//           z-index: 5;
//           animation: show 0.6s;
//         }

//         @keyframes show {
//           0%, 49.99% { opacity: 0; z-index: 1; }
//           50%, 100% { opacity: 1; z-index: 5; }
//         }

//         input {
//           background-color: #eef6fb;
//           border: none;
//           padding: 12px 20px;
//           margin: 10px 0;
//           width: 100%;
//           border-radius: 5px;
//           font-size: 16px;
//         }

//         button {
//           border-radius: 20px;
//           border: 1px solid #0077b6;
//           background-color: #0077b6;
//           color: #fff;
//           font-size: 16px;
//           font-weight: bold;
//           padding: 12px 45px;
//           margin-top: 15px;
//           cursor: pointer;
//           transition: transform 80ms ease-in;
//         }

//         button.ghost {
//           background-color: transparent;
//           border-color: #ffffff;
//         }

//         .overlay-container {
//           position: absolute;
//           top: 0;
//           left: 50%;
//           width: 50%;
//           height: 100%;
//           overflow: hidden;
//           z-index: 100;
//           transition: transform 0.6s ease-in-out;
//         }

//         .container.right-panel-active .overlay-container {
//           transform: translateX(-100%);
//         }

//         .overlay {
//           background: linear-gradient(to right, #0077b6, #00b4d8);
//           background-size: cover;
//           position: relative;
//           left: -100%;
//           height: 100%;
//           width: 200%;
//           transform: translateX(0);
//           transition: transform 0.6s ease-in-out;
//         }

//         .container.right-panel-active .overlay {
//           transform: translateX(50%);
//         }

//         .overlay-panel {
//           position: absolute;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           padding: 0 40px;
//           text-align: center;
//           height: 100%;
//           width: 50%;
//           color: white;
//         }

//         .overlay-left {
//           transform: translateX(-20%);
//         }

//         .container.right-panel-active .overlay-left {
//           transform: translateX(0);
//         }

//         .overlay-right {
//           right: 0;
//           transform: translateX(0);
//         }

//         .container.right-panel-active .overlay-right {
//           transform: translateX(20%);
//         }

//         .close-btn {
//           position: absolute;
//           top: -20px;
//           right: -20px;
//           font-size: 30px;
//           background: transparent;
//           border: none;
//           color: #333;
//           cursor: pointer;
//         }
//       `}</style>

//       <div className="auth-wrapper">
//         <button className="close-btn" onClick={onClose}>×</button>
//         <h2 className="auth-heading">Saya-e-Falah</h2>
//         <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
//           {/* Sign Up Form */}
//           <div className="form-container sign-up-container">
//             <form onSubmit={(e) => { e.preventDefault(); onSuccess(); }}>
//               <h2>Create Account</h2>
//               <input type="text" placeholder="Full Name" required />
//               <input type="email" placeholder="Email" required />
//               <input type="password" placeholder="Password" required />
//               <button type="submit">Sign Up</button>
//             </form>
//           </div>

//           {/* Sign In Form */}
//           <div className="form-container sign-in-container">
//             <form onSubmit={(e) => { e.preventDefault(); onSuccess(); }}>
//               <h2>Sign In</h2>
//               <input type="email" placeholder="Email" required />
//               <input type="password" placeholder="Password" required />
//               <button type="submit">Sign In</button>
//             </form>
//           </div>

//           {/* Overlay */}
//           <div className="overlay-container">
//             <div className="overlay">
//               <div className="overlay-panel overlay-left">
//                 <h2>Welcome Back!</h2>
//                 <p>To stay connected, please sign in</p>
//                 <button className="ghost" onClick={toggleToSignIn}>Sign In</button>
//               </div>
//               <div className="overlay-panel overlay-right">
//                 <h2>Hello, Friend!</h2>
//                 <p>Start your journey with Saya-e-Falah</p>
//                 <button className="ghost" onClick={toggleToSignUp}>Sign Up</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;



import React, { useState } from 'react';

interface AuthFormProps {
  onClose: () => void;
  onSuccess: () => void;
  formType: 'missing' | 'adoption';
}

const AuthForm = ({ onClose, onSuccess, formType }: AuthFormProps) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleToSignUp = () => setIsSignUp(true);
  const toggleToSignIn = () => setIsSignUp(false);

  return (
    <div className="auth-page">
      <style>{`
        .auth-page {
          position: fixed;
          inset: 0;
          z-index: 50;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: sans-serif;
        }

        .auth-wrapper {
          background-color: #f0f8ff;
          border-radius: 10px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
          max-width: 768px;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .auth-heading {
          text-align: center;
          font-size: 30px;
          margin: 10px 0;
          color: #003366;
          font-weight: bold;
        }

        .container {
          position: relative;
          width: 100%;
          display: flex;
          min-height: 580px;
          overflow: hidden;
        }

        .form-container {
          position: absolute;
          top: 0;
          height: 100%;
          transition: all 0.6s ease-in-out;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 50%;
          padding: 0 40px;
          text-align: center;
          background-color: #ffffff;
        }

        .sign-in-container {
          left: 0;
          z-index: 2;
        }

        .sign-up-container {
          left: 0;
          opacity: 0;
          z-index: 1;
        }

        .container.right-panel-active .sign-in-container {
          transform: translateX(100%);
        }

        .container.right-panel-active .sign-up-container {
          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
          animation: show 0.6s;
        }

        @keyframes show {
          0%, 49.99% { opacity: 0; z-index: 1; }
          50%, 100% { opacity: 1; z-index: 5; }
        }

        input {
          background-color: #eef6fb;
          border: none;
          padding: 12px 20px;
          margin: 10px 0;
          width: 100%;
          border-radius: 5px;
          font-size: 16px;
        }

        button {
          border-radius: 20px;
          border: 1px solid #0077b6;
          background-color: #0077b6;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          padding: 12px 45px;
          margin-top: 15px;
          cursor: pointer;
          transition: transform 80ms ease-in;
        }

        button.ghost {
          background-color: transparent;
          border-color: #ffffff;
        }

        .overlay-container {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50%;
          height: 100%;
          overflow: hidden;
          z-index: 100;
          transition: transform 0.6s ease-in-out;
        }

        .container.right-panel-active .overlay-container {
          transform: translateX(-100%);
        }

        .overlay {
          background: linear-gradient(to right, #0077b6, #00b4d8);
          background-size: cover;
          position: relative;
          left: -100%;
          height: 100%;
          width: 200%;
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;
        }

        .container.right-panel-active .overlay {
          transform: translateX(50%);
        }

        .overlay-panel {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
          text-align: center;
          height: 100%;
          width: 50%;
          color: white;
        }

        .overlay-left {
          transform: translateX(-20%);
        }

        .container.right-panel-active .overlay-left {
          transform: translateX(0);
        }

        .overlay-right {
          right: 0;
          transform: translateX(0);
        }

        .container.right-panel-active .overlay-right {
          transform: translateX(20%);
        }

        .close-btn {
          position: absolute;
          top: -20px;
          right: -20px;
          font-size: 30px;
          background: transparent;
          border: none;
          color: #333;
          cursor: pointer;
        }
      `}</style>

      <div className="auth-wrapper">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="auth-heading">Saya-e-Falah</h2>
        <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
          {/* Sign Up Form */}
          <div className="form-container sign-up-container">
            <form onSubmit={(e) => { e.preventDefault(); onSuccess(); }}>
              <h2>Create Account</h2>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
            </form>
          </div>

          {/* Sign In Form */}
          <div className="form-container sign-in-container">
            <form onSubmit={(e) => { e.preventDefault(); onSuccess(); }}>
              <h2>Sign In</h2>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign In</button>
            </form>
          </div>

          {/* Overlay */}
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h2>Welcome Back!</h2>
                <p>To stay connected, please sign in</p>
                <button className="ghost" onClick={toggleToSignIn}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h2>Hello, Friend!</h2>
                <p>Start your journey with Saya-e-Falah</p>
                <button className="ghost" onClick={toggleToSignUp}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;




