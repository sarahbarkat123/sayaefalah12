// import { useState } from 'react';
// import { X, Home, User, Phone, Heart, FileText, MapPin, HelpCircle, Upload } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card } from '@/components/ui/card';
// import { Textarea } from '@/components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { useToast } from '@/hooks/use-toast';

// interface AdoptionFormProps {
//   onClose: () => void;
// }

// const AdoptionForm = ({ onClose }: AdoptionFormProps) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formType, setFormType] = useState<'adopt' | 'giveup'>('adopt');
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission process
//     setTimeout(() => {
//       setIsSubmitting(false);
//       toast({
//         title: "Application Submitted",
//         description: formType === 'adopt' 
//           ? "Your adoption application has been received. Our team will contact you for the next steps." 
//           : "Your request has been submitted. A counselor will contact you soon to discuss options.",
//       });
//       onClose();
//     }, 2000);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm animate-fade-in">
//       <Card className="w-[95%] max-w-2xl p-8 relative bg-white shadow-xl rounded-xl max-h-[90vh] overflow-y-auto">
//         <Button 
//           variant="ghost" 
//           size="icon" 
//           className="absolute right-3 top-3 hover:bg-gray-100 rounded-full" 
//           onClick={onClose}
//         >
//           <X className="h-5 w-5" />
//         </Button>
        
//         <div className="mb-8 text-center">
//           <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
//             <Heart className="h-6 w-6 text-primary" />
//           </div>
//           <h3 className="text-2xl font-bold text-foreground">Adoption Application</h3>
//           <p className="text-muted-foreground mt-3">
//             Please complete this form with accurate information
//           </p>
//           <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
//         </div>

//         <div className="mb-8">
//           <Label className="text-base font-medium mb-3 block">I want to:</Label>
//           <RadioGroup 
//             defaultValue="adopt" 
//             className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//             onValueChange={(value) => setFormType(value as 'adopt' | 'giveup')}
//           >
//             <Label 
//               htmlFor="adopt-option" 
//               className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all shadow-sm hover:shadow-md ${
//                 formType === 'adopt' ? 'bg-primary/10 border-primary shadow-md' : 'bg-card border-border'
//               }`}
//             >
//               <RadioGroupItem value="adopt" id="adopt-option" className="text-primary w-5 h-5" />
//               <div>
//                 <span className="font-medium block">Adopt a Child</span>
//                 <span className="text-xs text-muted-foreground">Apply to adopt a child</span>
//               </div>
//             </Label>
            
//             <Label 
//               htmlFor="giveup-option" 
//               className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all shadow-sm hover:shadow-md ${
//                 formType === 'giveup' ? 'bg-primary/10 border-primary shadow-md' : 'bg-card border-border'
//               }`}
//             >
//               <RadioGroupItem value="giveup" id="giveup-option" className="text-primary w-5 h-5" />
//               <div>
//                 <span className="font-medium block">Give Child for Adoption</span>
//                 <span className="text-xs text-muted-foreground">Request counseling and support</span>
//               </div>
//             </Label>
//           </RadioGroup>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <User className="h-5 w-5" />
//               Personal Information
//             </h4>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="name" className="text-sm font-medium">Full Name*</Label>
//                 <Input 
//                   id="name" 
//                   required 
//                   placeholder="Enter your full name" 
//                   className="h-11 text-base"
//                 />
//               </div>
              
//               <div className="space-y-2">
//                 <Label htmlFor="age" className="text-sm font-medium">Age*</Label>
//                 <Input 
//                   id="age" 
//                   required 
//                   type="number" 
//                   placeholder="Enter your age" 
//                   className="h-11 text-base"
//                 />
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//               <div className="space-y-2">
//                 <Label htmlFor="gender" className="text-sm font-medium">Gender*</Label>
//                 <Select required>
//                   <SelectTrigger className="h-11 text-base">
//                     <SelectValue placeholder="Select gender" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
              
//               <div className="space-y-2">
//                 <Label htmlFor="phone" className="text-sm font-medium">Contact Number*</Label>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                   <Input 
//                     id="phone" 
//                     type="tel" 
//                     className="pl-11 h-11 text-base" 
//                     required 
//                     placeholder="+92 XXX XXXXXXX" 
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="address" className="text-sm font-medium">Residential Address*</Label>
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                 <Textarea 
//                   id="address" 
//                   className="pl-11 min-h-24 text-base" 
//                   placeholder="Enter your complete address"
//                   required
//                 />
//               </div>
//             </div>
//           </Card>
          
//           {formType === 'adopt' ? (
//             <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//               <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//                 <Heart className="h-5 w-5" />
//                 Adoption Preferences
//               </h4>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="childAge" className="text-sm font-medium">Preferred Age Range*</Label>
//                   <Select required>
//                     <SelectTrigger className="h-11 text-base">
//                       <SelectValue placeholder="Select age range" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="infant">Infant (0-1 year)</SelectItem>
//                       <SelectItem value="toddler">Toddler (1-3 years)</SelectItem>
//                       <SelectItem value="preschool">Preschool (3-5 years)</SelectItem>
//                       <SelectItem value="schoolage">School Age (6-12 years)</SelectItem>
//                       <SelectItem value="teen">Teenager (13-18 years)</SelectItem>
//                       <SelectItem value="any">Any age</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
                
//                 <div className="space-y-2">
//                   <Label htmlFor="childGender" className="text-sm font-medium">Preferred Gender</Label>
//                   <Select>
//                     <SelectTrigger className="h-11 text-base">
//                       <SelectValue placeholder="Select gender preference" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="male">Male</SelectItem>
//                       <SelectItem value="female">Female</SelectItem>
//                       <SelectItem value="any">No preference</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
              
//               <div className="space-y-2 mt-6">
//                 <Label htmlFor="familyMembers" className="text-sm font-medium">Family Members*</Label>
//                 <Textarea 
//                   id="familyMembers" 
//                   className="min-h-24 text-base" 
//                   placeholder="Please list all members of your household, their ages, and relationship to you"
//                   required
//                 />
//               </div>
              
//               <div className="space-y-2 mt-6">
//                 <Label htmlFor="reasonAdoption" className="text-sm font-medium">Reason for Adoption*</Label>
//                 <Textarea 
//                   id="reasonAdoption" 
//                   className="min-h-28 text-base" 
//                   placeholder="Please share why you want to adopt a child"
//                   required
//                 />
//               </div>

//               <div className="space-y-2 mt-6">
//                 <Label htmlFor="documents" className="text-sm font-medium">Upload Supporting Documents</Label>
//                 <div className="border border-dashed border-border rounded-lg p-4 bg-secondary/40 hover:bg-secondary/60 transition-colors cursor-pointer">
//                   <div className="flex flex-col items-center justify-center gap-2">
//                     <Upload className="h-8 w-8 text-muted-foreground" />
//                     <p className="text-sm font-medium">Drag & drop or click to upload</p>
//                     <p className="text-xs text-muted-foreground">ID, income proof, residence proof (max size: 5MB)</p>
//                     <Input 
//                       id="documents" 
//                       type="file"
//                       multiple
//                       className="hidden" 
//                     />
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="sm"
//                       className="mt-2"
//                       onClick={() => document.getElementById('documents')?.click()}
//                     >
//                       Select Files
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           ) : (
//             <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//               <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//                 <HelpCircle className="h-5 w-5" />
//                 Child Information
//               </h4>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="childName" className="text-sm font-medium">Child's Name (if comfortable sharing)</Label>
//                   <Input 
//                     id="childName" 
//                     placeholder="Enter child's name" 
//                     className="h-11 text-base"
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <Label htmlFor="childAge" className="text-sm font-medium">Child's Age*</Label>
//                   <Input 
//                     id="childAge" 
//                     required 
//                     type="number" 
//                     placeholder="Enter child's age" 
//                     className="h-11 text-base"
//                   />
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="childGender" className="text-sm font-medium">Child's Gender*</Label>
//                   <Select required>
//                     <SelectTrigger className="h-11 text-base">
//                       <SelectValue placeholder="Select gender" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="male">Male</SelectItem>
//                       <SelectItem value="female">Female</SelectItem>
//                       <SelectItem value="other">Other</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
                
//                 <div className="space-y-2">
//                   <Label htmlFor="relationship" className="text-sm font-medium">Your Relationship to Child*</Label>
//                   <Select required>
//                     <SelectTrigger className="h-11 text-base">
//                       <SelectValue placeholder="Select relationship" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="parent">Biological Parent</SelectItem>
//                       <SelectItem value="guardian">Legal Guardian</SelectItem>
//                       <SelectItem value="relative">Relative</SelectItem>
//                       <SelectItem value="other">Other</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
              
//               <div className="space-y-2 mt-6">
//                 <Label htmlFor="reason" className="text-sm font-medium">Reason for Considering Adoption*</Label>
//                 <Textarea 
//                   id="reason" 
//                   className="min-h-28 text-base" 
//                   placeholder="Please share your circumstances and why you're considering adoption for the child"
//                   required
//                 />
//               </div>

//               <div className="space-y-2 mt-6">
//                 <Label htmlFor="childPhoto" className="text-sm font-medium">Child's Photo (Optional)</Label>
//                 <div className="border border-dashed border-border rounded-lg p-4 bg-secondary/40 hover:bg-secondary/60 transition-colors cursor-pointer">
//                   <div className="flex flex-col items-center justify-center gap-2">
//                     <Upload className="h-8 w-8 text-muted-foreground" />
//                     <p className="text-sm font-medium">Drag & drop or click to upload</p>
//                     <p className="text-xs text-muted-foreground">Recent photo of the child (optional)</p>
//                     <Input 
//                       id="childPhoto" 
//                       type="file"
//                       accept="image/*" 
//                       className="hidden" 
//                     />
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="sm"
//                       className="mt-2"
//                       onClick={() => document.getElementById('childPhoto')?.click()}
//                     >
//                       Select File
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           )}
          
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <FileText className="h-5 w-5" />
//               Additional Information
//             </h4>
            
//             <div className="space-y-2">
//               <Label htmlFor="additionalInfo" className="text-sm font-medium">Any other information you would like to share</Label>
//               <Textarea 
//                 id="additionalInfo" 
//                 className="min-h-24 text-base" 
//                 placeholder="Please provide any other details you think would be helpful"
//               />
//             </div>
//           </Card>
          
//           <div className="pt-6 border-t border-border">
//             <Button 
//               type="submit" 
//               className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 h-12 text-lg font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Submitting...' : formType === 'adopt' ? 'Submit Adoption Application' : 'Submit Request'}
//             </Button>
            
//             <p className="text-xs text-center text-muted-foreground mt-4">
//               By submitting this form, you confirm that all information provided is accurate. 
//               A counselor will contact you to discuss the next steps in the adoption process.
//             </p>
//           </div>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default AdoptionForm;









// import { useState } from 'react';
// import { X, User, Phone, Heart, FileText, MapPin, Upload } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card } from '@/components/ui/card';
// import { Textarea } from '@/components/ui/textarea';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { useToast } from '@/hooks/use-toast';

// interface AdoptionFormProps {
//   onClose: () => void;
// }

// const AdoptionForm = ({ onClose }: AdoptionFormProps) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       setIsSubmitting(false);
//       toast({
//         title: 'Application Submitted',
//         description:
//           'Your adoption application has been received. Our team will contact you for the next steps.',
//       });
//       onClose();
//     }, 2000);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm animate-fade-in">
//       <Card className="w-[95%] max-w-[900px] p-8 relative bg-white shadow-xl rounded-xl max-h-[90vh] overflow-y-auto">
//       {/* <Card className="w-[95%] max-w-2xl p-8 relative bg-white shadow-xl rounded-xl max-h-[90vh] overflow-y-auto"> */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="absolute right-3 top-3 hover:bg-gray-100 rounded-full"
//           onClick={onClose}
//         >
//           <X className="h-5 w-5" />
//         </Button>

//         <div className="mb-8 text-center">
//           <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
//             <Heart className="h-6 w-6 text-primary" />
//           </div>
//           <h3 className="text-2xl font-bold text-foreground">Adoption Application</h3>
//           <p className="text-muted-foreground mt-3">
//             Please complete this form with accurate information
//           </p>
//           <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* Static Option Removed Switching */}
//         <div className="mb-8">
//           <Label className="text-base font-medium mb-3 block">I want to:</Label>
//           <RadioGroup defaultValue="adopt" className="grid grid-cols-1">
//             <Label
//               htmlFor="adopt-option"
//               className="flex items-center gap-3 p-4 border rounded-lg bg-primary/10 border-primary shadow-md cursor-not-allowed"
//             >
//               <RadioGroupItem
//                 value="adopt"
//                 id="adopt-option"
//                 className="text-primary w-5 h-5"
//                 disabled
//               />
//               <div>
//                 <span className="font-medium block">Adopt a Child</span>
//                 <span className="text-xs text-muted-foreground">
//                   Apply to adopt a child
//                 </span>
//               </div>
//             </Label>
//           </RadioGroup>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <User className="h-5 w-5" />
//               Personal Information
//             </h4>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="name" className="text-sm font-medium">
//                   Full Name*
//                 </Label>
//                 <Input
//                   id="name"
//                   required
//                   placeholder="Enter your full name"
//                   className="h-11 text-base"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="age" className="text-sm font-medium">
//                   Age*
//                 </Label>
//                 <Input
//                   id="age"
//                   required
//                   type="number"
//                   placeholder="Enter your age"
//                   className="h-11 text-base"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//               <div className="space-y-2">
//                 <Label htmlFor="gender" className="text-sm font-medium">
//                   Gender*
//                 </Label>
//                 <Select required>
//                   <SelectTrigger className="h-11 text-base">
//                     <SelectValue placeholder="Select gender" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="phone" className="text-sm font-medium">
//                   Contact Number*
//                 </Label>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                   <Input
//                     id="phone"
//                     type="tel"
//                     className="pl-11 h-11 text-base"
//                     required
//                     placeholder="+92 XXX XXXXXXX"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="address" className="text-sm font-medium">
//                 Residential Address*
//               </Label>
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                 <Textarea
//                   id="address"
//                   className="pl-11 min-h-24 text-base"
//                   placeholder="Enter your complete address"
//                   required
//                 />
//               </div>
//             </div>
//           </Card>

//           {/* Adoption Preferences */}
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <Heart className="h-5 w-5" />
//               Adoption Preferences
//             </h4>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="childAge" className="text-sm font-medium">
//                   Preferred Age Range*
//                 </Label>
//                 <Select required>
//                   <SelectTrigger className="h-11 text-base">
//                     <SelectValue placeholder="Select age range" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="infant">Infant (0-1 year)</SelectItem>
//                     <SelectItem value="toddler">Toddler (1-3 years)</SelectItem>
//                     <SelectItem value="preschool">Preschool (3-5 years)</SelectItem>
//                     <SelectItem value="schoolage">School Age (6-12 years)</SelectItem>
//                     <SelectItem value="teen">Teenager (13-18 years)</SelectItem>
//                     <SelectItem value="any">Any age</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="childGender" className="text-sm font-medium">
//                   Preferred Gender
//                 </Label>
//                 <Select>
//                   <SelectTrigger className="h-11 text-base">
//                     <SelectValue placeholder="Select gender preference" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                     <SelectItem value="any">No preference</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="familyMembers" className="text-sm font-medium">
//                 Family Members*
//               </Label>
//               <Textarea
//                 id="familyMembers"
//                 className="min-h-24 text-base"
//                 placeholder="Please list all members of your household, their ages, and relationship to you"
//                 required
//               />
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="reasonAdoption" className="text-sm font-medium">
//                 Reason for Adoption*
//               </Label>
//               <Textarea
//                 id="reasonAdoption"
//                 className="min-h-28 text-base"
//                 placeholder="Please share why you want to adopt a child"
//                 required
//               />
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="documents" className="text-sm font-medium">
//                 Upload Supporting Documents
//               </Label>
//               <div className="border border-dashed border-border rounded-lg p-4 bg-secondary/40 hover:bg-secondary/60 transition-colors cursor-pointer">
//                 <div className="flex flex-col items-center justify-center gap-2">
//                   <Upload className="h-8 w-8 text-muted-foreground" />
//                   <p className="text-sm font-medium">Drag & drop or click to upload</p>
//                   <p className="text-xs text-muted-foreground">
//                     ID, income proof, residence proof (max size: 5MB)
//                   </p>
//                   <Input id="documents" type="file" multiple className="hidden" />
//                   <Button
//                     type="button"
//                     variant="outline"
//                     size="sm"
//                     className="mt-2"
//                     onClick={() =>
//                       document.getElementById('documents')?.click()
//                     }
//                   >
//                     Select Files
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </Card>

//           {/* Additional Info */}
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <FileText className="h-5 w-5" />
//               Additional Information
//             </h4>

//             <div className="space-y-2">
//               <Label htmlFor="additionalInfo" className="text-sm font-medium">
//                 Any other information you would like to share
//               </Label>
//               <Textarea
//                 id="additionalInfo"
//                 className="min-h-24 text-base"
//                 placeholder="Please provide any other details you think would be helpful"
//               />
//             </div>
//           </Card>

//           <div className="pt-6 border-t border-border">
//             <Button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 h-12 text-lg font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit Adoption Application'}
//             </Button>

//             <p className="text-xs text-center text-muted-foreground mt-4">
//               By submitting this form, you confirm that all information provided is accurate. A
//               counselor will contact you to discuss the next steps in the adoption process.
//             </p>
//           </div>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default AdoptionForm;



// import { useState } from 'react';
// import { X, User, Phone, Heart, FileText, MapPin, Upload } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card } from '@/components/ui/card';
// import { Textarea } from '@/components/ui/textarea';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { useToast } from '@/hooks/use-toast';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { db, storage } from '@/firebase';

// interface AdoptionFormProps {
//   onClose: () => void;
// }

// const AdoptionForm = ({ onClose }: AdoptionFormProps) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     age: 0,
//     gender: '',
//     phone: '',
//     address: '',
//     childAgePreference: '',
//     childGenderPreference: '',
//     familyMembers: '',
//     reasonAdoption: '',
//     additionalInfo: '',
//     documents: [] as File[],
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [id]: id === 'age' ? parseInt(value) || 0 : value,
//     }));
//   };

//   const handleSelectChange = (id: string, value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       [id]: value,
//     }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFormData(prev => ({
//         ...prev,
//         documents: Array.from(e.target.files as FileList),
//       }));
//     }
//   };

//   const uploadFiles = async (files: File[]) => {
//     const uploadPromises = files.map(async (file) => {
//       const storageRef = ref(storage, `adoption-documents/${Date.now()}-${file.name}`);
//       await uploadBytes(storageRef, file);
//       return getDownloadURL(storageRef);
//     });
//     return Promise.all(uploadPromises);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Upload documents if any
//       let documentUrls: string[] = [];
//       if (formData.documents.length > 0) {
//         documentUrls = await uploadFiles(formData.documents);
//       }

//       // Save to Firestore
//       await addDoc(collection(db, 'adoptionApplications'), {
//         ...formData,
//         documents: documentUrls,
//         status: 'pending',
//         createdAt: serverTimestamp(),
//       });

//       toast({
//         title: 'Application Submitted',
//         description: 'Your adoption application has been received successfully!',
//       });
//       onClose();
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast({
//         title: 'Error',
//         description: 'There was an error submitting your application. Please try again.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm animate-fade-in">
//       <Card className="w-[95%] max-w-[900px] p-8 relative bg-white shadow-xl rounded-xl max-h-[90vh] overflow-y-auto">
//         <Button
//           variant="ghost"
//           size="icon"
//           className="absolute right-3 top-3 hover:bg-gray-100 rounded-full"
//           onClick={onClose}
//         >
//           <X className="h-5 w-5" />
//         </Button>

//         <div className="mb-8 text-center">
//           <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
//             <Heart className="h-6 w-6 text-primary" />
//           </div>
//           <h3 className="text-2xl font-bold text-foreground">Adoption Application</h3>
//           <p className="text-muted-foreground mt-3">
//             Please complete this form with accurate information
//           </p>
//           <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
//         </div>

//         <div className="mb-8">
//           <Label className="text-base font-medium mb-3 block">I want to:</Label>
//           <RadioGroup defaultValue="adopt" className="grid grid-cols-1">
//             <Label
//               htmlFor="adopt-option"
//               className="flex items-center gap-3 p-4 border rounded-lg bg-primary/10 border-primary shadow-md cursor-not-allowed"
//             >
//               <RadioGroupItem
//                 value="adopt"
//                 id="adopt-option"
//                 className="text-primary w-5 h-5"
//                 disabled
//               />
//               <div>
//                 <span className="font-medium block">Adopt a Child</span>
//                 <span className="text-xs text-muted-foreground">
//                   Apply to adopt a child
//                 </span>
//               </div>
//             </Label>
//           </RadioGroup>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Personal Information */}
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <User className="h-5 w-5" />
//               Personal Information
//             </h4>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Full Name*</Label>
//                 <Input
//                   id="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="age">Age*</Label>
//                 <Input
//                   id="age"
//                   type="number"
//                   required
//                   value={formData.age || ''}
//                   onChange={handleChange}
//                   placeholder="Enter your age"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//               <div className="space-y-2">
//                 <Label htmlFor="gender">Gender*</Label>
//                 <Select
//                   required
//                   onValueChange={(value) => handleSelectChange('gender', value)}
//                   value={formData.gender}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select gender" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="phone">Contact Number*</Label>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                   <Input
//                     id="phone"
//                     type="tel"
//                     className="pl-11"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="+92 XXX XXXXXXX"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="address">Residential Address*</Label>
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                 <Textarea
//                   id="address"
//                   className="pl-11 min-h-24"
//                   required
//                   value={formData.address}
//                   onChange={handleChange}
//                   placeholder="Enter your complete address"
//                 />
//               </div>
//             </div>
//           </Card>

//           {/* Adoption Preferences */}
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <Heart className="h-5 w-5" />
//               Adoption Preferences
//             </h4>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="childAgePreference">Preferred Age Range*</Label>
//                 <Select
//                   required
//                   onValueChange={(value) => handleSelectChange('childAgePreference', value)}
//                   value={formData.childAgePreference}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select age range" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="infant">Infant (0-1 year)</SelectItem>
//                     <SelectItem value="toddler">Toddler (1-3 years)</SelectItem>
//                     <SelectItem value="preschool">Preschool (3-5 years)</SelectItem>
//                     <SelectItem value="schoolage">School Age (6-12 years)</SelectItem>
//                     <SelectItem value="teen">Teenager (13-18 years)</SelectItem>
//                     <SelectItem value="any">Any age</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="childGenderPreference">Preferred Gender</Label>
//                 <Select
//                   onValueChange={(value) => handleSelectChange('childGenderPreference', value)}
//                   value={formData.childGenderPreference}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select gender preference" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                     <SelectItem value="any">No preference</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="familyMembers">Family Members*</Label>
//               <Textarea
//                 id="familyMembers"
//                 className="min-h-24"
//                 required
//                 value={formData.familyMembers}
//                 onChange={handleChange}
//                 placeholder="List all household members with ages and relationships"
//               />
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="reasonAdoption">Reason for Adoption*</Label>
//               <Textarea
//                 id="reasonAdoption"
//                 className="min-h-28"
//                 required
//                 value={formData.reasonAdoption}
//                 onChange={handleChange}
//                 placeholder="Share why you want to adopt a child"
//               />
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="documents">Supporting Documents</Label>
//               <div className="border border-dashed border-border rounded-lg p-4 bg-secondary/40 hover:bg-secondary/60 transition-colors cursor-pointer">
//                 <div className="flex flex-col items-center justify-center gap-2">
//                   <Upload className="h-8 w-8 text-muted-foreground" />
//                   <p className="text-sm font-medium">Click to upload documents</p>
//                   <p className="text-xs text-muted-foreground">
//                     (ID, income proof, residence proof - max 5MB each)
//                   </p>
//                   <Input
//                     id="documents"
//                     type="file"
//                     multiple
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                   <Button
//                     type="button"
//                     variant="outline"
//                     size="sm"
//                     className="mt-2"
//                     onClick={() => document.getElementById('documents')?.click()}
//                   >
//                     {formData.documents.length > 0 
//                       ? `${formData.documents.length} files selected` 
//                       : 'Select Files'}
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </Card>

//           {/* Additional Info */}
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <FileText className="h-5 w-5" />
//               Additional Information
//             </h4>

//             <div className="space-y-2">
//               <Label htmlFor="additionalInfo">Other Information</Label>
//               <Textarea
//                 id="additionalInfo"
//                 className="min-h-24"
//                 value={formData.additionalInfo}
//                 onChange={handleChange}
//                 placeholder="Any other details you'd like to share"
//               />
//             </div>
//           </Card>

//           <div className="pt-6 border-t border-border">
//             <Button
//               type="submit"
//               className="w-full h-12 text-lg"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit Application'}
//             </Button>
//             <p className="text-xs text-center text-muted-foreground mt-4">
//               By submitting, you confirm all information is accurate.
//             </p>
//           </div>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default AdoptionForm;


// import { useState, useEffect } from 'react';
// import { X, User, Phone, Heart, FileText, MapPin, Upload } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card } from '@/components/ui/card';
// import { Textarea } from '@/components/ui/textarea';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { useToast } from '@/hooks/use-toast';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { db, storage } from '@/firebase';

// interface AdoptionFormProps {
//   onClose: () => void;
// }

// const AdoptionForm = ({ onClose }: AdoptionFormProps) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     age: 0,
//     gender: '',
//     phone: '',
//     address: '',
//     childAgePreference: '',
//     childGenderPreference: '',
//     familyMembers: '',
//     reasonAdoption: '',
//     additionalInfo: '',
//     documents: [] as File[],
//   });

//   // Initialize storage bucket on component mount
//   useEffect(() => {
//     async function initializeBucket() {
//       try {
//         const testRef = ref(storage, "test-init.txt");
//         await uploadBytes(testRef, new Blob(["Bucket initializer"]));
//         console.log("✅ Storage bucket ready!");
//       } catch (error) {
//         console.error("❌ Bucket init failed:", error);
//       }
//     }
//     initializeBucket();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [id]: id === 'age' ? parseInt(value) || 0 : value,
//     }));
//   };

//   const handleSelectChange = (id: string, value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       [id]: value,
//     }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFormData(prev => ({
//         ...prev,
//         documents: Array.from(e.target.files as FileList),
//       }));
//     }
//   };

//   const uploadFiles = async (files: File[]) => {
//     const uploadPromises = files.map(async (file) => {
//       const storageRef = ref(storage, `adoption-documents/${Date.now()}-${file.name}`);
//       await uploadBytes(storageRef, file);
//       return getDownloadURL(storageRef);
//     });
//     return Promise.all(uploadPromises);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Upload documents if any
//       let documentUrls: string[] = [];
//       if (formData.documents.length > 0) {
//         documentUrls = await uploadFiles(formData.documents);
//       }

//       // Save to Firestore
//       await addDoc(collection(db, 'adoptionApplications'), {
//         ...formData,
//         documents: documentUrls,
//         status: 'pending',
//         createdAt: serverTimestamp(),
//       });

//       toast({
//         title: 'Application Submitted',
//         description: 'Your adoption application has been received successfully!',
//       });
//       onClose();
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast({
//         title: 'Error',
//         description: 'There was an error submitting your application. Please try again.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm animate-fade-in">
//       <Card className="w-[95%] max-w-[900px] p-8 relative bg-white shadow-xl rounded-xl max-h-[90vh] overflow-y-auto">
//         <Button
//           variant="ghost"
//           size="icon"
//           className="absolute right-3 top-3 hover:bg-gray-100 rounded-full"
//           onClick={onClose}
//         >
//           <X className="h-5 w-5" />
//         </Button>

//         <div className="mb-8 text-center">
//           <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
//             <Heart className="h-6 w-6 text-primary" />
//           </div>
//           <h3 className="text-2xl font-bold text-foreground">Adoption Application</h3>
//           <p className="text-muted-foreground mt-3">
//             Please complete this form with accurate information
//           </p>
//           <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
//         </div>

//         <div className="mb-8">
//           <Label className="text-base font-medium mb-3 block">I want to:</Label>
//           <RadioGroup defaultValue="adopt" className="grid grid-cols-1">
//             <Label
//               htmlFor="adopt-option"
//               className="flex items-center gap-3 p-4 border rounded-lg bg-primary/10 border-primary shadow-md cursor-not-allowed"
//             >
//               <RadioGroupItem
//                 value="adopt"
//                 id="adopt-option"
//                 className="text-primary w-5 h-5"
//                 disabled
//               />
//               <div>
//                 <span className="font-medium block">Adopt a Child</span>
//                 <span className="text-xs text-muted-foreground">
//                   Apply to adopt a child
//                 </span>
//               </div>
//             </Label>
//           </RadioGroup>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Personal Information */}
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <User className="h-5 w-5" />
//               Personal Information
//             </h4>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Full Name*</Label>
//                 <Input
//                   id="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="age">Age*</Label>
//                 <Input
//                   id="age"
//                   type="number"
//                   required
//                   value={formData.age || ''}
//                   onChange={handleChange}
//                   placeholder="Enter your age"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//               <div className="space-y-2">
//                 <Label htmlFor="gender">Gender*</Label>
//                 <Select
//                   required
//                   onValueChange={(value) => handleSelectChange('gender', value)}
//                   value={formData.gender}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select gender" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="phone">Contact Number*</Label>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                   <Input
//                     id="phone"
//                     type="tel"
//                     className="pl-11"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="+92 XXX XXXXXXX"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="address">Residential Address*</Label>
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                 <Textarea
//                   id="address"
//                   className="pl-11 min-h-24"
//                   required
//                   value={formData.address}
//                   onChange={handleChange}
//                   placeholder="Enter your complete address"
//                 />
//               </div>
//             </div>
//           </Card>

//           {/* Adoption Preferences */}
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <Heart className="h-5 w-5" />
//               Adoption Preferences
//             </h4>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="childAgePreference">Preferred Age Range*</Label>
//                 <Select
//                   required
//                   onValueChange={(value) => handleSelectChange('childAgePreference', value)}
//                   value={formData.childAgePreference}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select age range" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="infant">Infant (0-1 year)</SelectItem>
//                     <SelectItem value="toddler">Toddler (1-3 years)</SelectItem>
//                     <SelectItem value="preschool">Preschool (3-5 years)</SelectItem>
//                     <SelectItem value="schoolage">School Age (6-12 years)</SelectItem>
//                     <SelectItem value="teen">Teenager (13-18 years)</SelectItem>
//                     <SelectItem value="any">Any age</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="childGenderPreference">Preferred Gender</Label>
//                 <Select
//                   onValueChange={(value) => handleSelectChange('childGenderPreference', value)}
//                   value={formData.childGenderPreference}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select gender preference" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                     <SelectItem value="any">No preference</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="familyMembers">Family Members*</Label>
//               <Textarea
//                 id="familyMembers"
//                 className="min-h-24"
//                 required
//                 value={formData.familyMembers}
//                 onChange={handleChange}
//                 placeholder="List all household members with ages and relationships"
//               />
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="reasonAdoption">Reason for Adoption*</Label>
//               <Textarea
//                 id="reasonAdoption"
//                 className="min-h-28"
//                 required
//                 value={formData.reasonAdoption}
//                 onChange={handleChange}
//                 placeholder="Share why you want to adopt a child"
//               />
//             </div>

//             <div className="space-y-2 mt-6">
//               <Label htmlFor="documents">Supporting Documents</Label>
//               <div className="border border-dashed border-border rounded-lg p-4 bg-secondary/40 hover:bg-secondary/60 transition-colors cursor-pointer">
//                 <div className="flex flex-col items-center justify-center gap-2">
//                   <Upload className="h-8 w-8 text-muted-foreground" />
//                   <p className="text-sm font-medium">Click to upload documents</p>
//                   <p className="text-xs text-muted-foreground">
//                     (ID, income proof, residence proof - max 5MB each)
//                   </p>
//                   <Input
//                     id="documents"
//                     type="file"
//                     multiple
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                   <Button
//                     type="button"
//                     variant="outline"
//                     size="sm"
//                     className="mt-2"
//                     onClick={() => document.getElementById('documents')?.click()}
//                   >
//                     {formData.documents.length > 0 
//                       ? `${formData.documents.length} files selected` 
//                       : 'Select Files'}
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </Card>

//           {/* Additional Info */}
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <FileText className="h-5 w-5" />
//               Additional Information
//             </h4>

//             <div className="space-y-2">
//               <Label htmlFor="additionalInfo">Other Information</Label>
//               <Textarea
//                 id="additionalInfo"
//                 className="min-h-24"
//                 value={formData.additionalInfo}
//                 onChange={handleChange}
//                 placeholder="Any other details you'd like to share"
//               />
//             </div>
//           </Card>

//           <div className="pt-6 border-t border-border">
//             <Button
//               type="submit"
//               className="w-full h-12 text-lg"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit Application'}
//             </Button>
//             <p className="text-xs text-center text-muted-foreground mt-4">
//               By submitting, you confirm all information is accurate.
//             </p>
//           </div>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default AdoptionForm;

import { useState } from 'react';
import { X, User, Phone, Heart, FileText, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

interface AdoptionFormProps {
  onClose: () => void;
}

const AdoptionForm = ({ onClose }: AdoptionFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    gender: '',
    phone: '',
    address: '',
    childAgePreference: '',
    childGenderPreference: '',
    familyMembers: '',
    reasonAdoption: '',
    additionalInfo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: id === 'age' ? parseInt(value) || 0 : value,
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Firestore
      await addDoc(collection(db, 'adoptionApplications'), {
        ...formData,
        status: 'pending',
        createdAt: serverTimestamp(),
      });

      toast({
        title: 'Application Submitted',
        description: 'Your adoption application has been received successfully!',
      });
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: 'There was an error submitting your application. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm animate-fade-in">
      <Card className="w-[95%] max-w-[900px] p-8 relative bg-white shadow-xl rounded-xl max-h-[90vh] overflow-y-auto">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 hover:bg-gray-100 rounded-full"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="mb-8 text-center">
          <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Adoption Application</h3>
          <p className="text-muted-foreground mt-3">
            Please complete this form with accurate information
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="mb-8">
          <Label className="text-base font-medium mb-3 block">I want to:</Label>
          <RadioGroup defaultValue="adopt" className="grid grid-cols-1">
            <Label
              htmlFor="adopt-option"
              className="flex items-center gap-3 p-4 border rounded-lg bg-primary/10 border-primary shadow-md cursor-not-allowed"
            >
              <RadioGroupItem
                value="adopt"
                id="adopt-option"
                className="text-primary w-5 h-5"
                disabled
              />
              <div>
                <span className="font-medium block">Adopt a Child</span>
                <span className="text-xs text-muted-foreground">
                  Apply to adopt a child
                </span>
              </div>
            </Label>
          </RadioGroup>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
            <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
              <User className="h-5 w-5" />
              Personal Information
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name*</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age*</Label>
                <Input
                  id="age"
                  type="number"
                  required
                  value={formData.age || ''}
                  onChange={handleChange}
                  placeholder="Enter your age"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="gender">Gender*</Label>
                <Select
                  required
                  onValueChange={(value) => handleSelectChange('gender', value)}
                  value={formData.gender}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Contact Number*</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    className="pl-11"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <Label htmlFor="address">Residential Address*</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Textarea
                  id="address"
                  className="pl-11 min-h-24"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your complete address"
                />
              </div>
            </div>
          </Card>

          {/* Adoption Preferences */}
          <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
            <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
              <Heart className="h-5 w-5" />
              Adoption Preferences
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="childAgePreference">Preferred Age Range*</Label>
                <Select
                  required
                  onValueChange={(value) => handleSelectChange('childAgePreference', value)}
                  value={formData.childAgePreference}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select age range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="infant">Infant (0-1 year)</SelectItem>
                    <SelectItem value="toddler">Toddler (1-3 years)</SelectItem>
                    <SelectItem value="preschool">Preschool (3-5 years)</SelectItem>
                    <SelectItem value="schoolage">School Age (6-12 years)</SelectItem>
                    <SelectItem value="teen">Teenager (13-18 years)</SelectItem>
                    <SelectItem value="any">Any age</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="childGenderPreference">Preferred Gender</Label>
                <Select
                  onValueChange={(value) => handleSelectChange('childGenderPreference', value)}
                  value={formData.childGenderPreference}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="any">No preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <Label htmlFor="familyMembers">Family Members*</Label>
              <Textarea
                id="familyMembers"
                className="min-h-24"
                required
                value={formData.familyMembers}
                onChange={handleChange}
                placeholder="List all household members with ages and relationships"
              />
            </div>

            <div className="space-y-2 mt-6">
              <Label htmlFor="reasonAdoption">Reason for Adoption*</Label>
              <Textarea
                id="reasonAdoption"
                className="min-h-28"
                required
                value={formData.reasonAdoption}
                onChange={handleChange}
                placeholder="Share why you want to adopt a child"
              />
            </div>
          </Card>

          {/* Additional Info */}
          <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
            <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
              <FileText className="h-5 w-5" />
              Additional Information
            </h4>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Other Information</Label>
              <Textarea
                id="additionalInfo"
                className="min-h-24"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Any other details you'd like to share"
              />
            </div>
          </Card>

          <div className="pt-6 border-t border-border">
            <Button
              type="submit"
              className="w-full h-12 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              By submitting, you confirm all information is accurate.
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AdoptionForm;