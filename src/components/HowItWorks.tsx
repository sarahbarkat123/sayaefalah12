import { UserCheck, SearchCheck, Heart, MessageCircleHeart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserCheck className="h-5 w-5 text-primary-foreground" />,
      title: "Register / Login",
      description: "Create an account with us or login if you already have one. We keep your information secure and confidential."
    },
    {
      icon: <SearchCheck className="h-5 w-5 text-primary-foreground" />,
      title: "Report or Search",
      description: "Submit details about a missing person or browse through existing reports to find your loved ones."
    },
    {
      icon: <Heart className="h-5 w-5 text-primary-foreground" />,
      title: "Get Help",
      description: "Our team works with authorities and volunteers to provide assistance and support throughout the process."
    },
    {
      icon: <MessageCircleHeart className="h-5 w-5 text-primary-foreground" />,
      title: "Stay Connected",
      description: "Stay connected with our community for continuous support and guidance."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title mx-auto">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            Our simple process helps you get the assistance you need quickly and efficiently.
          </p>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-14 pb-12 last:pb-0">
              {index < steps.length - 1 && <div className="timeline-line"></div>}
              <div className="timeline-dot">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Step {index + 1}: {step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;