import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "No hidden fees or surprises",
  "Flexible scheduling options",
  "100% satisfaction guarantee",
  "Eco-friendly cleaning products",
];

const Booking = () => {
  return (
    <>
      <Helmet>
        <title>Book a Cleaning | JMR Cleaning</title>
        <meta
          name="description"
          content="Book your professional cleaning service with JMR Cleaning. Easy scheduling for residential and commercial spaces."
        />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="container relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/10 text-sm font-medium mb-6">
            Book Now
          </span>
          <h1 className="text-4xl md:text-6xl font-heading mb-6">
            Schedule Your Clean
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Fill out the form below and a JMR representative will contact you 
            to confirm your booking details.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
                <h2 className="font-heading text-2xl mb-8">Booking Request</h2>
                <BookingForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-gradient-soft rounded-3xl p-8 border border-border">
                <h3 className="font-heading text-xl mb-6">Why Book With Us</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-hero rounded-3xl p-8 text-primary-foreground">
                <h3 className="font-heading text-xl mb-4">Need Help?</h3>
                <p className="opacity-90 mb-6">
                  Have questions about our services or need a custom quote? 
                  We're here to help.
                </p>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="opacity-70">Phone:</span>{" "}
                    <a href="tel:+16475236156" className="hover:underline">
                      (647) 523-6156
                    </a>
                  </p>
                  <p>
                    <span className="opacity-70">Email:</span>{" "}
                    <a href="mailto:j171@live.ca" className="hover:underline">
                      j171@live.ca
                    </a>
                  </p>
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

export default Booking;
