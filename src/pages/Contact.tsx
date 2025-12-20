import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Heart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Auckland, New Zealand"],
    action: null,
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+64 (0) 000 0000"],
    action: "tel:+64000000000",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@ararise.co.nz"],
    action: "mailto:hello@ararise.co.nz",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
    action: null,
  },
];

const studyInterests = [
  "New Zealand",
  "Australia",
  "Both / Not Sure",
];

const studyLevels = [
  "English Language Course",
  "Certificate / Diploma",
  "Bachelor's Degree",
  "Postgraduate / Master's",
  "PhD / Doctoral",
  "Other / Not Sure",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    studyDestination: "",
    studyLevel: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Thank you for reaching out!",
      description: "We've received your message and will get back to you within 24 hours.",
    });
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      studyDestination: "",
      studyLevel: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-nature overflow-hidden">
        <div className="absolute inset-0 bg-fern-pattern opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              <Heart className="w-4 h-4" />
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Talk To Us Like Family  {" "}
              <span className="text-gradient-primary">We're Here To Support You</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you have questions, need guidance, or are ready to start your journey, 
              we're here to help. Reach out and let's discuss your dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        info.action ? (
                          <a 
                            key={i} 
                            href={info.action} 
                            className="block text-muted-foreground hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-muted-foreground">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-hero rounded-2xl p-6 text-primary-foreground">
                <MessageCircle className="w-10 h-10 mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="text-primary-foreground/80 mb-4 text-sm">
                  Chat with us directly on WhatsApp for quick responses and easy communication.
                </p>
                <Button 
                  variant="hero" 
                  className="w-full"
                  asChild
                >
                  <a href="https://wa.me/64000000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-card">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">
                      Auckland, New Zealand
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                <div className="mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Book Your Free Consultation
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and one of our education consultants will get 
                    back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your first name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country of Residence *</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g., India, China, Philippines"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="studyDestination">Preferred Study Destination *</Label>
                      <select
                        id="studyDestination"
                        name="studyDestination"
                        value={formData.studyDestination}
                        onChange={handleChange}
                        required
                        className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select destination</option>
                        {studyInterests.map((interest) => (
                          <option key={interest} value={interest}>{interest}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="studyLevel">Study Level *</Label>
                      <select
                        id="studyLevel"
                        name="studyLevel"
                        value={formData.studyLevel}
                        onChange={handleChange}
                        required
                        className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select study level</option>
                        {studyLevels.map((level) => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Your Goals</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your education goals, preferred field of study, timeline, or any questions you have..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Book My Free Consultation
                      </>
                    )}
                  </Button>

                  <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you consent to being contacted by AraRise 
                      about your education enquiry. We respect your privacy and will never 
                      share your information.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Message */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              We're Here to Support Your Dreams
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every journey begins with a conversation. Whether you're just exploring 
              options or ready to take the next step, we're here to listen, guide, and 
              support you. No question is too small, no dream too big.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
