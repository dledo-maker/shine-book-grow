import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Gift } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function ReferralForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Welcome to the Referral Program!",
      description: "We'll contact you with your unique referral code and reward details.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
          <Gift className="h-8 w-8 text-secondary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">You're In!</h3>
        <p className="text-muted-foreground max-w-md">
          We'll contact you shortly with your unique referral code and reward details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="referrer-name">Your Full Name *</Label>
        <Input id="referrer-name" placeholder="Jane Doe" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="referrer-phone">Your Phone Number *</Label>
        <Input id="referrer-phone" type="tel" placeholder="(416) 555-0123" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="referrer-email">Your Email *</Label>
        <Input id="referrer-email" type="email" placeholder="jane@example.com" required />
      </div>

      <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Joining..." : "Join Referral Program"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Rewards may include discounts, free cleaning hours, or gift cards. Terms apply.
      </p>
    </form>
  );
}
