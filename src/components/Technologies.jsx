import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion"; 

const iconVariants = (duration) =>({
        initial: {y: -10},
        animate: {
                y:[10, -10],
                transition: {
                        duration: duration,
                        case: "linear",
                        repeatType: "reverse",
                }, 
        },
});


const Technologies = () => {
  return(
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{ opacity: 1, y:0}}
        initial={{opacity:0 ,y: -100}}
        transition={{duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        
        <motion.div 
        whileInView={{ opacity: 1, x:0}}
        initial={{opacity:0 ,x: -100}}
        transition={{duration: 1.5 }}
        className="flex flex-wrag items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5) }
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-4">
<RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
         variants={iconVariants(3) }
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
<TbBrandNextjs className="text-7xl" />
        </motion.div>
         <motion.div 
          variants={iconVariants(5) }
          initial="initial"
          animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
<FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
         variants={iconVariants(2) }
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
<FaPhp className="text-7xl " />
        </motion.div>
        <motion.div 
         variants={iconVariants(6) }
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
<SiPython className="text-7xl" />
        </motion.div>
        <motion.div 
         variants={iconVariants(4) }
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
<RiTailwindCssFill className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div 
         variants={iconVariants(3) }
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
<FaJava className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div 
         variants={iconVariants(5) }
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
<SiMysql className="text-7xl " />
        </motion.div>
        
        
        
        </motion.div>
        </div>
  );
};

export default Technologies;
