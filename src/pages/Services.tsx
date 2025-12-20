import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  Target, 
  GraduationCap, 
  FileCheck, 
  Users, 
  Home, 
  Compass,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";

const services = [
  {
    id: "pathway-planning",
    icon: Target,
    title: "Education Pathway Planning",
    tagline: "Find Your Direction",
    description: "Every great journey begins with a clear destination. We help you map out a personalized education pathway that aligns with your career aspirations, interests, and life goals.",
    whatItMeans: "Our pathway planning goes beyond just picking a course. We analyze your background, interests, career goals, and personal circumstances to create a comprehensive roadmap for your educational journey.",
    whyItMatters: "Without a clear plan, students often end up in courses that don't serve their long-term goals. A well-designed pathway saves time, money, and ensures you're building toward the future you truly want.",
    benefits: [
      "Personalized career and education assessment",
      "Clear progression pathway from study to career",
      "Alternative route planning for flexibility",
      "Long-term goal alignment and milestone mapping",
    ],
  },
  {
    id: "course-selection",
    icon: GraduationCap,
    title: "Course & Institute Selection",
    tagline: "The Right Fit Matters",
    description: "With hundreds of institutions and thousands of courses available, finding the perfect match can be overwhelming. We cut through the noise to find options that truly suit you.",
    whatItMeans: "We evaluate institutions based on quality, support systems, location, affordability, and how well they match your specific needs not commission rates or quotas.",
    whyItMatters: "The wrong institution can derail your plans, waste your investment, and impact your wellbeing. The right one can transform your life and open doors you never imagined.",
    benefits: [
      "Unbiased institution recommendations",
      "Course-by-course comparison and analysis",
      "Scholarship and funding opportunity research",
      "Campus culture and support service evaluation",
    ],
  },
  {
    id: "document-preparation",
    icon: FileCheck,
    title: "Document Preparation Support",
    tagline: "Details Done Right",
    description: "Applications require precision, completeness, and proper presentation. We ensure every document is prepared to the highest standard, maximizing your chances of success.",
    whatItMeans: "From transcripts to personal statements, we guide you through gathering, organizing, and presenting all required documents in the format institutions expect.",
    whyItMatters: "Small errors or missing documents can delay or derail your application. Professional preparation demonstrates your commitment and attention to detail.",
    benefits: [
      "Complete document checklist and tracking",
      "Personal statement guidance and review",
      "Transcript and certification verification support",
      "Application timeline management",
    ],
  },
  {
    id: "visa-assistance",
    icon: Compass,
    title: "Visa Process Guidance",
    tagline: "Navigate with Confidence",
    description: "Understanding visa requirements can be complex. We help you understand the process and connect you with licensed professionals for formal advice when needed.",
    whatItMeans: "We provide general guidance on visa categories, requirements, and timelines, and connect you with licensed immigration advisers for specific advice and applications.",
    whyItMatters: "Proper preparation and understanding of requirements helps ensure a smoother process. Working with licensed advisers gives you professional support when you need it most.",
    benefits: [
      "Clear explanation of general visa processes",
      "Preparation guidance for visa requirements",
      "Connection with licensed immigration advisers",
      "Timeline and milestone support",
    ],
  },
  {
    id: "family-support",
    icon: Users,
    title: "Family Transition Support",
    tagline: "The Whole Family Matters",
    description: "We understand that international education is often a family decision. We support the whole family through the transition, not just the student.",
    whatItMeans: "From helping partners find opportunities to understanding schooling options for children, we consider the needs of everyone involved in your journey.",
    whyItMatters: "When families are supported and settled, students thrive. We've seen the difference holistic family support makes to long-term success and happiness.",
    benefits: [
      "Partner opportunity guidance",
      "Children's education pathway support",
      "Family accommodation guidance",
      "Cultural adaptation resources and support",
    ],
  },
  {
    id: "post-arrival",
    icon: Home,
    title: "Post-Arrival Guidance",
    tagline: "Settling In Successfully",
    description: "Your support doesn't end when you arrive. We help you navigate the first crucial months in your new home, from practical matters to cultural adaptation.",
    whatItMeans: "We provide guidance on accommodation, banking, transport, local services, and connecting with communities that can help you feel at home faster.",
    whyItMatters: "The first months in a new country can be challenging. Having someone to turn to for practical advice and emotional support makes the transition smoother and more successful.",
    benefits: [
      "Accommodation search guidance",
      "Essential services setup support",
      "Local community connections",
      "Ongoing check-ins and support access",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-nature overflow-hidden">
        <div className="absolute inset-0 bg-fern-pattern opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Complete Support for Your{" "}
              <span className="text-gradient-primary">Education Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From first enquiry to settling into your new life, we provide comprehensive 
              guidance designed to make your journey smooth, stress-free, and successful.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                      {service.tagline}
                    </span>
                  </div>
                  
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What This Means</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.whatItMeans}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Why It Matters</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.whyItMatters}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits Card */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-gradient-card rounded-3xl p-8 shadow-card border border-border/50 sticky top-32">
                    <h4 className="font-display text-xl font-bold text-foreground mb-6">
                      What You'll Get
                    </h4>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-border">
                      <Button className="w-full" asChild>
                        <Link to="/contact">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-fern-pattern opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Take the First Step?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book a free consultation and let's discuss how we can support your 
              international education journey.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}