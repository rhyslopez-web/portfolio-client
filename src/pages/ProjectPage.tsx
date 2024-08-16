// import { useEffect, useState } from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import CanvasGrid from "../components/GridCanvas"
import Navbar from "../components/Navbar"

const ProjectPage = () => {
  const params = useParams()
  console.log(params)

  interface ProjectInterface {
    id: number,
    attributes: {
      Title: string,
      Description: string,
      Thumbnail: {
        data: {
          attributes:{
            formats:{
              large:{
                url: string
              }
            }
          }
        }
      }
    }
  }

  const initialProject : ProjectInterface = {
    id: 0,
    attributes: {
      Title: "",
      Description: "",
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
      }
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
  }, [])  

  return (
    <div className="h-screen lg:p-5 bg-[#2500dd] overflow-hidden">
        <Navbar/>
        <div id="viewport" 
        className="h-full bg-[#e5e5e5] lg:rounded-tl-lg lg:rounded-tr-3xl lg:rounded-br-lg 
        lg:rounded-bl-3xl overflow-scroll overflow-x-hidden relative lg:pl-40 lg:pr-5 md:px-20 px-5
        flex flex-col gap-10"
        >
        
        <div className="flex flex-col gap-2 text-primary-blue">
          <h1 className="text-2xl font-medium mt-20">{project.attributes.Title}</h1>
          <p>{project.attributes.Description}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:flex justify-center items-center">
            <CanvasGrid/>
          </div>

          <img 
          src={project.attributes.Thumbnail.data.attributes.formats.large.url} 
          alt="" 
          className="lg:absolute lg:w-4/6 inset-x-0 mx-auto inset-y-0 my-auto
          drop-shadow-2xl"
          />
        </div>


        </div>
    </div>
  )
}

export default ProjectPage