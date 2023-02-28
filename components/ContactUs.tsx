import React from 'react'
import { motion } from "framer-motion"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};
type Props = {}

const ContactUs = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>


            <div className='space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need {" "}
                    <span className='decoration-[#f7ab0a]/50 underline'>Lets Talk</span>
                </h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon onClick={() => { window.location.href = 'mailto:realms-ai@gmail.com' }}
                            className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>realms-ai@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>realms-ai@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>realms-ai@gmail.com</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                        <div className='flex space-x-2'>
                            <input {...register("name", { required: true })} placeholder='Name' className='contactInput' type='text' />
                            <input {...register("email", { required: true })} placeholder='Email' className='contactInput' type='text' />

                        </div>
                        <input {...register("subject", { required: true })} placeholder='Subject' className='contactInput' type='text' />
                        <textarea {...register("message", { required: true })} placeholder='Message' className='contactInput' />
                        <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                    </form>
                </div>


            </div>
        </motion.div>
    )
}

export default ContactUs