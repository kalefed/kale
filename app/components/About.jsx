'use client'
import { motion } from "framer-motion"

export default function About() {
    return (
        <div className=" flex flex-col">
            <div className="flex flex-col justify-center h-screen" >
                    <h1 className="text-6xl font-sans font-bold uppercase text-white">I’m a computer science AI student with an insatiable love for all things creative.</h1>
                <p className=" font-mono text-2xl text-gray pt-10">I thrive at the intersection of technology and art, exploring full stack programming, design, and various art mediums.<br/><br/>When I'm not immersing myself in coding, you'll find me lost in the pages of a captivating book or embarking on epic Star Wars adventures (in my head).<br/><br/>Join me as I merge my diverse passions to create innovative solutions, thought-provoking art, and captivating user experiences. Welcome to my world of boundless possibilities!</p>
            </div>
        </div>
    )
}