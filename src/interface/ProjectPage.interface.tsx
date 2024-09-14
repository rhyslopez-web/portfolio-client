interface ProjectInterface {
    id: number,
    attributes: {
      Title: string,
      AboutProject: string,
      ProjectGoals: string,
      Description: string,
      FutureImprovements: string,
      WebsiteLink: string,
      GithubLink: string,
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
      },
      Thumbnail2: {
        data: {
          attributes:{
            formats:{
              large:{
                url: string
              }
            }
          }
        }
      },
      Thumbnail3: {
        data: {
          attributes:{
            formats:{
              large:{
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
      },
    }
  }

export default ProjectInterface