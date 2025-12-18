import { Helmet } from "react-helmet-async";
import jmrLogo from "@/assets/jmr-logo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { BookingForm } from "@/components/BookingForm";
import { ReferralForm } from "@/components/ReferralForm";
import { 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  Users, 
  Home, 
  Building2,
  CheckCircle2,
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>JMR Cleaning – Coming Soon | Professional Cleaning Services Toronto & GTA</title>
        <meta name="description" content="JMR Cleaning offers premium, reliable cleaning services in Toronto, Mississauga, Brampton, Vaughan, and the GTA. Book now for early-bird offers." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/80" />
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            {/* Logo */}
            <div className="animate-fade-up mb-8">
              <img 
                src={jmrLogo} 
                alt="JMR Cleaning Logo" 
                className="h-28 md:h-36 mx-auto rounded-xl shadow-card bg-card/90 p-4"
              />
            </div>

            {/* Badge */}
            <div className="animate-fade-up-delay-1 inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-secondary/30">
              <Sparkles className="h-4 w-4" />
              Coming Soon
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary-foreground mb-6 leading-tight">
              JMR Cleaning
            </h1>

            {/* Tagline */}
            <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-primary-foreground/90 font-medium mb-6 max-w-2xl mx-auto">
              Proudly serving Toronto and surrounding areas with premium, reliable cleaning.
            </p>

            {/* Intro Text */}
            <p className="animate-fade-up-delay-2 text-base md:text-lg text-primary-foreground/75 max-w-3xl mx-auto mb-10 leading-relaxed">
              We are a new local cleaning company dedicated to quality, attention to detail, and your complete satisfaction. Launching soon—be the first to book with early-bird offers.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" onClick={scrollToBooking}>
                Book Early Access
              </Button>
              <Button variant="heroOutline" size="xl" onClick={() => document.getElementById('referral')?.scrollIntoView({ behavior: 'smooth' })}>
                Join Referral Program
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
            </div>
          </div>
        </section>

        {/* Features Strip */}
        <section className="bg-primary py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-primary-foreground">
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                <span className="font-medium">Residential</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                <span className="font-medium">Commercial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">Trusted Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                  Early Access
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Request a Booking or Early Access
                </h2>
                <p className="text-muted-foreground text-lg">
                  Be among the first to experience JMR Cleaning's premium services.
                </p>
              </div>

              <div className="bg-card rounded-2xl shadow-card p-6 md:p-10 border border-border">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Referral Section */}
        <section id="referral" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                  <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
                    Rewards Program
                  </span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    Refer a Friend – Get Rewarded
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    Already a JMR customer? Join our referral program. Add your info and we'll contact you with your unique referral code and reward details.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Earn discounts on future cleanings",
                      "Free cleaning hours for referrals",
                      "Exclusive gift card rewards"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Form */}
                <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 border border-border">
                  <ReferralForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area & Contact */}
        <section className="py-16 bg-foreground text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold">
                  Service Area
                </h2>
              </div>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Serving residential and commercial clients across{" "}
                <span className="text-primary-foreground font-semibold">Toronto</span>,{" "}
                <span className="text-primary-foreground font-semibold">Mississauga</span>,{" "}
                <span className="text-primary-foreground font-semibold">Brampton</span>,{" "}
                <span className="text-primary-foreground font-semibold">Vaughan</span>,{" "}
                and the Greater Toronto Area.
              </p>

              <div className="border-t border-primary-foreground/20 pt-8">
                <p className="text-primary-foreground/70 mb-4">For urgent inquiries:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:contact@jmrcleaning.ca" 
                    className="inline-flex items-center gap-2 text-primary-foreground hover:text-secondary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    contact@jmrcleaning.ca
                  </a>
                  <span className="hidden sm:block text-primary-foreground/40">|</span>
                  <a 
                    href="tel:+14165550123" 
                    className="inline-flex items-center gap-2 text-primary-foreground hover:text-secondary transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    (416) 555-0123
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-foreground border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} JMR Cleaning. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
