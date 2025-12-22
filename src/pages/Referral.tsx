import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReferralForm } from "@/components/ReferralForm";
import { Gift, Users, DollarSign, Heart, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Join the Program",
    description: "Sign up with your details and get your unique referral code.",
  },
  {
    icon: Heart,
    title: "Share the Love",
    description: "Tell your friends, family, and neighbors about JMR Cleaning.",
  },
  {
    icon: DollarSign,
    title: "Earn Rewards",
    description: "Get rewarded when your referrals book their first clean.",
  },
];

const rewards = [
  { referrals: "1-2", reward: "$25 credit" },
  { referrals: "3-5", reward: "$50 credit + free add-on" },
  { referrals: "6+", reward: "Free deep cleaning" },
];

const Referral = () => {
  return (
    <>
      <Helmet>
        <title>Referral Program | JMR Cleaning</title>
        <meta
          name="description"
          content="Join the JMR Cleaning referral program and earn rewards for sharing our services with friends and family."
        />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="container relative z-10 text-center">
          <div className="w-20 h-20 rounded-3xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
            <Gift className="text-primary-foreground" size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading mb-6">
            Referral Program
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Share the JMR experience with friends and family, and earn 
            rewards for every successful referral.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-heading mt-3 mb-4">
              Three Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-card p-8 rounded-3xl shadow-card border border-border text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-6">
                    <step.icon className="text-primary-foreground" size={28} />
                  </div>
                  <div className="text-4xl font-heading text-gradient-primary mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-heading text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight 
                    className="hidden md:block absolute top-1/2 -right-4 text-primary/30" 
                    size={24} 
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Table */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Rewards
              </span>
              <h2 className="text-3xl md:text-4xl font-heading mt-3 mb-4">
                What You'll Earn
              </h2>
            </div>

            <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border">
              <div className="grid grid-cols-2 bg-gradient-hero text-primary-foreground font-semibold">
                <div className="p-5 text-center border-r border-primary-foreground/10">
                  Referrals
                </div>
                <div className="p-5 text-center">Your Reward</div>
              </div>
              {rewards.map((tier, index) => (
                <div
                  key={tier.referrals}
                  className={`grid grid-cols-2 ${
                    index < rewards.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="p-5 text-center font-medium border-r border-border">
                    {tier.referrals}
                  </div>
                  <div className="p-5 text-center text-primary font-semibold">
                    {tier.reward}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading mb-4">
                Join the Program
              </h2>
              <p className="text-muted-foreground">
                Sign up today and start earning rewards for sharing the JMR experience.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
              <ReferralForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Referral;
