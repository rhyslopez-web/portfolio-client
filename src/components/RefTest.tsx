import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"

const RefTest = () => {

    const onClickBox = useRef<HTMLDivElement>(null)

    useGSAP(() => {
      gsap.to(onClickBox.current, {
        rotation: 360,
        duration: 2
      })
    })


  return (
    <div className="box-container h-screen flex justify-center items-center">
        <div ref={onClickBox} className="h-24 w-24 bg-primary-blue text-white">spin</div>
    </div>
  )
}

export default RefTest