export default function CourseList() {
    return (
        <div className=" flex items-center justify-center px-16 pt-20">
            <div className="relative w-full">
                <div className="m-8 relative space-y-4">
                    <div className="flex space-x-4">
                        <div className="p-5 bg-white bg-opacity-50 rounded-lg flex-1 text-center">
                            <p className="font-mono text-danger">Computer Architecture</p>
                        </div>
                        <div className="p-5 bg-white bg-opacity-50 rounded-lg flex-1 text-center">
                            <p className="font-mono text-danger">Logic for Computer Science</p>
                        </div>
                        <div className="p-5 bg-white bg-opacity-50 rounded-lg flex-1 text-center">
                            <p className="font-mono text-danger">Game Design</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 pt-5">
                        <div className="p-5 bg-white bg-opacity-50 rounded-lg flex-1 text-center">
                            <p className="font-mono text-danger">Date structures</p>
                        </div>
                        <div className="p-5 bg-white bg-opacity-50 rounded-lg flex-1 text-center">
                            <p className="font-mono text-danger ">Cognition and Computation</p>
                        </div>
                        <div className="p-5 bg-white bg-opacity-50 rounded-lg flex-1 text-center">
                            <p className="font-mono text-danger">Software Specificiations</p>
                        </div>
                    </div>
                    {/* Add more groups of 3 items here */}
                </div>
            </div>
        </div>
    )
}
