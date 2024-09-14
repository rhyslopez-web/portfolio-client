import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import './Projects.css'

const Projects = () => {
  type projectsType = {
    id: number,
    attributes: {
        ProjectId: number,
        Title: string,
        Description: string,
        Thumbnail: {
            data: {
                attributes: {
                    formats: {
                        small: {
                            url: string
                        }
                    }
                }
            }
        },
        Thumbnail2: {
            data: {
                attributes: {
                    formats: {
                        small: {
                            url: string
                        }
                    }
                }
            }
        },
        Thumbnail3: {
            data: {
                attributes: {
                    formats: {
                        small: {
                            url: string
                        }
                    }
                }
            }
        },
        skills: {
            data: [
                {
                    attributes:{
                        Skill: string
                    }
                }
            ]
        }

    }
  }

  const [projects, setProjects] = useState<projectsType[]>([])  

  useEffect(() => {
    const fetchProjects = async () => {
        const response = await fetch('https://portfolio-strapi-cms-494nt.ondigitalocean.app/api/projects?populate=*')
        const projects = await response.json()
        setProjects(projects.data)
    }
    fetchProjects()
  }, [])  


  return (
    <div className="lg:px-40 mt-20 mb-20 grid lg:grid-cols-2 md:grid-cols-2 gap-10 px-5 md:px-20">
        {projects.map((project, index) => (
            <Link to={`/project/${project.id}`}>
            <div className={project.id % 2 === 0 ? 'lg:mt-20 md:mt-40 space-y-5' : 'space-y-5'} key={index}>
                <span className="text-4xl font-primaryRegular text-primary-blue">0{project.attributes.ProjectId}</span>
                {/* Image grid container */}
                <div 
                className='aspect-square bg-project-grid bg-contain relative flex flex-col items-center justify-center'>
                    <motion.div
                    layout
                    initial={{rotate: '5deg' }}
                    whileHover={{ 
                        gap: "50px",
                        rotate: '-5deg',
                        // scale: 1.1
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut'
                    }}

                    className="w-5/6 lg:w-4/6 image-container -space-y-20 flex flex-col gap-[-10px] drop-shadow-2xl"

                    >
                        <motion.img 
                        src={project.attributes.Thumbnail.data.attributes.formats.small.url} 
                        className="drop-shadow-2xl" 
                        alt="" 
                        />    

                        <img src={project.attributes.Thumbnail2.data.attributes.formats.small.url} 
                        className="hidden lg:flex drop-shadow-2xl"
                        alt="" 
                        />

                        <img src={project.attributes.Thumbnail3.data.attributes.formats.small.url} 
                        className="hidden lg:flex drop-shadow-2xl" 
                        alt="" 
                        /> 
                    </motion.div>
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-medium text-primary-blue">{project.attributes.Title}</h2>
                    <p className="text-primary-blue">{project.attributes.Description}</p>
                </div>

                <ul className="flex flex-wrap gap-3 w-full">
                    {project.attributes.skills.data.map((skill,index) => (
                        <li key={index} className="border border-primary-blue text-primary-blue text-center px-3 py-1 rounded-full lg:w-1/6 text-sm">
                            {skill.attributes.Skill}
                        </li>
                    ))}
                </ul>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default Projects