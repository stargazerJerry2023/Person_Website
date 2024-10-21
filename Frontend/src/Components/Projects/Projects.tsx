import Grid from "../Grid.tsx";
import Card from "../Card.tsx";
import ProjectInfo from "../../utils/CardInfo.tsx"
import SectionAnimations from '../Animation/Section.tsx'





const Projects = () => {
  
  return(
    <section id="projects-section" className="w-full py-40 text-second-color  rounded-b-2xl relative overflow-hidden">

      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-10 mx-5">
        <SectionAnimations>
            <h1 className="font-League-Spartan text-5xl sm:text-9xl font-mono neon-effect">PROJECTS</h1>
            </SectionAnimations>
        </div>
        <Grid>
          {ProjectInfo.map((Projects) => (
          <div className="relative z-20">
              <Card
                projectImg={Projects.projectImg}
                title={Projects.title}
                about={Projects.about}
                technologies={Projects.technologies}
                github={Projects.github}
                website={Projects.website}
              />
            </div>
          ))}
        </Grid>
      </div>
  </section>
  )
}

export default Projects;