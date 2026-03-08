import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { InsertContactMessage } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: InsertContactMessage) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent",
        description: "We'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => mutation.mutate(data);

  return (
    <section id="contact" className="py-32 bg-white" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#F4D03F]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#2F2F2F]/50">
                Contact
              </span>
            </div>

            <h2
              className="font-serif text-4xl md:text-5xl font-bold text-[#2F2F2F] tracking-[-0.02em] mb-8"
              data-testid="text-contact-heading"
            >
              Let's Build
              <br />
              Together
            </h2>

            <p className="font-sans text-base text-[#2F2F2F]/60 leading-relaxed mb-12">
              Whether you have a site, a sketch, or simply a vision, we'd love to hear
              from you. Every great building begins with a conversation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[#2F2F2F]/10">
                  <Mail size={16} className="text-[#F4D03F]" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-[#2F2F2F]/40 mb-1">
                    Email
                  </p>
                  <p className="font-sans text-sm text-[#2F2F2F]" data-testid="text-contact-email">
                    studio@dsk-arch.co.za
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[#2F2F2F]/10">
                  <Phone size={16} className="text-[#F4D03F]" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-[#2F2F2F]/40 mb-1">
                    Phone
                  </p>
                  <p className="font-sans text-sm text-[#2F2F2F]" data-testid="text-contact-phone">
                    +27 21 461 8800
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[#2F2F2F]/10">
                  <MapPin size={16} className="text-[#F4D03F]" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-[#2F2F2F]/40 mb-1">
                    Studio
                  </p>
                  <p className="font-sans text-sm text-[#2F2F2F]" data-testid="text-contact-address">
                    42 Bree Street, Cape Town 8001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
                data-testid="form-contact"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          {...field}
                          className="h-12 border-[#2F2F2F]/10 bg-transparent font-sans text-sm text-[#2F2F2F] placeholder:text-[#2F2F2F]/30 focus:border-[#F4D03F] rounded-none transition-colors duration-300"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email Address"
                          type="email"
                          {...field}
                          className="h-12 border-[#2F2F2F]/10 bg-transparent font-sans text-sm text-[#2F2F2F] placeholder:text-[#2F2F2F]/30 focus:border-[#F4D03F] rounded-none transition-colors duration-300"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          rows={5}
                          {...field}
                          className="border-[#2F2F2F]/10 bg-transparent font-sans text-sm text-[#2F2F2F] placeholder:text-[#2F2F2F]/30 focus:border-[#F4D03F] rounded-none resize-none transition-colors duration-300"
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full h-12 bg-[#2F2F2F] text-white font-sans text-xs tracking-[0.2em] uppercase rounded-none border border-[#2F2F2F]"
                  data-testid="button-submit-contact"
                >
                  {mutation.isPending ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center gap-3">
                      Send Message
                      <Send size={14} />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
