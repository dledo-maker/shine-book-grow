import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Home, 
  Building2, 
  Sparkles, 
  PackageOpen,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Regular home cleaning tailored to your family's needs. We treat your home with the care it deserves.",
    features: [
      "Deep dusting & vacuuming",
      "Kitchen & bathroom sanitization",
      "Floor mopping & polishing",
      "Bedroom & living area care",
      "Window sill & baseboard cleaning",
    ],
    price: "From $120",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional cleaning for offices, retail spaces, and commercial properties.",
    features: [
      "Office space cleaning",
      "Common area maintenance",
      "Restroom sanitization",
      "Trash removal & recycling",
      "After-hours availability",
    ],
    price: "Custom Quote",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive, thorough cleaning for when your space needs extra attention.",
    features: [
      "Inside appliances",
      "Grout & tile scrubbing",
      "Cabinet interior cleaning",
      "Light fixture dusting",
      "Behind & under furniture",
    ],
    price: "From $250",
  },
  {
    icon: PackageOpen,
    title: "Move In/Out Cleaning",
    description: "Ensure your new or old space is spotless for the next chapter.",
    features: [
      "Complete top-to-bottom clean",
      "Wall spot cleaning",
      "Window interior cleaning",
      "All closets & storage",
      "Garage sweep (upon request)",
    ],
    price: "From $300",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | JMR Cleaning</title>
        <meta
          name="description"
          content="Professional residential, commercial, deep cleaning, and move-in/out services. Quality cleaning for every corner of your space."
        />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="container relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/10 text-sm font-medium mb-6">
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-heading mb-6">
            Cleaning Solutions for<br />Every Need
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            From routine home care to commercial spaces, we provide thorough cleaning 
            with the attention to detail that defines the JMR experience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-3xl p-8 md:p-10 shadow-card hover:shadow-hover transition-all duration-300 border border-border"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-primary-foreground" size={28} />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl mb-2">{service.title}</h2>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <span className="text-muted-foreground text-sm">Starting</span>
                    <p className="text-2xl font-heading text-gradient-primary">{service.price}</p>
                  </div>
                  <Button asChild variant="hero" size="sm">
                    <Link to="/booking">
                      Book Now
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-section-alt">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading mb-6">
              Not Sure What You Need?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us for a free consultation. We'll help you find the perfect 
              cleaning solution for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/booking">Book a Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
