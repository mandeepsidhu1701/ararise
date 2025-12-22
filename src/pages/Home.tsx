import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Heart, Users, Target, Shield, CheckCircle, MapPin, Star, ChevronRight, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-nz-landscape.jpg";
import studentsImage from "@/assets/students-together.jpg";
import australiaImage from "@/assets/australia-sydney.jpg";

const values = [
  {
    icon: Heart,
    title: "Manaakitanga",
    subtitle: "Care & Hospitality",
    description: "We treat every student and family with genuine warmth, respect, and care."
  },
  {
    icon: Shield,
    title: "Honesty",
    subtitle: "Trust & Transparency",
    description: "Clear, ethical guidance with no hidden agendas just honest advice."
  },
  {
    icon: Target,
    title: "Pathway Planning",
    subtitle: "Your Journey Matters",
    description: "Personalized education pathways tailored to your unique goals and dreams."
  },
  {
    icon: GraduationCap,
    title: "Student Success",
    subtitle: "Excellence Focused",
    description: "We're committed to helping you thrive academically and personally."
  },
  {
    icon: Users,
    title: "Whanaungatanga",
    subtitle: "Family Connection",
    description: "Supporting the whole family through every step of the journey."
  },
];

const services = [
  {
    title: "Education Pathway Planning",
    description: "Strategic guidance to find the perfect course and institution for your goals.",
    icon: Target,
  },
  {
    title: "Course & Institute Selection",
    description: "Expert recommendations from hundreds of quality institutions.",
    icon: GraduationCap,
  },
  {
    title: "Document Preparation",
    description: "Complete support for applications, documents, and requirements.",
    icon: CheckCircle,
  },
  {
    title: "Family Transition Support",
    description: "Helping your entire family prepare for life in a new country.",
    icon: Users,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "India → Auckland",
    text: "AraRise made my dream of studying in New Zealand a reality. Their guidance was like having a caring mentor by my side.",
    rating: 5,
  },
  {
    name: "Wei Chen",
    location: "China → Melbourne",
    text: "The team's attention to detail and genuine care for my success made all the difference. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    location: "India → Wellington",
    text: "From course selection to settling in NZ, AraRise supported my whole family. They're truly partners in success.",
    rating: 5,
  },
];

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Share your dreams and goals. We'll understand your aspirations, budget, and preferences.",
  },
  {
    number: "02",
    title: "Personalized Plan",
    description: "Receive a tailored education pathway with recommended courses, institutions, and timelines.",
  },
  {
    number: "03",
    title: "Complete Support",
    description: "From applications to arrival, we guide you through every step until you're settled and thriving.",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delay" />

        {/* Content */}
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Your Trusted Education Partner in NZ & Australia
              </span>
            </div>
            
            <h1 className="animate-fade-up-delay-1 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Your Pathway to a Better Education, Better Future & 
              <span className="relative">
                <span className="relative z-10"> Better Life</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-secondary/40 -z-0 rounded" />
              </span>
            </h1>
            
            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Personalised guidance for international students and families who dream big. 
              We walk with you from your first question to your graduation day and beyond.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">
                  Explore Study Options
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                
                { value: "50+", label: "Partner Institutions" },
               
                { value: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path 
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="hsl(45, 30%, 98%)"
            />
          </svg>
        </div>
      </section>

      {/* Why AraRise Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Why AraRise Global Pathways?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're more than consultants we're your mentors, advocates, and partners in building a brighter future. 
              Our approach is rooted in New Zealand values of care, honesty, and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="group bg-gradient-card rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-border/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{value.title}</h3>
                <p className="text-secondary font-medium text-sm mb-3">{value.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Study Destinations</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Your Gateway to World-Class Education
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover life changing opportunities in two of the world's most welcoming countries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* New Zealand Card */}
            <div className="group relative overflow-hidden rounded-3xl shadow-card hover:shadow-elevated transition-all duration-500">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              <div className="relative p-8 md:p-12 min-h-[400px] flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="text-primary-foreground/80 font-medium">New Zealand</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Aotearoa New Zealand
                </h3>
                <p className="text-primary-foreground/90 mb-6 max-w-md">
                  Experience world class education in a safe, friendly, and stunningly beautiful country. 
                  Known for innovation, quality of life, and genuine hospitality.
                </p>
                <Button variant="hero" className="w-fit" asChild>
                  <Link to="/destinations">
                    Explore New Zealand
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Australia Card */}
            <div className="group relative overflow-hidden rounded-3xl shadow-card hover:shadow-elevated transition-all duration-500">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${australiaImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              <div className="relative p-8 md:p-12 min-h-[400px] flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="text-primary-foreground/80 font-medium">Australia</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Discover Australia
                </h3>
                <p className="text-primary-foreground/90 mb-6 max-w-md">
                  Home to some of the world's top universities, vibrant cities, and diverse opportunities. 
                  Build your career in a multicultural, forward-thinking nation.
                </p>
                <Button variant="hero" className="w-fit" asChild>
                  <Link to="/destinations">
                    Explore Australia
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                Complete Support for Your Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From your first enquiry to settling into your new life, we provide comprehensive 
                guidance at every step. Our services are designed to make your education journey 
                smooth, stress free, and successful.
              </p>
              
              <div className="space-y-4 mb-8">
                {services.map((service) => (
                  <div 
                    key={service.title}
                    className="flex gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild>
                <Link to="/services">
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img 
                src={studentsImage} 
                alt="Happy international students studying together"
                className="relative rounded-3xl shadow-elevated w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden fern-pattern">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6">
              Your Journey Starts Here
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Three simple steps to begin your international education adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
              >
                <div className="text-6xl font-display font-bold text-secondary/40 mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Hear From Our Students
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from real students whose lives were transformed through education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-gradient-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-shadow border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Take the first step toward your international education dreams. 
              Our team is here to guide you with warmth, expertise, and genuine care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}