import { PageInfo } from '@/pages/api/typing'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from 'sanity'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo?: PageInfo
}

const Hero = ({ pageInfo }: Props) => {


    const [text] = useTypewriter({
        words: ['Developer', 'Designer', 'Creator'],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto'
                src={pageInfo?.profileImage ? urlFor(pageInfo?.profileImage).url() : ""}
                alt='realms-ai' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {pageInfo?.name ? pageInfo.name : ""}
                </h2>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {pageInfo?.role ? pageInfo.role.current : ""}
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold '>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#f7ab0a' />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button></Link>
                </div>
            </div>

        </div >
    )
}

export default Hero