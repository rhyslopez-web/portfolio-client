import { LinkedinIcon, GithubIcon } from "lucide-react"

const Socials = () => {
  return (
    <ul className="space-y-3 fixed bottom-14 right-14 z-50 hidden lg:flex flex-col">
        <li>
            <a href="https://www.linkedin.com/in/rhyslopez/" target="_blank" className="h-14 w-14 p-1 bg-primary-blue flex justify-center items-center rounded-full text-neutral-100">
                <LinkedinIcon/>
            </a>
        </li>
        <li>
            <a href="https://github.com/rhyslopez-web" target="_blank" className="h-14 w-14 p-1 bg-primary-blue flex justify-center items-center rounded-full text-neutral-100">
                <GithubIcon/>
            </a>
        </li>
    </ul>
  )
}

export default Socials