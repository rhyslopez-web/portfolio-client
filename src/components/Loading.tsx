import { AnimatePresence, motion } from 'framer-motion'

const Loading = () => {
  return (
    <AnimatePresence>
        <motion.div
        initial={{
            scale: 1,
            opacity: 1
        }} 
        exit={{
            opacity: 0
        }}
        className='h-screen bg-[#2500dd] flex justify-center items-center'>
            <h1 className='text-4xl font-semibold'>Loading Data...</h1>
        </motion.div>
    </AnimatePresence>
  )
}

export default Loading