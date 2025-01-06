import { notFound } from "next/navigation";
import { projects } from "@/data";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface PortfolioDetailsPageProps {
  params: { id: string };
}

export default function PortfolioDetailsPage({
  params,
}: PortfolioDetailsPageProps) {
  const project = projects.find((item) => item.id === Number(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-white dark:bg-black-100">
      <div className="mb-8">
        <Link
          href="/portfolio"
          className="flex items-center text-purple-500 hover:text-purple-700 transition-colors text-lg"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </Link>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          {project.title}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          {project.description}
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <img
          src={project.img}
          alt={project.title}
          className="rounded-lg shadow-lg w-full max-w-4xl"
        />
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:text-purple-700 text-lg flex items-center gap-2"
        >
          <span>Check Live Site</span>
        </a>
      </div>
    </div>
  );
}
