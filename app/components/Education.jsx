import CourseList from "./CourseLists"
export default function Education() {
    return (
        <div className=" flex flex-col h-screen">
            <div className="flex flex-col justify-center h-screen">
                <h1 className="text-6xl font-sans font-bold uppercase text-white">queens university //COMPUTER SCIENCE</h1>
                <p className="text-2xl font-mono font-bold uppercase text-gray">candidate for bachelor of computing with professional internship - major in artificial intelligence</p>
                <CourseList />     
            </div>
        </div>
    )
}