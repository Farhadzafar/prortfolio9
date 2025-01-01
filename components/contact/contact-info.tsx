"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "123 Innovation Street",
      "Kandahar, CA 94043",
      "Kandahar Afghanistan",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+93 (000) 700-6000", "+93 (999) 700-6000"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@aftech.com", "support@aftech.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 2:00 PM",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export function ContactInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <Card className="backdrop-blur-sm bg-white dark:bg-black-100">
        <CardHeader>
          <CardTitle className="text-black dark:text-white">
            Contact Information
          </CardTitle>
          <CardDescription className="text-black dark:text-white">
            Choose the most convenient way to reach us.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              <div className="mt-1">
                <detail.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-black dark:text-white">
                  {detail.title}
                </h3>
                {detail.details.map((text, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <Card className="backdrop-blur-sm bg-white dark:bg-black-100">
        <CardHeader>
          <CardTitle className="text-black dark:text-white">
            Follow Us
          </CardTitle>
          <CardDescription className="text-black dark:text-white">
            Stay connected with us on social media.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((platform) => (
              <Button
                key={platform}
                variant="outline"
                size="sm"
                className="bg-white dark:bg-black-100 text-black dark:text-white"
              >
                {platform}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
