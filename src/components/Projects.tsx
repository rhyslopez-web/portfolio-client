import { useEffect, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


const Projects = () => {

  type projectsType = {
    id: number,
    attributes: {
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

//   const mouseEnterEffect = () => {
//     gsap.to('#main-image', {
//         xPercent: 0
//     })
//   }

//   const mouseLeaveEffect = () => {
//     gsap.to('#main-image', {
//         xPercent: -100
//     })
//   }


  
  return (
    <div className="lg:px-40 mt-20 grid lg:grid-cols-2 md:grid-cols-2 gap-10 px-5 md:px-20">
        {projects.map((project, index) => (
            <div className={project.id % 2 === 0 ? 'lg:mt-20 md:mt-40 space-y-5' : 'space-y-5'} key={index}>
                <span className="text-4xl font-primaryRegular text-primary-blue">0{project.id}</span>

                {/* Image grid container */}
                <div 
                className='aspect-square bg-project-grid bg-contain relative flex flex-col justify-center'>
                    <img src={project.attributes.Thumbnail.data.attributes.formats.small.url} 
                    className="absolute w-5/6 z-20 inset-x-0 mx-auto inset-y-0 my-auto" 
                    alt="" 
                    id="main-image"
                    // onMouseEnter={mouseEnterEffect}
                    // onMouseLeave={mouseLeaveEffect}
                    />    

                    <img src={project.attributes.Thumbnail2.data.attributes.formats.small.url} 
                    className="absolute w-5/6 z-10 inset-x-0 mx-auto mb-40"
                    alt="" 
                    />    

                    <img src={project.attributes.Thumbnail3.data.attributes.formats.small.url} 
                    className="absolute w-5/6 z-0 inset-x-0 mx-auto mt-40" 
                    alt="" 
                    />    
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-medium text-primary-blue">{project.attributes.Title}</h2>
                    <p className="text-primary-blue">{project.attributes.Description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Projects