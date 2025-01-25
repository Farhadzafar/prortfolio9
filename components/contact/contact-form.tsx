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
import { useI18n } from "@/lib/i18n"; // Importing the useI18n hook
import { translations } from "@/lib/translations"; // Importing the translations object

// //////////////////////////////////////////
import { SelectInput } from "../ui/slectInput";
import UserContactInput from "./UserContactInput";

const options1 = [
  { value: "technology", label: "Technology" },
  { value: "automotive", label: "Automotive" },
  { value: "compliance", label: "Compliance" },
  { value: "erp", label: "ERP" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Healthcare" },
  { value: "manufacturing", label: "Manufacturing" },
];
// ///////////////////////////////////////////

export function ContactForm() {
  const { language } = useI18n(); // Using language from the i18n hook
  const t = translations[language]; // Fetching the translations based on the current language
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
            {t.form.contactFormTitle}
          </CardTitle>
          <CardDescription className="text-black dark:text-white">
            {t.form.contactFormDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  placeholder={t.form.firstName}
                  required
                  className="bg-white dark:bg-black-100 text-black dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <Input
                  placeholder={t.form.lastName}
                  required
                  className="bg-white dark:bg-black-100 text-black dark:text-white"
                />
              </div>
            </div> */}

            <div className="space-y-2">
              <Input
                placeholder={t.form.firstName}
                required
                className="bg-white dark:bg-black-100 text-black dark:text-white"
              />
            </div>

            <div className="space-y-2">
              <UserContactInput className="mb-4" />
            </div>
            <div className="space-y-2">
              <SelectInput>
                <option value="technology">Technology</option>
                <option value="automotive">Automotive</option>
                <option value="compliance">Compliance</option>
                <option value="erp">ERP</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="technology">Technology</option>
                <option value="automotive">Automotive</option>
                <option value="compliance">Compliance</option>
                <option value="technology">Technology</option>
                <option value="automotive">Automotive</option>
                <option value="compliance">Compliance</option>
                <option value="erp">ERP</option>
                <option value="finance">Finance</option>
              </SelectInput>
            </div>

            <div className="space-y-2">
              <Input
                placeholder={t.form.subject}
                required
                className="bg-white dark:bg-black-100 text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder={t.form.message}
                required
                className="min-h-[150px] bg-white dark:bg-black-100 text-black dark:text-white"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                t.form.sending
              ) : (
                <>
                  {t.form.sendButton}
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
