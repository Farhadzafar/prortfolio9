import {
  Code2,
  Database,
  Globe2,
  Layout,
  Smartphone,
  Terminal,
} from "lucide-react";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "View Project",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "View Project",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "View Project",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "View Project",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "Live Demo",
  },
  {
    id: 6,
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "View",
  },
];
export const services = [
  {
    icon: Globe2,
    title: "Web Development",
    imageSrc: "/images/web-development.jpg", // Add image URL here
    description:
      "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    imageSrc: "/images/mobile-development.jpg", // Add image URL here
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    technologies: ["React Native", "Flutter", "iOS", "Android", "PWA"],
  },
  {
    icon: Database,
    title: "Backend Development",
    imageSrc: "/images/backend-development.jpg", // Add image URL here
    description:
      "Scalable and secure backend solutions with modern architectures.",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    imageSrc: "/images/custom-software.jpg", // Add image URL here
    description:
      "Tailored software solutions for your specific business needs.",
    technologies: ["Java", "C#", ".NET", "Python", "Microservices"],
  },
  {
    icon: Terminal,
    title: "DevOps Services",
    imageSrc: "/images/devops-services.jpg", // Add image URL here
    description:
      "Streamline your development and deployment processes specific business needs.",
    technologies: ["Docker", "Kubernetes", "CI/CD", "AWS", "Azure"],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    imageSrc: "/images/backend-development.jpg", // Add image URL here
    description:
      "Beautiful and intuitive user interfaces that enhance user experience.",
    technologies: ["Figma", "Adobe XD", "Sketch"],
  },
];

export const phases = [
  {
    phase: "PHASE ONE: DISCOVERY",
    title: "Understanding Your Vision",
    description:
      "We dive deep into your business needs and objectives to create a solid foundation for your project.",
    features: [
      {
        title: "Requirements Analysis",
        description:
          "Detailed analysis of your business requirements and technical needs.",
      },
      {
        title: "Stakeholder Interviews",
        description:
          "In-depth discussions with key stakeholders to understand goals and expectations.",
      },
      {
        title: "Initial Planning",
        description: "Creating a preliminary roadmap for your project success.",
      },
    ],
  },
  {
    phase: "PHASE TWO: ESTIMATE",
    title: "Project Scope & Timeline",
    description:
      "Developing a comprehensive project plan with clear deliverables and timelines.",
    features: [
      {
        title: "Cost Analysis",
        description:
          "Detailed breakdown of project costs and resource requirements.",
      },
      {
        title: "Timeline Planning",
        description:
          "Creating realistic timelines with key milestones and deliverables.",
      },
      {
        title: "Resource Allocation",
        description:
          "Strategic allocation of team members and technical resources.",
      },
    ],
  },
  {
    phase: "PHASE THREE: BLUEPRINT",
    title: "Designing Your Solution",
    description:
      "Creating detailed technical specifications and architectural designs.",
    features: [
      {
        title: "Technical Architecture",
        description: "Designing scalable and maintainable system architecture.",
      },
      {
        title: "UI/UX Design",
        description: "Creating intuitive and engaging user interfaces.",
      },
      {
        title: "Security Planning",
        description:
          "Implementing robust security measures and best practices.",
      },
    ],
  },
  {
    phase: "PHASE FOUR: ENGINEERING",
    title: "Building Your Solution",
    description:
      "Transforming designs into reality with cutting-edge development practices.",
    features: [
      {
        title: "Agile Development",
        description:
          "Iterative development with regular feedback and adjustments.",
      },
      {
        title: "Quality Assurance",
        description: "Rigorous testing to ensure high-quality deliverables.",
      },
      {
        title: "Performance Optimization",
        description: "Fine-tuning for optimal performance and scalability.",
      },
    ],
  },
  {
    phase: "PHASE FIVE: TRAINING & SUPPORT",
    title: "We facilitate seamless integration",
    description:
      "Training on the completed software, and we stick around to ensure your system works perfectly – now and in the future.",
    features: [
      {
        title: "Smooth Transition",
        description:
          "We work with our clients to test new modules, sunset old workflows and systems, and ensure the new product will be successful upon launch.",
      },
      {
        title: "Teamwide Training",
        description:
          "We educate our customers' teams to ensure everyone is comfortable with the new software, and we collect performance data and user feedback to optimize as needed.",
      },
      {
        title: "Long-Term Support",
        description:
          "We fine-tune the system after implementation, and later we help improve performance and propose new evolutions based on tech advancements and business needs.",
      },
    ],
  },
];

export const gridItems = [
  {
    id: 1,
    title:
      "We value strong client partnerships, emphasizing transparent and open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "W are very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack",
    description: "We constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "A tech enthusiast driven by a deep passion for innovation and development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to collaborate on your next big project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const contactDetails = [
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
