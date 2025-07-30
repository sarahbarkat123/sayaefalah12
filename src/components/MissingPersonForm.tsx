// import { useState } from 'react';
// import { X, Calendar, MapPin, User, Phone, FileText, Camera, Clock, Upload } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card } from '@/components/ui/card';
// import { Textarea } from '@/components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { useToast } from '@/hooks/use-toast';

// interface MissingPersonFormProps {
//   onClose: () => void;
// }

// const MissingPersonForm = ({ onClose }: MissingPersonFormProps) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission process
//     setTimeout(() => {
//       setIsSubmitting(false);
//       toast({
//         title: "Report Submitted",
//         description: "Your missing person report has been successfully submitted. Our team will contact you shortly.",
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
//             <User className="h-6 w-6 text-primary" />
//           </div>
//           <h3 className="text-2xl font-bold text-foreground">Report a Missing Person</h3>
//           <p className="text-muted-foreground mt-3">
//             Please provide as much detailed information as possible to help us find your loved one
//           </p>
//           <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <User className="h-5 w-5" />
//               Missing Person Details
//             </h4>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="name" className="text-sm font-medium">Full Name*</Label>
//                 <Input 
//                   id="name" 
//                   required 
//                   placeholder="Enter missing person's name"
//                   className="h-11 text-base" 
//                 />
//               </div>
              
//               <div className="space-y-2">
//                 <Label htmlFor="age" className="text-sm font-medium">Age*</Label>
//                 <Input 
//                   id="age" 
//                   required 
//                   type="number" 
//                   placeholder="Enter age"
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
//                     placeholder="+92 XXX XXXXXXX" 
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//           </Card>
          
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <Clock className="h-5 w-5" />
//               Incident Details
//             </h4>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="lastSeenDate" className="text-sm font-medium">Last Seen Date*</Label>
//                 <div className="relative">
//                   <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                   <Input 
//                     id="lastSeenDate" 
//                     type="date" 
//                     className="pl-11 h-11 text-base" 
//                     required 
//                   />
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <Label htmlFor="lastSeenTime" className="text-sm font-medium">Approximate Time</Label>
//                 <Input 
//                   id="lastSeenTime" 
//                   type="time" 
//                   className="h-11 text-base" 
//                 />
//               </div>
//             </div>
            
//             <div className="space-y-2 mt-6">
//               <Label htmlFor="lastSeenLocation" className="text-sm font-medium">Last Seen Location*</Label>
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                 <Input 
//                   id="lastSeenLocation" 
//                   className="pl-11 h-11 text-base" 
//                   placeholder="Enter street address, area, city" 
//                   required
//                 />
//               </div>
//             </div>
            
//             <div className="space-y-2 mt-6">
//               <Label htmlFor="appearance" className="text-sm font-medium">Physical Description*</Label>
//               <div className="relative">
//                 <FileText className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
//                 <Textarea 
//                   id="appearance" 
//                   className="pl-11 min-h-28 text-base" 
//                   placeholder="Height, build, hair color, eye color, clothing worn when last seen, distinctive features, etc."
//                   required
//                 />
//               </div>
//             </div>
//           </Card>
          
//           <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
//             <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
//               <Camera className="h-5 w-5" />
//               Supporting Information
//             </h4>
            
//             <div className="space-y-2">
//               <Label htmlFor="photo" className="text-sm font-medium">Upload Photo (if available)</Label>
//               <div className="border border-dashed border-border rounded-lg p-4 bg-secondary/40 hover:bg-secondary/60 transition-colors cursor-pointer">
//                 <div className="flex flex-col items-center justify-center gap-2">
//                   <Upload className="h-8 w-8 text-muted-foreground" />
//                   <p className="text-sm font-medium">Drag & drop or click to upload</p>
//                   <p className="text-xs text-muted-foreground">Recent, clear photo of the missing person (max size: 5MB)</p>
//                   <Input 
//                     id="photo" 
//                     type="file" 
//                     accept="image/*"
//                     className="hidden" 
//                   />
//                   <Button
//                     type="button"
//                     variant="outline"
//                     size="sm"
//                     className="mt-2"
//                     onClick={() => document.getElementById('photo')?.click()}
//                   >
//                     Select File
//                   </Button>
//                 </div>
//               </div>
//             </div>
            
//             <div className="space-y-2 mt-6">
//               <Label htmlFor="additionalInfo" className="text-sm font-medium">Additional Information</Label>
//               <Textarea 
//                 id="additionalInfo" 
//                 className="min-h-28 text-base" 
//                 placeholder="Any other details that might help in the search (medical conditions, circumstances of disappearance, etc.)"
//               />
//             </div>
//           </Card>
          
//           <div className="pt-6 border-t border-border">
//             <Button 
//               type="submit" 
//               className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 h-12 text-lg font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Submitting Report...' : 'Submit Missing Person Report'}
//             </Button>
            
//             <p className="text-xs text-center text-muted-foreground mt-4">
//               By submitting this form, you confirm that all information provided is accurate to the best of your knowledge.
//               Our team will review your report and contact you as soon as possible.
//             </p>
//           </div>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default MissingPersonForm;



import { useState } from 'react';
import { X, Calendar, MapPin, User, Phone, FileText, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

import { db } from '../firebase'; 
import { collection, addDoc } from 'firebase/firestore'; 


interface MissingPersonFormProps {
  onClose: () => void;
}

const MissingPersonForm = ({ onClose }: MissingPersonFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    lastSeenDate: '',
    lastSeenTime: '',
    lastSeenLocation: '',
    appearance: '',
    additionalInfo: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'missingPersons'), {
        ...formData,
        timestamp: new Date()
      });

      toast({
        title: "Report Submitted",
        description: "Your missing person report has been successfully submitted.",
      });

      onClose();
    } catch (error) {
      console.error("Error submitting report:", error);
      toast({
        title: "Error",
        description: "Something went wrong while submitting the report.",
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
            <User className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Report a Missing Person</h3>
          <p className="text-muted-foreground mt-3">
            Please provide as much detailed information as possible to help us find your loved one
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
            <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
              <User className="h-5 w-5" />
              Missing Person Details
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name*</Label>
                <Input
                  id="name"
                  required
                  placeholder="Enter missing person's name"
                  className="h-11 text-base"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age*</Label>
                <Input
                  id="age"
                  required
                  type="number"
                  placeholder="Enter age"
                  className="h-11 text-base"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="gender">Gender*</Label>
                <Select
                  required
                  onValueChange={(value) => setFormData({ ...formData, gender: value })}
                >
                  <SelectTrigger className="h-11 text-base">
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
                    required
                    className="pl-11 h-11 text-base"
                    placeholder="+92 XXX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-border/60 shadow-sm bg-white/50">
            <h4 className="text-lg font-semibold flex items-center gap-2 text-primary mb-4">
              <Clock className="h-5 w-5" />
              Incident Details
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="lastSeenDate">Last Seen Date*</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="lastSeenDate"
                    type="date"
                    required
                    className="pl-11 h-11 text-base"
                    value={formData.lastSeenDate}
                    onChange={(e) => setFormData({ ...formData, lastSeenDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastSeenTime">Approximate Time</Label>
                <Input
                  id="lastSeenTime"
                  type="time"
                  className="h-11 text-base"
                  value={formData.lastSeenTime}
                  onChange={(e) => setFormData({ ...formData, lastSeenTime: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <Label htmlFor="lastSeenLocation">Last Seen Location*</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  id="lastSeenLocation"
                  required
                  placeholder="Enter street address, area, city"
                  className="pl-11 h-11 text-base"
                  value={formData.lastSeenLocation}
                  onChange={(e) => setFormData({ ...formData, lastSeenLocation: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <Label htmlFor="appearance">Physical Description*</Label>
              <div className="relative">
                <FileText className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                <Textarea
                  id="appearance"
                  required
                  className="pl-11 min-h-28 text-base"
                  placeholder="Height, build, hair color, eye color, clothing worn when last seen, distinctive features, etc."
                  value={formData.appearance}
                  onChange={(e) => setFormData({ ...formData, appearance: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                className="min-h-28 text-base"
                placeholder="Any other details (medical conditions, circumstances, etc.)"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              />
            </div>
          </Card>

          <div className="pt-6 border-t border-border">
            <Button
              type="submit"
              className="w-full h-12 text-lg font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting Report...' : 'Submit Missing Person Report'}
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              By submitting this form, you confirm that all information provided is accurate to the best of your knowledge.
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default MissingPersonForm;
