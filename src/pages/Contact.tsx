import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle2,
  Send
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(647) 523-6156",
    href: "tel:+16475236156",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@jmrclean.com",
    href: "mailto:contact@jmrclean.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 8am - 6pm",
    href: null,
  },
];

const serviceAreas = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Oakville",
  "Burlington",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | JMR Cleaning</title>
        <meta
          name="description"
          content="Get in touch with JMR Cleaning. Contact us for quotes, questions, or to schedule your cleaning service."
        />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="container relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/10 text-sm font-medium mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl font-heading mb-6">
            Get in Touch
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Have questions? Need a quote? We're here to help. 
            Reach out and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
              <h2 className="font-heading text-2xl mb-8">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-2xl font-heading mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(416) 555-0123" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-soft rounded-3xl p-8 border border-border">
                <h3 className="font-heading text-xl mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  {contactInfo.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                            <item.icon className="text-primary-foreground" size={20} />
                          </div>
                          <div>
                            <span className="text-muted-foreground text-sm block">
                              {item.label}
                            </span>
                            <span className="font-medium">{item.value}</span>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                            <item.icon className="text-primary-foreground" size={20} />
                          </div>
                          <div>
                            <span className="text-muted-foreground text-sm block">
                              {item.label}
                            </span>
                            <span className="font-medium">{item.value}</span>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="text-primary" size={24} />
                  <h3 className="font-heading text-xl">Service Areas</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 rounded-full bg-section-alt text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
