import { PageInfo } from '@/pages/api/typing'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import { urlFor } from 'sanity'



const Footer = () => {
    return (
        <Link href='#hero'>
            <footer className='sticky bottom-5 w-full cursor-pointer'>
                <div className='flex items-center justify-center'>
                    <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                        src="/realms.png"
                        alt='scroll up'
                    />


                </div>
            </footer>
        </Link>
    )
}

export default Footer