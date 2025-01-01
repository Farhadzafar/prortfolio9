"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe2,
  Layout,
  Smartphone,
  Terminal,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Globe2,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    technologies: ["React Native", "Flutter", "iOS", "Android", "PWA"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Scalable and secure backend solutions with modern architectures.",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailored software solutions for your specific business needs.",
    technologies: ["Java", "C#", ".NET", "Python", "Microservices"],
  },
  {
    icon: Terminal,
    title: "DevOps Services",
    description: "Streamline your development and deployment processes.",
    technologies: ["Docker", "Kubernetes", "CI/CD", "AWS", "Azure"],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience.",
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "User Research",
      "Prototyping",
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-black-100">
      <div className="container mx-auto px-4 py-16 md:py-24 dark:bg-black-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide comprehensive software development solutions to help
            businesses thrive in the digital age. Our expertise spans across
            various technologies and platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 dark:bg-black-100"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow dark:bg-black-100 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 dark:bg-black-100 bg-white rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
