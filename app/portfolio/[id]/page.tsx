import { useRouter } from "next/router";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa";

const ProjectDetails = () => {
  const router = useRouter();

  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  const { id } = router.query;

  console.log("Router Query:", router.query); // Debug: Log the query
  console.log("Projects:", projects); // Debug: Log the project list

  const project = projects.find(
    (project) => project.id === parseInt(id as string)
  );

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-white dark:bg-black-100">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
        {project.title}
      </h1>
      <p className="text-muted-foreground max-w-2xl mx-auto text-black dark:text-white">
        {project.description}
      </p>
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-auto mt-8"
      />
      <div className="flex flex-wrap gap-2 mt-4">
        {project.iconLists?.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`icon-${index}`}
            className="w-10 h-10"
          />
        ))}
      </div>
      <div className="flex gap-4 mt-8">
        <a
          href={project.link}
          className="flex items-center gap-2 text-sm text-purple-500 hover:text-purple-700 transition-colors"
        >
          <span className="lg:text-xl text-sm">Check Live Site</span>
          <FaLocationArrow className="ms-3" color="#CBACF9" />
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
