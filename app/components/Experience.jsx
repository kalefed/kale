import Accordian from "./Accordian"
const items = [
    {
      title: 'Junior Analyst - Statistics Canada',
      content: 'Developed a metadata search engine with React and Elasticsearch, enhancing dataset visibility through a standard knowledge graph format and SKOS data model. Designed RESTful APIs using FASTAPI and OpenAPI, while implementing Python for encoding and improving statistical dataset discoverability, with a focus on effective use case testing and validation.',
    },
    {
      title: 'Student Developer - Canada Revenue Agency',
      content: 'Enhanced software reliability by implementing unit tests, ensuring higher code quality. Programmed dynamic conditional rendering in a Java Swing application, resulting in improved user interface flexibility and interaction.',
    },
    {
        title: 'Full Stack developer - COMPSA',
        content: 'Collaborated within a development team to build an admin panel using Next.js, Bulma CSS, and Fetch to interface with APIs. Contributed to various web projects, including the COMPSA website and merch store, demonstrating proficiency in Node.js, Python, React/Next.js, HTML, CSS, and GitHub.',
      },
      {
        title: 'Stduent Subcommittee Coordinator - Statistics Canada',
        content: 'Content of Section 2',
      },
      {
        title: 'Student Pal Mentorship Program - Mentor',
        content: 'Content of Section 2',
      },
      {
        title: 'Orientation Leader - Queens Univeristy',
        content: 'Content of Section 2',
      },
  ];

export default function Experience() {
    return (
        <div className="flex flex-col h-screen">
            <h1 className="text-6xl font-sans font-bold uppercase text-white pt-44">Professional And Volunteer Experience</h1>
            <div className="flex justify-center pt-14 flex-grow">
                <div className="w-1/2">
                    <Accordian items={items}/>
                </div>
            </div>
        </div>
    )
}