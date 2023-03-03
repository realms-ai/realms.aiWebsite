import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'components/About'
import Experiences from 'components/Experience'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import ContactUs from 'components/ContactUs'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { User } from './api/typing'
import getUser, { userQuery } from './api/getUser'
import Footer from 'components/Footer'
import { sanityClient } from 'sanity'

interface Props {
    user: User
}
function Profile(props: Props) {
    const { user } = props

    if (!props.user) {
        return (
            <div className='flex justify-center items-center bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
            z-0 overflow-x-hidden'>
                <div className="rounded-full w-20 h-14 bg-gradient-to-tr from-#F7AB0A to-pink-500">
                    <img className=' animate-bounce
                 h-20 w-30 rounded-full filter  hover:grayscale-0 cursor-pointer'
                        src={"/realms.png"}
                        alt='loading'
                    />
                </div>
            </div>

        )
    }

    return (
        <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
    z-0 overflow-x-hidden'>
            <Head>
                <title>Realms AI | Answer to you software development needs</title>
                <meta name="description" content="software development" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Header social={user.social} />
            <section id="hero" className='snap-start'>
                <Hero pageInfo={user.pageInfo?.[0]} />
            </section>
            <section id="about" className='snap-center'>
                <About pageInfo={user.pageInfo?.[0]} />
            </section>
            <section id="experience" className='snap-center'>
                <Experiences experiences={user.experience} />
            </section>
            <section id="skills" className='snap-start'>
                <Skills skills={user.skill} />
            </section>
            <section id="projects" className='snap-start'>
                <Projects projects={user.project} />
            </section>
            <section id="contact" className='snap-start'>
                <ContactUs />
            </section>
            <Footer />

        </div>
    )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {

    const { params } = context
    const username = params?.username
    const response: User[] = await sanityClient.fetch(userQuery);
    const users = { user: response }
    const userCheck = Array.isArray(username) ? username[0]?.toLowerCase() : username?.toLowerCase()
    const userInfo = users.user?.filter(user => user.name.split(" ")[0].toLowerCase() ===
        userCheck)[0]



    return {
        props: {
            user: userInfo
        }, revalidate: 30,
    }
}

export async function getStaticPaths() {
    const response: User[] = await sanityClient.fetch(userQuery);

    const users = { user: response }

    //console.log(users)
    const pathsWithUsers = users.user?.map((user) => ({
        params: { username: user.name.split(" ")[0] },
    }));

    return {
        paths: pathsWithUsers,
        fallback: true,
    };
}

export default Profile