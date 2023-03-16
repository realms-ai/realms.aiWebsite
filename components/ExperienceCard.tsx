import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/pages/api/typing'
import { urlFor } from 'sanity'
type Props = {
    experience?: Experience
}

const ExperienceCard = ({ experience }: Props) => {

    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[450px] md:w-[550px] xl:w-[700px] snap-center bg-[#292929] p-6 hover:opacity-100 hover:shadow-xl opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.figure
                initial={{ y: -100, opacity: 0 }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}>
                <img

                    className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"

                    src={experience?.companyImage ? urlFor(experience?.companyImage).url() : ""}
                    alt='companylogo'
                />
            </motion.figure>
            <div className='px-0 md:px-6'>
                <h4 className='text-2xl font-light'>
                    {experience?.jobTitle}
                </h4>
                <p className='font-bold text-xl mt-1'>{experience?.company}</p>
                <div className='flex space-x-2 my-2 overflow-x-scroll  scrollbar scrollbar-thin hover:scrollbar-track-transparent  '>

                    {experience?.technologies.map((tech, i) => <img className='h-10 w-10 rounded-full' key={i}

                        src={tech?.image ? urlFor(tech?.image).url() : ""}
                        alt={tech?.title} />)}

                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {`Started work ${experience?.dateStarted} - Ended ${experience?.dateEnded}`}
                </p>
                <ul className='list-disc space-y-4 ml-5 text-sm'>
                    {experience?.points.map((point, i) => <li key={i}>{point}</li>)}

                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard

github.com - simer
realms - ai
# Untroddenlabs account
Host github.com - untroddenlabs
    HostName github.com
    User untroddenlabs
    IdentityFile ~/.ssh/untroddenlabs
    IdentitiesOnly yes
    AddKeysToAgent yes
    UseKeychain yes

# Simerpreet's account, - the default config (Working in Github & Bitbucket)
Host simer
HostName simer
    IdentityFile ~/.ssh/simer
    IdentitiesOnly yes
    AddKeysToAgent yes
    UseKeychain yes

# Navpreet's account
User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes
    AddKeysToAgent yes
    UseKeychain yes

# realms  account
Host *
    HostName realms - ai
    IdentityFile ~/.ssh/realmsai
    IdentitiesOnly yes
    AddKeysToAgent yes
    UseKeychain yes

    # Default github account: oanhnn
Host simer
   HostName simer
   IdentityFile ~/.ssh/simer
   IdentitiesOnly yes
   
# Other github account: superman
Host realmsai
   HostName github.com
   IdentityFile ~/.ssh/realmsai
   IdentitiesOnly yes