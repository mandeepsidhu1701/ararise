import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Heart, Shield, Target, Users, GraduationCap, Globe, ArrowRight, Quote } from "lucide-react";
import studentsImage from "@/assets/students-together.jpg";

const timeline = [
  {
    year: "The Vision",
    title: "A Dream to Help Others",
    description: "AraRise was founded with a simple belief: every student deserves access to quality education and the chance to build a better life. We saw families struggling to navigate complex processes alone.",
  },
  {
    year: "The Mission",
    title: "Building Pathways",
    description: "We committed to becoming more than agents we became partners. Our approach focuses on understanding each student's unique story, goals, and circumstances.",
  },
  {
    year: "Today",
    title: "Growing Together",
    description: "With hundreds of successful placements across New Zealand and Australia, we continue to uphold our values of honesty, care, and excellence in everything we do.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Manaakitanga",
    description: "We welcome you with open hearts. Your wellbeing is our priority, and we treat every family as our own.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest, transparent advice—always. We'll never push you toward something that isn't right for you.",
  },
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every recommendation we make is aligned with your long-term goals and aspirations.",
  },
  {
    icon: Users,
    title: "Whanaungatanga",
    description: "We build relationships that last. Your success is our success, and we're with you every step.",
  },
  {
    icon: GraduationCap,
    title: "Excellence",
    description: "We partner with only the best institutions and maintain the highest standards of service.",
  },
  {
    icon: Globe,
    title: "Cultural Respect",
    description: "We celebrate diversity and understand the cultural nuances that make your journey unique.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-nature overflow-hidden">
        <div className="absolute inset-0 bg-fern-pattern opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About AraRise
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Future Matters. Your Family Matters.{" "}
              <span className="text-gradient-primary">We Walk With You.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              More than consultants, we're your advocates, mentors, and partners in building 
              a brighter future through education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Founded on Purpose, Driven by Heart
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AraRise Limited was born from a deep understanding of the challenges international 
                  students and their families face when seeking education abroad. We've seen the 
                  confusion, the uncertainty, and the overwhelming complexity that can stand between 
                  a student and their dreams.
                </p>
                <p>
                  Our founders believed there had to be a better way—a more personal, caring, and 
                  ethical approach to international education guidance. An approach that treats 
                  every student not as a number, but as a person with unique dreams, circumstances, 
                  and potential.
                </p>
                <p>
                  Today, AraRise embodies the spirit of New Zealand's core values: <strong>manaakitanga</strong> 
                  (genuine care and hospitality), <strong>whanaungatanga</strong> (the importance of 
                  relationships and community), and <strong>kaitiakitanga</strong> (guardianship and 
                  responsibility for those in our care).
                </p>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-2xl border-l-4 border-secondary">
                <Quote className="w-8 h-8 text-secondary mb-3" />
                <p className="text-foreground font-medium italic">
                  "We don't just help students get into universities. We help them discover their 
                  pathway to a fulfilling life—academically, professionally, and personally."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <img 
                src={studentsImage} 
                alt="International students collaborating"
                className="relative rounded-3xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              From Vision to Impact
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />
              
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                    <div className="inline-block px-4 py-1 bg-secondary/20 text-secondary font-semibold text-sm rounded-full mb-3">
                      {item.year}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-md transform -translate-x-1/2 md:-translate-x-1/2" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              The Principles That Guide Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Rooted in New Zealand's culture of care, respect, and community—these values 
              shape every interaction and decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="group p-8 bg-gradient-card rounded-3xl border border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-fern-pattern opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8">
              Our Promise to You
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              We promise to treat your dreams with the respect they deserve. To give you honest 
              advice, even when it's not what you want to hear. To support you through challenges 
              and celebrate your victories. To be your partner—not just until you enroll, but 
              until you've built the life you dreamed of.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}