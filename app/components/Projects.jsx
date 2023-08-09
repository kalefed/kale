import ProjectCarousel from "./ProjectCarousel"

const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      image: '/images/project1.jpg', // Replace with actual image path
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      image: '/images/project2.jpg', // Replace with actual image path
    },
    // Add more projects as needed
  ];

  
export default function Projects() {
    return (
        <div className=" flex flex-col h-screen">
            <div className="flex flex-col justify-center h-screen">
                <h1 className="text-6xl font-sans font-bold uppercase text-white">Projects</h1>
                <ProjectCarousel projects={projects} />
            </div>
        </div>
    )
}