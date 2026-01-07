import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gift } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { submitToWeb3Forms, WEB3FORMS_ACCESS_KEY } from "@/lib/web3forms";

export function ReferralForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    const result = await submitToWeb3Forms({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Referral Program Signup - JMR Cleaning",
      from_name: "JMR Cleaning Website",
      name: formData.get("referrer-name") as string,
      phone: formData.get("referrer-phone") as string,
      email: formData.get("referrer-email") as string,
    });
    
    setIsSubmitting(false);
    
    if (result.success) {
      setIsSubmitted(true);
      toast({
        title: "Welcome to the Referral Program!",
        description: "We'll contact you with your unique referral code and reward details.",
      });
    } else {
      toast({
        title: "Submission Failed",
        description: result.message,
        variant: "destructive",
      });
    }
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
        <Input id="referrer-name" name="referrer-name" placeholder="Jane Doe" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="referrer-phone">Your Phone Number *</Label>
        <Input id="referrer-phone" name="referrer-phone" type="tel" placeholder="(416) 555-0123" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="referrer-email">Your Email *</Label>
        <Input id="referrer-email" name="referrer-email" type="email" placeholder="jane@example.com" required />
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
