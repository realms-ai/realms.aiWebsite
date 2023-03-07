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
import { PageInfo, Project, Skill, User } from './api/typing'
import { sanityClient, urlFor } from 'sanity'
import Footer from 'components/Footer'
import { projectQuery } from './api/getProject'
import { skillQuery } from './api/getSkill'
import { pageInfoQuery } from './api/getPageInfo'

interface Props {
  projects: Project[]
  skills: Skill[]
  pageInfo: PageInfo
}
export default function Home({ projects, skills, pageInfo }: Props) {

  if (!pageInfo) {
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
        <link rel="icon" href="/realms.png" />
      </Head>


      <Header />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>
      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>
      <section id="contact" className='snap-start'>
        <ContactUs />
      </section>
      <Footer />

    </div>
  )
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  type projectResponse = {
    project: Project[]
  }
  type skillResponse = {
    skill: Skill[]
  }
  type pageResponse = {
    pageinformation: PageInfo[]
  }
  const projects: Project[] = await sanityClient.fetch(projectQuery);
  const skills: Skill[] = await sanityClient.fetch(skillQuery);
  const pageInfo: PageInfo[] = await sanityClient.fetch(pageInfoQuery);

  // const projects: projectResponse = await fetch("http://localhost:3000/api/getProject", {
  //   method: "GET", headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then(response => {

  //   return response.json()
  // })
  // const skills: skillResponse = await fetch("http://localhost:3000/api/getSkill", {
  //   method: "GET", headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then(response => {

  //   return response.json()
  // })
  // const pageInfo: pageResponse = await fetch("http://localhost:3000/api/getPageInfo", {
  //   method: "GET", headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then(response => {

  //   return response.json()
  // })

  return {
    props: {
      projects: projects,
      skills: skills,
      pageInfo: pageInfo?.filter(page => page.name === "Realms AI")[0]
    }, revalidate: 30,
  }
}