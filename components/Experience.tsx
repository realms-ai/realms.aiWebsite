import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/pages/api/typing'
type Props = {
    experiences?: Experience[]
}

const Experiences = ({ experiences }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex flex-col md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Experience
            </h3>
            <div className='w-full flex space-x-5 overflow-x-scroll p-8 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>

                {experiences?.map((experience, i) => <ExperienceCard key={i} experience={experience} />)}

            </div>
        </motion.div>
    )
}

export default Experiences
