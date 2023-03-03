import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '@/pages/api/typing'
type Props = {
    social?: Social[]
}

function Header({ social }: Props) {
    //console.log(social)
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center'>
                <SocialIcon url='https://github.com/realms-ai'
                    fgColor='gray' bgColor='transparent' />
                {social?.[0].url ?
                    <SocialIcon url={social?.[0].url} fgColor='gray' bgColor='transparent' /> :
                    <></>}

                <SocialIcon url='https://gitlab.com/realms-ai'
                    fgColor='gray' bgColor='transparent' />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }} className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray' bgColor='transparent'
                    url='#contact' />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400' >Get in touch</p>

            </motion.div>

        </header>

    )
}

export default Header