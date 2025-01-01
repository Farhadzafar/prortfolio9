// "use client";

// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description:
//       "A full-featured e-commerce solution with real-time inventory management.",
//     technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
//     image:
//       "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
//     demoLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Healthcare Management System",
//     description:
//       "Digital platform for managing patient records and appointments.",
//     technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
//     image:
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
//     demoLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Real Estate Application",
//     description: "Property listing and management platform with virtual tours.",
//     technologies: ["Vue.js", "Django", "PostgreSQL", "Three.js"],
//     image:
//       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
//     demoLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Project 1",
//     description: "Description for Project 1",
//     technologies: ["React", "Node.js", "MongoDB"],
//     image:
//       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
//     demoLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Project 2",
//     description: "Description for Project 2",
//     technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
//     image:
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
//     demoLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Project 3",
//     description: "Description for Project 3",
//     technologies: ["Angular", "Express", "MySQL"],
//     image:
//       "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
//     demoLink: "#",
//     githubLink: "#",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// };

// export default function PortfolioPage() {
//   return (
//     <div className="container mx-auto px-4 py-16 bg-black-100">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-16"
//       >
//         <h1 className="text-4xl font-bold mb-4 text-white">Our Portfolio</h1>
//         <p className="text-muted-foreground max-w-2xl mx-auto text-white">
//           Explore our successful projects and see how we've helped businesses
//           transform their digital presence.
//         </p>
//       </motion.div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//       >
//         {projects.map((project, index) => (
//           <motion.div key={index} variants={itemVariants}>
//             <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden bg-black-100">
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform hover:scale-105"
//                 />
//               </div>
//               <CardHeader>
//                 <CardTitle className="text-white">{project.title}</CardTitle>
//                 <CardDescription className="text-white">
//                   {project.description}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4">
//                   <a
//                     href={project.demoLink}
//                     className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                     Live Demo
//                   </a>
//                   <a
//                     href={project.githubLink}
//                     className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     <Github className="w-4 h-4" />
//                     Source Code
//                   </a>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "@/components/ui/Pin"; // Assuming this is a custom component you're using

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 6,
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
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

export default function PortfolioPage() {
  return (
    <div className="bg-white dark:bg-black-100">
      <div className="container mx-auto px-4 py-16 bg-white dark:bg-black-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Our Portfolio
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-black dark:text-white">
            Explore our successful projects and see how we've helped businesses
            transform their digital presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-16 mt-10"
        >
          {projects.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={item.link} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img
                      src={item.img}
                      alt="cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 w-40 h-40 object-cover rounded-full shadow-lg"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-black dark:text-white">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-muted-foreground mt-2 mb-4"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center space-x-2">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt={`icon-${index}`} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center space-x-2">
                    <a
                      href={item.link}
                      className="flex items-center gap-2 text-sm text-purple-500 hover:text-purple-700 transition-colors"
                    >
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </a>
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
