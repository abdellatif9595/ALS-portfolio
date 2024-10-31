import aboutImg from '/src/assets/about.jpg';

import { ABOUT_TEXT } from "../constants";  // Assurez-vous que ABOUT_TEXT est bien défini
import { motion } from "framer-motion"; 

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Titre de la section */}
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      {/* Contenu principal en deux colonnes */}
      <div className="flex flex-wrap">
        {/* Colonne avec l'image */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} // Animation d'entrée
          initial={{ opacity: 0, x: -100 }}   // Initiale hors écran
          transition={{ duration: 1 }}        // Durée de l'animation
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            {/* Assurez-vous que l'image existe et que son nom correspond */}
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        
        </motion.div>

        {/* Colonne avec le texte */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}  // Animation d'entrée
          initial={{ opacity: 0, x: 100 }}    // Initiale hors écran
          transition={{ duration: 1 }}        // Durée de l'animation
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            {/* Texte pris depuis la constante ABOUT_TEXT */}
            <p className="my-2 max-w-xl py-6">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
