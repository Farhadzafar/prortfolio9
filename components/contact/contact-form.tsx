"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <motion.div
      className="bg-white dark:bg-black-100"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="backdrop-blur-sm bg-white dark:bg-black-100">
        <CardHeader>
          <CardTitle className="text-black dark:text-white">
            Send us a Message
          </CardTitle>
          <CardDescription className="text-black dark:text-white">
            Fill out the form below and we'll get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  placeholder="First Name"
                  required
                  className="bg-white dark:bg-black-100 text-black dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <Input
                  placeholder="Last Name"
                  required
                  className="bg-white dark:bg-black-100 text-black dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                required
                className="bg-white dark:bg-black-100 text-black dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Subject"
                required
                className="bg-white dark:bg-black-100 text-black dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                required
                className="min-h-[150px] bg-white dark:bg-black-100 text-black dark:text-white"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
