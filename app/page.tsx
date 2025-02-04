import { ExperienceComponent } from "@/app/_components/experience";
import { Navbar } from "@/app/_components/navbar";
import { ProjectCard } from "@/app/_components/projectCard";
import { Theme } from "@/app/_components/themes";
import {
  BookOpen,
  GraduationCap,
  Laptop,
  LaptopMinimal,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StackIcon from "tech-stack-icons";
import { Achievements } from "./_components/achievements";

export default function Home() {
  const skills = [
    // Frontend
    {
      title: "React",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="reactjs" />,
    },
    {
      title: "Tailwind",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="tailwindcss" />,
    },
    {
      title: "Next.js",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="nextjs" />,
    },
    // Backend
    {
      title: "Node.js",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="nodejs" />,
    },

    {
      title: "DRF",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="django" />,
    },
    // Cloud & Infrastructure
    {
      title: "Firebase",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="firebase" />,
    },
    {
      title: "Appwrite",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="appwrite" />,
    },
    {
      title: "Docker",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="docker" />,
    },
    {
      title: "AWS",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="aws" />,
    },
    {
      title: "Kubernetes",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="kubernetes" />,
    },
    {
      title: "WordPress",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="wordpress" />,
    },
    // Languages
    {
      title: "Kotlin",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="kotlin" />,
    },
    {
      title: "Python",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="python" />,
    },
    {
      title: "JavaScript",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="js" />,
    },
    {
      title: "TypeScript",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="typescript" />,
    },
    // Version Control & Tools
    {
      title: "Git",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="git" />,
    },
    {
      title: "GitHub",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="github" />,
    },
    // Databases
    {
      title: "MongoDB",
      icon: <StackIcon style={{ width: 50, height: 50 }} name="mongodb" />,
    },
  ];
  const otherSkills = [
    { title: "SQLite", icon: "/sqlite.svg" },

    { title: "React Native", icon: "/react-native.svg" },
    { title: "express", icon: "/express.svg" },
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
            <Theme
              title="digital"
              icon={LaptopMinimal}
              color="#F2555A"
              backgroundColor="#3C181A"
            />
            <div className="flex justify-center items-center flex-row space-x-3">
              <Theme
                title="software"
                icon={LaptopMinimal}
                color={"#FF802B"}
                backgroundColor={"#391A03"}
              />
              <Theme
                title="programmer"
                icon={LaptopMinimal}
                color="#3CB179"
                backgroundColor="#0F291E"
              />
            </div>
            <Theme
              title="developer"
              icon={LaptopMinimal}
              color="#369EFF"
              backgroundColor="#10243E"
            />
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
            <Link href={"https://github.com/BrunelDev"}>
              <div className="bg-[#26292B] p-3 rounded-full hover:scale-110 duration-200">
                <Image
                  src={"github.svg"}
                  alt="github icon"
                  width={25}
                  height={25}
                />
              </div>
            </Link>
            <Link href={"https://github.com/BrunelDev"}>
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
                I am a software developer with a passion for creating web
                applications that are engaging, accessible and scalable. I have
                experience in building web applications using modern
                technologies like React, Next.js, TailwindCSS, and Node.js. I am
                also experienced in building APIs using Express.js and MongoDB.
              </p>
            </div>
            <div className="text-gray-400 text-lg indent-10 text-justify">
              Now, with{" "}
              <span className="text-white font-semibold">
                over 7 years of experience as a software developer
              </span>{" "}
              , I&apos;ve had the chance to work in a constantly changing field,
              collaborating with other coding enthusiasts and contributing to
              some amazing projects.
            </div>
            <div className="text-gray-400 text-lg indent-10 text-justify">
              I&apos;m all about the details, whether it&apos;s writing
              efficient code or perfecting a recipe. I believe that paying
              attention to the little things is key to building scalable,
              engaging, and accessible digital experiences.
            </div>
            <div className="text-gray-400 text-lg indent-10 text-justify">
              When I&apos;m not coding, I like to mix things up. You might find
              me strumming my guitar (I&apos;m no rockstar, but it&apos;s fun!),
              reading a good book, going for walks, doing home workouts,
              enjoying a good meal, or learning something new.
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
        <div className="w-full sm:w-[90%] md:w-[800px] mx-auto  h-fit pl-">
          <div className="border-l-2 border-[#26292B] -translate-x-[20px] sm:-translate-x-[20px]">
            <div className="-translate-x-[20px] pt-10">
              {" "}
              <ExperienceComponent
                title="Web Developer Intern at 3D Tech 💻 - Aug 2024 (2 months)"
                description="Gained practical experience in web development through hands-on projects. Collaborated with senior developers to implement modern web solutions and best practices in software development."
                icon={Laptop}
              />
              <ExperienceComponent
                title="Software Engineering Student at IFRI 🎓 - Oct 2022 - 2025"
                description="Currently pursuing a degree in Software Engineering (Génie logiciel) at Institut de Formation et de Recherche en Informatique. Focusing on developing strong programming fundamentals and software architecture principles. Expected graduation in 2025."
                icon={BookOpen}
              />
              <ExperienceComponent
                title="Graduated from Complexe Scolaire privé Bakhita 🎓 - July 2022"
                description="Successfully completed secondary education and obtained Baccalauréat (BAC), demonstrating strong academic performance and laying the foundation for further studies in technology."
                icon={GraduationCap}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 px-4 sm:px-0 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full sm:w-[90%] md:w-[800px] mx-auto">
          <ProjectCard
            image="/portfoliov1.png"
            title="A portfolio"
            description="Introducing Believers Sword , a Bible reading app designed for believers like me. Its open source it's available as open source."
            link="github.com"
          />
          <ProjectCard
            image="/portfoliov2.png"
            title="A portfolio"
            description="Introducing Believers Sword , a Bible reading app designed for believers like me. Its open source it's available as open source."
            link="github.com"
          />
        </div>
      </section>
      <section className="md:w-[750px] w-[90%] mx-auto">
        <div className="flex flex-col gap-5">
          <Achievements
            title="Programming With Python 3.x"
            source="- SimpleLearn"
            description="We learned the fundamentals of Python programming. The course covered essential topics such as data types, control structures, functions, and modules, providing a comprehensive foundation for writing efficient and effective Python code."
            link="https://www.simplilearn.com/skillup-certificate-landing"
          />
          <Achievements
            title="Programming With Python 3.x"
            source="- SimpleLearn"
            description="We learned the fundamentals of Python programming. The course covered essential topics such as data types, control structures, functions, and modules, providing a comprehensive foundation for writing efficient and effective Python code."
            link="https://www.simplilearn.com/skillup-certificate-landing"
          />
          <Achievements
            title="Programming With Python 3.x"
            source="- SimpleLearn"
            description="We learned the fundamentals of Python programming. The course covered essential topics such as data types, control structures, functions, and modules, providing a comprehensive foundation for writing efficient and effective Python code."
            link="https://www.simplilearn.com/skillup-certificate-landing"
          />
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
