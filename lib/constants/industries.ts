import {
  Cpu,
  Car,
  Shield,
  BarChart2,
  PiggyBank,
  Heart,
  Factory,
} from "lucide-react";

export const industries = [
  { icon: Cpu, name: "Technology" },
  { icon: Car, name: "Automotive" },
  { icon: Shield, name: "Compliance" },
  { icon: BarChart2, name: "ERP" },
  { icon: PiggyBank, name: "Finance" },
  { icon: Heart, name: "Healthcare" },
  { icon: Factory, name: "Manufacturing" },
  // Duplicate first few items to create seamless loop
  { icon: Cpu, name: "Technology" },
  { icon: Car, name: "Automotive" },
  { icon: Shield, name: "Compliance" },
] as const;
