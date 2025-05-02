"use client";
import { ExperienceComponent } from "@/app/_components/experience";
import { Navbar } from "@/app/_components/navbar";
import { ProjectCard } from "@/app/_components/projectCard";
import { Theme } from "@/app/_components/themes";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BookOpen,
  GraduationCap,
  Infinity,
  Laptop,
  LaptopMinimal,
  LayoutGrid,
  Mail,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import {
  Appwrite,
  AWS,
  Django,
  Docker,
  ExpressJsLight,
  FastAPI,
  Firebase,
  Git,
  GitHubDark,
  JavaScript,
  Kotlin,
  Kubernetes,
  MongoDB,
  NextJs,
  NodeJs,
  Python,
  React,
  TailwindCSS,
  Terraform,
  TypeScript,
  WordPress,
} from "developer-icons";
import { Achievements } from "./_components/achievements";

export default function Home() {
  const skills = [
    // Frontend
    {
      title: "React",
      icon: <React style={{ width: 50, height: 50 }} />,
    },
    {
      title: "Tailwind",
      icon: <TailwindCSS style={{ width: 50, height: 50 }} />,
    },
    {
      title: "Next.js",
      icon: <NextJs style={{ width: 50, height: 50 }} />,
    },
    // Backend
    {
      title: "Django",
      icon: <Django style={{ width: 50, height: 50 }} />,
    },
    {
      title: "FastAPi",
      icon: <FastAPI style={{ width: 50, height: 50 }} />,
    },
    {
      title: "Node.js",
      icon: <NodeJs style={{ width: 50, height: 50 }} />,
    },
    {
      title: "ExpressJs",
      icon: <ExpressJsLight style={{ width: 50, height: 50 }} />,
    },

    // Cloud & Infrastructure
    {
      title: "Firebase",
      icon: <Firebase style={{ width: 50, height: 50 }} />,
    },
    {
      title: "Appwrite",
      icon: <Appwrite style={{ width: 50, height: 50 }} />,
    },
    {
      title: "Docker",
      icon: <Docker style={{ width: 50, height: 50 }} />,
    },
    {
      title: "AWS",
      icon: <AWS style={{ width: 50, height: 50 }} />,
    },
    {
      title: "Kubernetes",
      icon: <Kubernetes style={{ width: 50, height: 50 }} />,
    },
    {
      title: "WordPress",
      icon: <WordPress style={{ width: 50, height: 50 }} />,
    },
    {
      title: "Terraform",
      icon: <Terraform style={{ width: 50, height: 50 }} name="terraform" />,
    },
    // Languages
    {
      title: "Kotlin",
      icon: <Kotlin style={{ width: 50, height: 50 }} />,
    },
    {
      title: "Python",
      icon: <Python style={{ width: 50, height: 50 }} />,
    },
    {
      title: "JavaScript",
      icon: <JavaScript style={{ width: 50, height: 50 }} />,
    },
    {
      title: "TypeScript",
      icon: <TypeScript style={{ width: 50, height: 50 }} />,
    },
    // Version Control & Tools
    {
      title: "Git",
      icon: <Git style={{ width: 50, height: 50 }} />,
    },
    {
      title: "GitHub",
      icon: <GitHubDark style={{ width: 50, height: 50 }} />,
    },
    // Databases
    {
      title: "MongoDB",
      icon: <MongoDB style={{ width: 50, height: 50 }} />,
    },
  ];
  const otherSkills = [
    { title: "SQLite", icon: "/sqlite.svg" },

    { title: "React Native", icon: "/react-native.svg" },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  const achievements = [
    {
      title: "Programming Fundamentals in Kotlin",
      source: "- Meta (Coursera)",
      description:
        "Mastered Kotlin programming fundamentals through Meta's comprehensive course, covering object-oriented programming, functional programming concepts, and Android development basics.",
      link: "https://www.coursera.org/account/accomplishments/records/8NCHCC8VZZFO",
    },
    {
      title: "Python for Data Science, AI & Development",
      source: "- IBM (Coursera)",
      description:
        "Gained expertise in Python for data science applications, including data analysis, machine learning basics, and AI development fundamentals through IBM's professional certification program.",
      link: "https://www.coursera.org/account/accomplishments/records/HMKVNBE1KVM7",
    },
    {
      title: "Linux Commands and Shell Scripting",
      source: "- IBM (Coursera)",
      description:
        "Completed hands-on training in Linux system administration, command-line operations, and shell scripting, essential skills for DevOps and system administration.",
      link: "https://www.coursera.org/account/accomplishments/records/NYAR0MGIJE5A",
    },
    {
      title: "Introduction to IT and AWS Cloud",
      source: "- AWS (Coursera)",
      description:
        "Acquired fundamental knowledge of AWS cloud services, cloud computing concepts, and best practices for cloud infrastructure management.",
      link: "https://www.coursera.org/account/accomplishments/records/5F499YWVG0D3",
    },
    {
      title: "Rest API (Intermediate)",
      source: "- HackerRank",
      description:
        "Demonstrated proficiency in designing and implementing RESTful APIs, earning the intermediate-level certification on HackerRank's platform.",
      link: "https://www.hackerrank.com/certificates/fc2950f14671",
    },
    {
      title: "Python (Basic)",
      source: "- HackerRank",
      description:
        "Achieved Python certification on HackerRank, demonstrating strong fundamentals in Python programming and problem-solving abilities.",
      link: "https://www.hackerrank.com/certificates/46ae9455ab15",
    },
    {
      title: "Algorithmes (Bronze Level)",
      source: "- CodinGame",
      description:
        "Earned Bronze level certification in Algorithms, showcasing problem-solving skills and algorithmic thinking through practical coding challenges.",
      link: "https://www.codingame.com/certification/CNcyzISxIQvm2RVlW28GXA",
    },
    {
      title: "Collaboration (Silver Level)",
      source: "- CodinGame",
      description:
        "Achieved Silver level in Collaboration, demonstrating strong teamwork and communication skills in programming challenges and projects.",
      link: "https://www.codingame.com/certification/2dfp9CFgj8dJ4EK5boNe5g",
    },
  ];
  const projects = [
    {
      image: "/laundry.png",
      title: "Online Laundry Service Platform",
      description:
        "A web-based laundry service booking platform built with React and Next.js. Features include service scheduling, real-time booking management, and automated notifications.",
      link: "https://github.com/bruneldev/laundry-service",
    },
    {
      image: "/chat.png",
      title: "Real-time Chat Application",
      description:
        "A scalable instant messaging platform supporting 50+ concurrent users, built with WebSocket for real-time communication, Clerk for authentication, and React/Next.js for the frontend.",
      link: "https://github.com/bruneldev/chat-app",
    },
    {
      image: "/tasks.png",
      title: "Collaborative Task Management",
      description:
        "A full-stack task management application with REST API backend (Prisma/PostgreSQL) and React/Next.js frontend. Enables team collaboration, task tracking, and project organization.",
      link: "https://github.com/bruneldev/task-manager",
    },
    {
      image: "/portfolio.png",
      title: "Personal Portfolio",
      description:
        "An SEO-optimized interactive personal website showcasing my work and skills, built with Next.js and styled with Tailwind CSS.",
      link: "https://github.com/bruneldev/portfolio",
    },
    {
      image: "/unisafe.png",
      title: "Unisafe+",
      description:
        "A React Native mobile application designed for reporting harassment incidents, featuring anonymous reporting, incident tracking, and support resources.",
      link: "https://github.com/bruneldev/unisafe-plus",
    },
    {
      image: "/cinemax.png",
      title: "Cinemax",
      description:
        "A digital movie ticket booking application for Benin's cinemas, built with React Native. Features include seat selection, payment integration, and digital ticket management.",
      link: "https://github.com/bruneldev/cinemax",
    },
    {
      image: "/zemi.png",
      title: "Zemi",
      description:
        "A React Native application for booking zemidjan (motorcycle taxi) rides in Benin, featuring real-time tracking, fare estimation, and secure payments.",
      link: "https://github.com/bruneldev/zemi",
    },
    {
      image: "/leave.png",
      title: "Leave Manager",
      description:
        "A mobile application for corporate leave management, streamlining leave requests, approvals, and tracking employee time-off balances.",
      link: "https://github.com/bruneldev/leave-manager",
    },
  ];
  return (
    <div className="w-full">
      <div className="h-screen flex flex-col bg-[#151718] text-gray-100 w-full">
        <div className="w-full fixed top-0 left-0 z-50">
          <Navbar />
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center px-4 sm:px-0">
          <div className="flex justify-center items-center flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
            <div className="w-16 sm:w-20 bg-white rounded-full"></div>
            <div className="text-center sm:text-left">
              <h6>Hi! I am Brunel</h6>
              <h3 className="font-semibold text-2xl sm:text-4xl">
                A Software Developer
              </h3>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 flex-col">
            <div
              className="w-fit h-fit"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              <Theme
                title="Digital"
                icon={LaptopMinimal}
                color="#F2555A"
                backgroundColor="#3C181A"
              />
            </div>

            <div className="flex justify-center items-center flex-row space-x-3">
              <div
                className="w-fit h-fit"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <Theme
                  title="Software"
                  icon={LayoutGrid}
                  color={"#FF802B"}
                  backgroundColor={"#391A03"}
                />
              </div>
              <div
                className="w-fit h-fit"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <Theme
                  title="Devops"
                  icon={Infinity}
                  color="#3CB179"
                  backgroundColor="#0F291E"
                />
              </div>
            </div>
            <div
              className="w-fit h-fit"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <Theme
                title="Development"
                icon={Terminal}
                color="#369EFF"
                backgroundColor="#10243E"
              />
            </div>
          </div>
          <p className="max-w-600px md:text-2xl text-lg text-center mt-2 px-5 text-gray-400">
            I create web apps that are engaging, accessible and scalable.
          </p>
        </div>
        <div className="mx-3 pb-3 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="text-sm sm:text-base">
            Code, deploy, Infrastructure
          </div>
          <div className="flex flex-row gap-2">
            <Link href={"https://github.com/BrunelDev"} target="blank">
              <div className="bg-[#26292B] p-3 rounded-full hover:scale-110 duration-200">
                <Image
                  src={"github.svg"}
                  alt="github icon"
                  width={25}
                  height={25}
                />
              </div>
            </Link>
            <Link href={"https://github.com/BrunelDev"} target="blank">
              <div className="bg-[#26292B] p-3 rounded-full hover:scale-110 duration-200">
                <Image
                  src={"linkedin.svg"}
                  alt="github icon"
                  width={25}
                  height={25}
                />
              </div>
            </Link>
          </div>
          <div>
            <div className="border-2 border-[#313538] rounded-full flex items-center pr-2 gap-2">
              <div className="w-fit p-2 bg-[#26292B] rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <h6 className="text-sm sm:text-base">
                ahokpossibrunel@gmail.com
              </h6>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#1A1D1E] py-16 sm:py-28 px-4 sm:px-0">
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-1/2 mx-auto">
          <div className="text-white flex flex-col gap-5">
            <div>
              <h1 className="font-bold float-left mr-2 sm:text-5xl text-3xl">
                About Me
              </h1>
              <p className="text-gray-400 text-lg text-justify">
                I&apos;m a third-year software engineering student, soon
                graduating, with over two years of hands-on experience building
                modern, scalable, and accessible web applications. I specialize
                in Next.js, React Native, Django, FastAPI, MongoDb and
                PostgreSQL and I love working with Node.js and lightweight
                databases like SQLite.
              </p>
            </div>
            <div className="text-gray-400 text-lg indent-10 text-justify">
              I’ve collaborated on various projects in fast-paced environments,
              always aiming to write clean, efficient code while building solid
              APIs and user-friendly interfaces. Lately, I’ve also been diving
              into DevOps, and I’m especially drawn to system design and
              infrastructure, areas I find both challenging and fascinating.
            </div>
            <div className="text-gray-400 text-lg indent-10 text-justify">
              I’m deeply curious and driven by a strong desire to grow. Right
              now, my top priority is to sharpen my skills and become a
              well-rounded developer, capable of handling critical situations
              with confidence and clarity.
            </div>
            <div className="text-gray-400 text-lg indent-10 text-justify">
              Outside of development, I enjoy competitive programming and
              problem-solving on platforms like CodinGame and LeetCode. I also
              like to relax by reading or playing video games. It’s all about
              keeping the mind sharp and balanced
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center gap-12 mt-10">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2"
              >
                {skill.icon}
                <h6 className="text-[#9BA1A6] text-center">{skill.title}</h6>
              </div>
            ))}

            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2"
              >
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                />
                <h6 className="text-[#9BA1A6] text-center">{skill.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center mt-20 px-4 sm:px-0 pb-20">
        <div className="w-full sm:w-[90%] md:w-[800px] mx-auto  h-fit pl-6">
          <div className="border-l-2 border-[#26292B] -translate-x-[20px] sm:-translate-x-[20px]">
            <div className="-translate-x-[20px]">
              {" "}
              <div data-aos="fade-right">
                <ExperienceComponent
                  title="Web Developer Intern at 3D Tech 💻 - Aug 2024 (2 months)"
                  description="Gained practical experience in web development through hands-on projects. Collaborated with senior developers to implement modern web solutions and best practices in software development."
                  icon={Laptop}
                />
              </div>
              <div data-aos="fade-right">
                <ExperienceComponent
                  title="Software Engineering Student at IFRI 🎓 - Oct 2022 - 2025"
                  description="Currently pursuing a degree in Software Engineering (Génie logiciel) at Institut de Formation et de Recherche en Informatique. Focusing on developing strong programming fundamentals and software architecture principles. Expected graduation in 2025."
                  icon={BookOpen}
                />
              </div>
              <div data-aos="fade-right">
                <ExperienceComponent
                  title="Graduated from Complexe Scolaire privé Bakhita 🎓 - July 2022"
                  description="Successfully completed secondary education and obtained Baccalauréat (BAC), demonstrating strong academic performance and laying the foundation for further studies in technology."
                  icon={GraduationCap}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 px-4 sm:px-0 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full sm:w-[90%] md:w-[800px] mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
      <section className="md:w-[750px] w-[90%] mx-auto">
        <div className="flex flex-col gap-5">
          {achievements.map((achievement, index) => (
            <Achievements
              key={index}
              title={achievement.title}
              source={achievement.source}
              description={achievement.description}
              link={achievement.link}
            />
          ))}
        </div>
      </section>
      <div className="my-8 flex justify-center items-center">
        <h6 className="text-xl text-white ">
          © 2025 BrunelDev. All rights reserved.
        </h6>
      </div>
    </div>
  );
}
