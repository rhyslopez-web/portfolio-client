import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="h-screen bg-primary-blue flex flex-col gap-10 justify-center items-center">
        <div className="text-center">
            <h2 className="text-neutral-200 font-medium text-4xl mb-2">It seems as though you are lost...</h2>
            <p className="text-neutral-200">ps. this is an error page</p>
        </div>
        <Link to="/" className="text-neutral-200 px-5 py-2 border border-neutral-200 rounded-full">Take me back</Link>
    </div>
  )
}

export default ErrorPage