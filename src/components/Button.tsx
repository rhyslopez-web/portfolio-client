type ButtonType = {
    label: string
    link?: string
}


const Button = ({label, link} : ButtonType) => {
  return (
    <a href={link}>
        <button className="border border-primary-blue text-primary-blue rounded-full px-4 py-2 backdrop-blur-sm">
            {label}
        </button>
    </a>
  )
}

export default Button