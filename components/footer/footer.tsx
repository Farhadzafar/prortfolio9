"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { SocialLinks } from "./social-links";
import { FooterLinks } from "./footer-links";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black-100 backdrop-blur-md border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Aftech</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transforming ideas into exceptional software solutions. Building
              the future of technology, one project at a time.
            </p>
            <SocialLinks />
          </motion.div>

          <div className="lg:col-span-3">
            <FooterLinks />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t text-center text-muted-foreground"
        >
          <p>
            © {new Date().getFullYear()} Aftech Software House. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
