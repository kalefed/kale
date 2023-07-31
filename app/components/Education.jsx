export default function Education() {
    return (
        <div className=" flex flex-col h-screen">
            <div className="flex flex-col justify-center h-screen">
                <h1 className="text-6xl font-sans font-bold uppercase text-primary">queens university //COMPUTER SCIENCE</h1>
                <p className="text-2xl font-mono font-bold uppercase text-danger">candidate for bachelor of computing with professional internship - major in artificial intelligence</p>
                <div>
                    <ol className="space-y-5 my-7">
                        <h2 className="font-mono text-danger">Relevant Courses:</h2>
                        <li><p className="font-mono text-secondary">Computer Architecture</p></li>
                        <li><p className="font-mono text-secondary">Logic for Computer Science</p></li>
                        <li><p className="font-mono text-secondary">Game Design</p></li>
                        <li><p className="font-mono text-secondary">Date structures</p></li>
                        <li><p className="font-mono text-secondary">Cognition and Computation</p></li>
                        <li><p className="font-mono text-secondary">Software Specificiations</p></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}