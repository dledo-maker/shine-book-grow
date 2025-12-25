import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cleanerImage from "@/assets/cleaner-character.png";
import { 
  Sparkles, 
  Home, 
  Building2,
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Heart
} from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>JMR Cleaning | Because Every Corner Deserves CARE</title>
        <meta name="description" content="JMR Cleaning offers premium, reliable cleaning services in Toronto, Mississauga, Brampton, Vaughan, and the GTA. Because every corner deserves CARE." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-hero" />
          
          {/* Floating Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Animated Cleaner - follows page with cleaning motion */}
          <img 
            src={cleanerImage} 
            alt="" 
            className="w-32 md:w-44 lg:w-52 animate-cleaner pointer-events-none drop-shadow-2xl"
            style={{ 
              filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.3))',
              background: 'transparent'
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-32 text-center">
            {/* Badge */}
            <div className="animate-fade-in inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/30 text-white">
              <Sparkles className="h-4 w-4" />
              Premium Cleaning Services
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-in text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight max-w-5xl mx-auto">
              Because every corner{" "}
              <br className="hidden md:block" />
              deserves{" "}
              <span className="relative inline-block">
                <span className="text-white font-extrabold drop-shadow-lg">CARE</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 7 Q 50 0 100 7" stroke="currentColor" strokeWidth="3" fill="none" className="text-white/60" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Toronto's trusted cleaning experts. We bring sparkle, freshness, and peace of mind to every home and business we touch.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
              <Button asChild variant="accent" size="xl" className="group">
                <Link to="/booking">
                  Book Your Clean
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-in mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">Flexible Scheduling</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* Services Strip */}
        <section className="bg-card py-8 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold">Residential</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <span className="font-semibold">Commercial</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <span className="font-semibold">Deep Clean</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold">Move In/Out</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Why JMR Cleaning
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Cleaning with <span className="text-gradient">Heart & Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We don't just clean spaces—we create environments where you can thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Trusted & Insured",
                  description: "Fully bonded and insured team members you can trust in your space."
                },
                {
                  icon: Star,
                  title: "Quality Guaranteed",
                  description: "Not satisfied? We'll re-clean for free. Your happiness is our priority."
                },
                {
                  icon: Heart,
                  title: "Personalized Service",
                  description: "Customized cleaning plans tailored to your unique needs and preferences."
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Ready for a Spotless Space?
              </h2>
              <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">
                Book your first cleaning today and experience the JMR difference. 
                Because every corner deserves CARE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="accent" size="xl">
                  <Link to="/booking">
                    Book Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to="/referral">
                    Refer & Earn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Referral Teaser */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                    Referral Program
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    Share the Sparkle, Earn Rewards
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Love our service? Refer friends and family to earn discounts, free cleanings, and exclusive rewards.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {["Earn $25 for each referral", "Free cleaning after 5 referrals", "Exclusive member perks"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <Button asChild variant="hero" size="xl">
                    <Link to="/referral">
                      Join Referral Program
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
