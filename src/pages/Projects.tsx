import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "SmileTrack - Dental Clinic Management System",
      description: "A comprehensive dental clinic management system with patient tracking, appointment scheduling, and treatment planning features.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/pronobkarmoker/SmileTrack-A-Smart-Dental-Clinic-Management-System",
      live: "https://smile-track-a-smart-dental-clinic-management-system.vercel.app/"
    },
    {
      title: "Digital Clock",
      description: "A modern digital clock application with additional features like timezone support and alarms.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/pronobkarmoker/Digital-Clock",
      live: "https://digital-clock-alpha-five.vercel.app/"
    },
    {
      title: "Data Classification System",
      description: "Implementation of Decision Tree and Random Forest algorithms for data classification based on three different criteria.",
      technologies: ["c++", "Machine Learning"],
      github: "https://github.com/pronobkarmoker/SPL-1",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;