import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { submitToWeb3Forms, WEB3FORMS_ACCESS_KEY } from "@/lib/web3forms";

export function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [cleaningType, setCleaningType] = useState("");
  const [serviceArea, setServiceArea] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    const result = await submitToWeb3Forms({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Booking Request - JMR Cleaning",
      from_name: "JMR Cleaning Website",
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      cleaning_type: cleaningType,
      service_area: serviceArea,
      preferred_date: date ? format(date, "PPP") : "Not specified",
      message: formData.get("message") as string || "No additional message",
    });
    
    setIsSubmitting(false);
    
    if (result.success) {
      setIsSubmitted(true);
      toast({
        title: "Request Submitted!",
        description: "A JMR representative will contact you shortly to confirm your booking.",
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
        <CheckCircle2 className="h-16 w-16 text-secondary mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground max-w-md">
          Your booking request has been submitted. A JMR representative will contact you shortly to confirm details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(416) 555-0123" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cleaning-type">Type of Cleaning *</Label>
          <Select required value={cleaningType} onValueChange={setCleaningType}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="service-area">Service Area *</Label>
          <Select required value={serviceArea} onValueChange={setServiceArea}>
            <SelectTrigger>
              <SelectValue placeholder="Select area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toronto">Toronto</SelectItem>
              <SelectItem value="mississauga">Mississauga</SelectItem>
              <SelectItem value="brampton">Brampton</SelectItem>
              <SelectItem value="vaughan">Vaughan</SelectItem>
              <SelectItem value="other">Other GTA</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Preferred Date (Optional)</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="p-3 pointer-events-auto"
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your cleaning needs..."
          className="min-h-[100px]"
        />
      </div>

      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Booking Request"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you'll be added to our early notification list and a JMR representative will contact you shortly to confirm details.
      </p>
    </form>
  );
}
