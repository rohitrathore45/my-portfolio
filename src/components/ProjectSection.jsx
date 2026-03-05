import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Career Networking Platform",
    description:
      "A scalable microservices-based networking platform built with Spring Boot and Neo4j, enabling high-performance multi-degree connection traversal with secure JWT authentication.",
    image: "/projects/career_networking_platform.jpeg",
    tags: ["Java", "Spring Boot", "Microservices", "Neo4j", "Kafka"],
    demoUrl: "https://github.com/rohitrathore45/career_networking_platform",
    githubUrl: "https://github.com/rohitrathore45/career_networking_platform",
  },
  {
    id: 2,
    title: "Hotel Management System",
    description:
      "A real-time booking platform with dynamic pricing, Stripe payment integration, and ACID-compliant transaction handling using PostgreSQL pessimistic locking.",
    image: "/projects/hotel_management_system.jpeg",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Stripe", "Redis"],
    demoUrl: "https://github.com/rohitrathore45/hotel_management_system",
    githubUrl: "https://github.com/rohitrathore45/hotel_management_system",
  },
  {
    id: 3,
    title: "AI Website Builder (SaaS)",
    description:
      "A full-stack SaaS platform that generates fully functional websites from natural language prompts using OpenAI API, featuring real-time editing, Stripe subscriptions, and secure authentication.",
    image: "/projects/ai-website-builder.png",
    tags: ["React 19", "Node.js", "OpenAI API", "PostgreSQL", "Stripe"],
    demoUrl: "https://ai-website-builder-wt8p.vercel.app",
    githubUrl: "https://github.com/rohitrathore45/ai-website-builder",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my key projects showcasing scalable backend systems,
          full-stack SaaS applications, and AI-powered platforms built with
          production-grade technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rohitrathore45"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};