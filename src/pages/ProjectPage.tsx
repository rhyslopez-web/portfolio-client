// import { useEffect, useState } from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const ProjectPage = () => {
  const params = useParams()
  console.log(params)

  interface ProjectInterface {
    id: number,
    attributes: {
      Title: string,
      Description: string
    }
  }

  const initialProject : ProjectInterface = {
    id: 0,
    attributes: {
      Title: "",
      Description: ""
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
        <div id="viewport" 
        className="h-full bg-[#e5e5e5] lg:rounded-tl-lg lg:rounded-tr-3xl lg:rounded-br-lg 
        lg:rounded-bl-3xl overflow-scroll overflow-x-hidden relative">
        
        <h1>{project.attributes.Title}</h1>

        </div>
    </div>
  )
}

export default ProjectPage