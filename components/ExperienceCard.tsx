import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const ExperienceCard = (props: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[450px] md:w-[550px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src=''
                alt='companylogo'
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>
                    Ruby on Rails Developers
                </h4>
                <p className='font-bold text-2xl mt-1'>MealSuite Inc</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10 rounded-full' src='' alt='js' />
                    <img className='h-10 w-10 rounded-full' src='' alt='react' />
                    <img className='h-10 w-10 rounded-full' src='' alt='html' />
                    <img className='h-10 w-10 rounded-full' src='' alt='css' />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work .... - Ended ....</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Development different payment types like credit given by company, food coupons or vouchers.</li>
                    <li>Integrated various 3rd party applications like sensor monitoring, SMS, Email, Call alerts by Twilio.</li>
                    <li>Integrated 3rd party credit card payment solutions.</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard