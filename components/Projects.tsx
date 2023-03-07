import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/pages/api/typing'
import { urlFor } from 'sanity'
import Link from 'next/link'
type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
                {projects?.map((project, i) => (

                    <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 xl:p-44 h-screen'>

                        <motion.img initial={{
                            y: -300,
                            opacity: 0
                        }}
                            transition={{
                                duration: 1.2

                            }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}

                            src={project?.image ? urlFor(project?.image).url() : ""}

                            alt='project video' />
                        <div className='space-y-6 px-0 md:px-2 max-w-6xl'>
                            <Link href={project?.linkToBuild ? project?.linkToBuild : ''}>
                                <h4 className='xl:text-4xl md:text-2xl text-xl font-semibold text-center'>
                                    <span className='underline decoration-[#f7ab0a]/50'>
                                        {project?.title}
                                    </span>{" "}
                                    {/* Factory Management Suite */}
                                </h4>
                            </Link>
                            {project?.role && <h5 className='xl:text-xl  md:text-lg  text-sm font-semibold text-left'>

                                {project?.role}

                                {/* Factory Management Suite */}
                            </h5>}
                            <p className='xl:text-lg md:text-base text-sm text-center md:text-left'>
                                {project?.summary}
                            </p>
                            {project?.keyFeatures &&
                                <ul className='list-disc space-y-1
                                 ml-5 md:text-lg text-sm'>
                                    {project?.keyFeatures.map((point, i) => <li key={i}>{point}</li>)}

                                </ul>}
                        </div>

                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#f7ab0a]/20 left-0 h-[500px] -skew-y-12'></div>
        </motion.div>
    )
}

export default Projects



