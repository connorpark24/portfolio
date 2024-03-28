interface Project {
  name: string;
  tech: string;
  description: string;
}

const Work = () => {
  const projects: Project[] = [
    {
      name: "upround ventures platform",
      tech: "Next.js, TypeScript, Taiwlind, Supabase, Google OAuth",
      description:
        "Project management platform for UpRound Ventures. Includes features such as user management, task allocation, progress tracking, startup relationship management, and more",
    },
    {
      name: "gobrew",
      tech: "React Native, Tailwind, Supabase, Zustand",
      description:
        "Social networking app for students seeking career-related advice. V1 Fall '23 Cohort Project",
    },
    {
      name: "v1 platform",
      tech: "Next.js, TypeScript, Taiwlind, Supabase",
      description:
        "Building Projects page for builders at Michigan to share their work.",
    },
    {
      name: "winston",
      tech: "React, TypeScript, Tailwind, Flask, OpenAI API",
      description:
        "Tool that uses AI to turn PDFs into multiple choice, open-ended, or true/false practice questions.",
    },
  ];

  return (
    <section
      className="flex items-center min-h-screen lg:scroll-mt-40 px-8 md:px-16 lg:px-24 bg-primary py-24"
      id="projects"
    >
      <div className="flex flex-col items-center w-full">
        <h1 className="md:text-lg text-base text-white mb-4 font-light font-noto-sans">
          work
        </h1>
        <div className="flex flex-col gap-y-10 lg:w-4/5 w-full">
          {projects.map((project) => (
            <div id={project.name} className="flex flex-col items-center">
              <p className="text-white lg:text-6xl md:text-5xl text-4xl font-karma mb-1 text-center leading-7">
                {project.name}
              </p>
              <p className="text-white lg:text-lg md:text-base text-sm mb-1.5 font-noto-sans font-thin text-center">
                {project.tech}
              </p>
              <p className="text-white lg:text-base md:text-sm text-xs leading-5 font-noto-sans font-thin text-center">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// const Slide = ({ project }: { project: Project }) => (
//   <div className="h-[400px] rounded-xl flex flex-col font-light">
//     <div className="h-3/5">
//       <img className="p-4 h-full object-cover mx-auto my-auto" />
//     </div>
//     <div className="h-2/5 p-4 flex flex-col  text-white">
//       <p className="lg:text-3xl text-2xl">{project.name}</p>
//       <p className="text-lg">{project.tech}</p>
//       <p className="text-md mt-2">{project.description}</p>
//     </div>
//   </div>
// );

export default Work;
