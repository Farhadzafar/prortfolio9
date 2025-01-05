"use client";

import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Cover } from "@/components/ui/cover";

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-black-100">
      <div className="container mx-auto px-4 py-16 md:py-24 dark:bg-black-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Get in Touch
          </h1>
          {/* <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-white dark:bg-black-100">
            <Cover>Get in Touch</Cover>
          </h1> */}
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-black dark:text-white">
            Have a project in mind? We’d love to hear about it. Let’s discuss
            how we can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto dark:bg-black-100">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
