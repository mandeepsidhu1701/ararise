import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  MapPin, 
  GraduationCap, 
  Heart, 
  Sun, 
  Mountain, 
  Building2,
  Users,
  Globe,
  Shield,
  Leaf,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-nz-landscape.jpg";
import australiaImage from "@/assets/australia-sydney.jpg";

const nzHighlights = [
  { icon: Shield, text: "One of the world's safest countries" },
  { icon: Leaf, text: "Stunning natural environment" },
  { icon: Heart, text: "Welcoming, friendly culture" },
  { icon: GraduationCap, text: "World-class education system" },
  { icon: Users, text: "Strong student support services" },
  { icon: Globe, text: "Pathways after study completion" },
];

const ausHighlights = [
  { icon: Building2, text: "Home to world-ranked universities" },
  { icon: Sun, text: "Excellent climate and lifestyle" },
  { icon: Users, text: "Vibrant multicultural society" },
  { icon: GraduationCap, text: "Wide range of study options" },
  { icon: Globe, text: "Strong employment opportunities" },
  { icon: Heart, text: "High quality of life" },
];

const nzFacts = [
  { value: "8", label: "Universities ranked globally" },
  { value: "16", label: "Polytechnics & Institutes" },
  { value: "100+", label: "Private Training Establishments" },
  { value: "#1", label: "For preparing students for future" },
];

const ausFacts = [
  { value: "43", label: "Universities" },
  { value: "7", label: "In world's top 100" },
  { value: "22,000+", label: "Courses available" },
  { value: "#3", label: "Most popular destination" },
];

export default function Destinations() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-nature overflow-hidden">
        <div className="absolute inset-0 bg-fern-pattern opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4" />
              Study Destinations
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Two World-Class Destinations,{" "}
              <span className="text-gradient-primary">Endless Possibilities</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              New Zealand and Australia offer exceptional education, incredible lifestyles, 
              and welcoming communities. Discover which destination is right for you.
            </p>
          </div>
        </div>
      </section>

      {/* New Zealand Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img 
                src={heroImage} 
                alt="Beautiful New Zealand landscape"
                className="relative rounded-3xl shadow-elevated w-full"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🇳🇿</span>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  Aotearoa New Zealand
                </span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Where Education Meets Natural Wonder
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                New Zealand offers more than just education it offers a transformative life 
                experience. Study in one of the world's most beautiful, safe, and welcoming 
                countries, where quality education combines with an unparalleled lifestyle.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Known for its innovative approach to education, strong student support systems, 
                and genuine culture of care (manaakitanga), New Zealand provides an environment 
                where international students truly thrive. From world-class universities to 
                specialized institutes, you'll find quality education pathways at every level.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {nzHighlights.map((highlight) => (
                  <div key={highlight.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{highlight.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-card rounded-2xl border border-border/50">
                {nzFacts.map((fact) => (
                  <div key={fact.label} className="text-center">
                    <div className="font-display text-2xl font-bold text-primary mb-1">
                      {fact.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NZ Lifestyle Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              The New Zealand Lifestyle
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-2xl p-6 shadow-soft">
                <Mountain className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Adventure & Nature</h4>
                <p className="text-sm text-muted-foreground">
                  Mountains, beaches, forests, and lakes all within easy reach. 
                  The outdoor lifestyle is part of daily life in NZ.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-soft">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Welcoming Community</h4>
                <p className="text-sm text-muted-foreground">
                  New Zealanders are known for their warmth and friendliness. 
                  You'll feel at home from day one.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-soft">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Safe & Peaceful</h4>
                <p className="text-sm text-muted-foreground">
                  Consistently ranked among the world's safest countries peace of mind 
                  for you and your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Australia Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl" />
              <img 
                src={australiaImage} 
                alt="Sydney Opera House and Harbour Bridge"
                className="relative rounded-3xl shadow-elevated w-full"
              />
            </div>

            <div className="lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🇦🇺</span>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  Australia
                </span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                World-Class Education in a Vibrant Nation
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Australia is home to some of the world's most prestigious universities and 
                offers an incredible range of study options across every field. With excellent 
                weather, vibrant cities, and a multicultural society, it's one of the most 
                popular study destinations globally.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                From cutting-edge research universities to practical vocational training, 
                Australia provides pathways for every ambition. The country's strong economy 
                and diverse industries offer excellent opportunities during and after your studies.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {ausHighlights.map((highlight) => (
                  <div key={highlight.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{highlight.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-card rounded-2xl border border-border/50">
                {ausFacts.map((fact) => (
                  <div key={fact.label} className="text-center">
                    <div className="font-display text-2xl font-bold text-primary mb-1">
                      {fact.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUS Lifestyle Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              The Australian Lifestyle
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-2xl p-6 shadow-soft">
                <Sun className="w-10 h-10 text-secondary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Sunny Climate</h4>
                <p className="text-sm text-muted-foreground">
                  Enjoy warm weather, beautiful beaches, and an outdoor lifestyle 
                  that's hard to beat anywhere in the world.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-soft">
                <Users className="w-10 h-10 text-secondary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Multicultural Society</h4>
                <p className="text-sm text-muted-foreground">
                  One of the world's most diverse nations you'll find communities 
                  from every corner of the globe.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-soft">
                <Building2 className="w-10 h-10 text-secondary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Career Opportunities</h4>
                <p className="text-sm text-muted-foreground">
                  Strong economy with diverse industries offering excellent work 
                  opportunities during and after study.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Which Destination is Right for You?
              </h2>
              <p className="text-lg text-muted-foreground">
                Both countries offer exceptional experiences the right choice depends on 
                your unique goals and preferences.
              </p>
            </div>

            <div className="bg-gradient-card rounded-3xl p-8 shadow-card border border-border/50">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Consider New Zealand if...</h4>
                    <p className="text-muted-foreground">
                      You value a smaller, more intimate learning environment, stunning natural 
                      beauty, and a safe, peaceful lifestyle with strong community connections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Consider Australia if...</h4>
                    <p className="text-muted-foreground">
                      You're looking for a wider range of institutions and courses, larger cities, 
                      warmer climate, and extensive work opportunities in diverse industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Not sure yet?</h4>
                    <p className="text-muted-foreground">
                      That's perfectly okay! Our team will help you understand both options and 
                      find the destination that best matches your goals, budget, and preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-fern-pattern opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Let's Find Your Perfect Destination
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book a free consultation and let's discuss which country and pathway 
              is the best fit for your dreams.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your Journey Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
