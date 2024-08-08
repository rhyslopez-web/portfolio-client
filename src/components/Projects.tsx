import { useEffect, useState } from "react"


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

//   console.log(projects)
    
  return (
    <div className="flex flex-col justify-center lg:flex-row">
        <div className="flex flex-wrap lg:gap-y-20 justify-center items-center mt-20 lg:w-4/5">
            {projects.map((project, index) => (
                <div key={index} className="w-full flex flex-col items-center lg:w-1/2">
                    <div>
                        <div className="aspect-square bg-project-grid flex justify-center items-center bg-contain relative p-20">
                            <img className="shadow-2xl z-50" src={project.attributes.Thumbnail.data.attributes.formats.small.url} alt="" />
                            <img className="rotate-6 shadow-2xl absolute mb-40" src={project.attributes.Thumbnail2.data.attributes.formats.small.url} alt="" />
                            <img className="-rotate-6 shadow-2xl absolute mt-40" src={project.attributes.Thumbnail3.data.attributes.formats.small.url} alt="" />
                        </div>

                        <div className="flex flex-col gap-1 mt-5 w-full">
                            <h2 className="text-primary-blue text-xl font-semibold">{project.attributes.Title}</h2>
                            <p className="text-primary-blue">{project.attributes.Description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects