import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { twMerge } from 'tailwind-merge'
import { useScroll, useTransform, motion } from "framer-motion"
import './ProjectPage.css'
import ProjectInterface from "../interface/ProjectPage.interface"
import { Globe, Github } from "lucide-react"

const ProjectPage = () => {
  const params = useParams()

  const initialProject : ProjectInterface = {
    id: 0,
    attributes: {
      Title: "",
      AboutProject: "",
      ProjectGoals: "",
      Description: "",
      FutureImprovements: "",
      WebsiteLink: "",
      GithubLink: "",
      Thumbnail: {
        data: {
          attributes: {
            formats: {
              large: {
                url: ""
              }
            }
          }
        }
      },
      Thumbnail2: {
        data: {
          attributes: {
            formats: {
              large: {
                url: ""
              }
            }
          }
        }
      },
      Thumbnail3: {
        data: {
          attributes: {
            formats: {
              large: {
                url: ""
              }
            }
          }
        }
      },
      skills: {
        data: [
            {
                attributes:{
                    Skill: ""
                }
            }
        ]
      },
    }
  }

  const [project, setProject] = useState(initialProject)

  useEffect(() => {
    const fetchProjects = async () => {
        const response = await fetch(`https://portfolio-strapi-cms-494nt.ondigitalocean.app/api/projects/${params.projectId}?populate=*`)
        const project = await response.json()
        setProject(project.data)
    }
    fetchProjects()

    console.log('This is the project: ' + project)
  }, [params])

  const containerRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ['start start', 'end end']
  })

  
  return (
    // Blue Background
    <div className="lg:h-screen bg-[#2500dd] p-0 lg:p-5"> 

      {/* Main viewport */}
      <div className="bg-[#e5e5e5] h-full lg:overflow-hidden lg:rounded-3xl">

        {/* Paralax image container */}
        <motion.main 
        transition={{
        ease: 'easeInOut'
        }}
        className="lg:rounded-tl-lg lg:rounded-tr-3xl lg:rounded-br-lg lg:rounded-bl-3xl lg:h-screen grid grid-cols-1 lg:grid-cols-2 relative">
          
          <div className="text-primary-blue flex flex-col gap-10 lg:sticky top-0 lg:h-screen p-5 lg:p-14 bg-[#e5e5e5] py-20">
            {/* Project Title */}
            <div className="flex gap-5 flex-col lg:flex-row justify-between lg:items-center">
              <h1 className="text-3xl font-medium">{project.attributes.Title}</h1>


              {/* Live Site and Github button */}
              <div className="flex gap-2">
                <a href={project.attributes.GithubLink} target="_blank" className="h-10 w-10 bg-primary-blue rounded-full flex justify-center items-center">
                  <Github color="#e5e5e5" />
                </a>

                <a href={project.attributes.WebsiteLink} target="_blank" className="h-10 w-10 bg-primary-blue rounded-full flex justify-center items-center">
                  <Globe color="#e5e5e5" />
                </a>
              </div>
            </div>

            {/* Skill pills looped */}
            <ul className="flex flex-wrap gap-3">
              {
              project.attributes.skills ?
              project.attributes.skills.data.map((skill, index) => (
                  <li 
                  className="border border-primary-blue text-primary-blue text-center px-3 py-1 rounded-full lg:w-1/6 text-sm"
                  key={index}>
                    {skill.attributes.Skill}
                  </li>
                  ))
                  :
                  "Loading Data"
            }  
            </ul>

            {/* Mobile Images */}
            <div className="lg:hidden flex flex-col gap-5">
              <img src={project.attributes.Thumbnail.data.attributes.formats.large.url} alt="" />
              <img src={project.attributes.Thumbnail2.data.attributes.formats.large.url} alt="" />
              <img src={project.attributes.Thumbnail3.data.attributes.formats.large.url} alt="" />
            </div>

            {/* Project Description */}
            <motion.div 
            initial={{
              x: -500,
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.7
            }}
            className="text-primary-blue flex flex-col gap-2">
              <h2 className="text-xl font-medium">About {project.attributes.Title}</h2>
              <p>{project.attributes.AboutProject}</p>
            </motion.div>  

            {/*Goals for Project*/}
            <motion.div 
            initial={{
              x: -500,
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.7,
              delay: 0.3
            }}
            className="text-primary-blue flex flex-col gap-2">
              <h2 className="text-xl font-medium">Goals for {project.attributes.Title}</h2>
              <p>{project.attributes.ProjectGoals}</p>
            </motion.div>                   
          </div>
          
          <div id="viewport" ref={containerRef} className="overflow-scroll pb-10 relative hidden lg:flex flex-col">
            <FirstProjectImage 
            src={project.attributes.Thumbnail2.data.attributes.formats.large.url} 
            scrollYProgress={scrollYProgress} />

            <SecondProjectImage 
            src={project.attributes.Thumbnail.data.attributes.formats.large.url} 
            scrollYProgress={scrollYProgress} />

            <ThirdProjectImage 
            src={project.attributes.Thumbnail3.data.attributes.formats.large.url} 
            scrollYProgress={scrollYProgress} />
          </div>

        </motion.main>
      </div>
    </div>
  )
}

export default ProjectPage


// Image components - each one has different animation properties based on the scroll progress
const FirstProjectImage = ({src, className, scrollYProgress} : {src: string, className?: string, scrollYProgress: any}) => {
  const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 0.2])
  return(
    <motion.img
    src={src} 
    className={twMerge('sticky top-0 drop-shadow-2xl' , className)} 
    style={{scale}}
    />
  )
}
const SecondProjectImage = ({src, className, scrollYProgress} : {src: string, className?: string, scrollYProgress: any}) => {
  const scale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 0.2])
  return(
    <motion.img
    src={src} 
    className={twMerge('sticky top-0 drop-shadow-2xl' , className)} 
    style={{scale}}
    />
  )
}
const ThirdProjectImage = ({src, className, scrollYProgress} : {src: string, className?: string, scrollYProgress: any}) => {
  const scale = useTransform(scrollYProgress, [0.9, 1], [0.3, 0.8])
  return(
    <motion.img
    src={src} 
    className={twMerge('sticky top-0 drop-shadow-2xl' , className)} 
    style={{scale}}
    />
  )
}