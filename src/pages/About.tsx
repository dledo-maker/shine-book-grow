import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Shield, Leaf, Award, ArrowRight, Quote } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Care",
    description: "We treat every space as if it were our own, with genuine attention and respect.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Fully insured, background-checked team members you can rely on.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Eco-friendly products and practices for a healthier environment.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Consistently high standards and attention to every detail.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | JMR Cleaning</title>
        <meta
          name="description"
          content="Learn about JMR Cleaning's mission to provide exceptional cleaning services with care. Serving the Greater Toronto Area."
        />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="container relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/10 text-sm font-medium mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-heading mb-6">
            Our Story
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            More than a cleaning company — we're your partners in creating 
            spaces that inspire and comfort.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-5xl font-heading mt-3 mb-6">
                Because Every Corner Deserves <span className="text-gradient-primary">CARE</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At JMR Cleaning, we believe that a clean space is more than just aesthetically 
                pleasing — it's essential for wellbeing, productivity, and peace of mind.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Founded with a simple but powerful vision, we set out to redefine cleaning 
                services in the Greater Toronto Area. Our approach combines professional 
                expertise with genuine care, ensuring that every corner of your space 
                receives the attention it deserves.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're not just cleaners — we're caregivers for your space, dedicated to 
                creating environments where life happens beautifully.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-hero opacity-20 absolute -inset-4 blur-3xl" />
              <div className="relative bg-card rounded-3xl p-10 shadow-card border border-border">
                <Quote className="text-primary mb-6" size={48} />
                <p className="text-xl md:text-2xl font-heading italic mb-6">
                  "We don't just clean spaces — we care for them, transforming 
                  every corner into a place of comfort and beauty."
                </p>
                <div>
                  <p className="font-semibold text-foreground">JMR Team</p>
                  <p className="text-muted-foreground text-sm">Founders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-5xl font-heading mt-3 mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-2xl shadow-card text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-heading text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Ready to Experience the JMR Difference?
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">
            Let us show you what it means to have a space that's truly cared for.
          </p>
          <Button asChild variant="heroOutline" size="xl">
            <Link to="/booking">
              Book Your Clean
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
