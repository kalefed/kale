import Accordian from "./Accordian"
const items = [
  {
    title: 'Student Developer',
    position: 'Canada Revenue Agency',
    content: 'Enhanced software reliability by implementing unit tests, ensuring higher code quality. Programmed dynamic conditional rendering in a Java Swing application, resulting in improved user interface flexibility and interaction.',
    date: 'May 2023 - Present'

  },
  
  {
    title: 'Full Stack developer',
    position: 'COMPSA',
    content: 'Collaborated within a development team to build an admin panel using Next.js, Bulma CSS, and Fetch to interface with APIs. Contributed to various web projects, including the COMPSA website and merch store, demonstrating proficiency in Node.js, Python, React/Next.js, HTML, CSS, and GitHub.',
    date: 'June 2023 - Present'

  },
  {
    title: 'Junior Analyst',
    position: 'Statistics Canada',
    content: 'Developed a metadata search engine with React and Elasticsearch, enhancing dataset visibility through a standard knowledge graph format and SKOS data model. Designed RESTful APIs using FASTAPI and OpenAPI, while implementing Python for encoding and improving statistical dataset discoverability, with a focus on effective use case testing and validation.',
    date: 'May 2021 - April 2023'
  },
  {
    title: 'Orientation Leader',
    position: 'Queens Univeristy',
    content: 'Guided and facilitated the transition of incoming first-year university students as an orientation leader, providing essential information, support, and a welcoming atmosphere during the orientation program.',
    date: 'Starting September 2023'

  },
  {
    title: 'Student Subcommittee Coordinator',
    position: 'Statistics Canada',
    content: 'Took charge of coordinating and directing weekly SubCommittee meetings, overseeing task progress, fostering engagement, and delivering reports on accomplishments and schedules. Pioneered initiatives to enhance student engagement and build a remote work community, including event ideation, organization, and hosting.',
    date: 'May 2022 - September 2022'

  },
  {
    title: 'Student Pal Mentorship Program Mentor',
    position: 'Statistics Canada',
    content: 'Served as a guiding pal in the Student Pals Program at Statistics Canada, mentoring new student employees through onboarding and work-related challenges, including bi-weekly meetings to address various aspects of their experience.',
    date: 'October 2021 - August 2022'

  },
];

export default function Experience() {
  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-6xl font-sans font-bold uppercase text-white pt-44">Professional And Volunteer Experience</h1>
      <div className="flex justify-center pt-14 flex-grow">
        <div className="w-1/2">
          <Accordian items={items} />
        </div>
      </div>
    </div>
  )
}