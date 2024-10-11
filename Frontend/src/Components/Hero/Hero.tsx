import TextMotionAnimation from "../Animation/Animation";


const Hero = () => {
  
  return(
      <section id="hero" className="w-full py-32 lg:py-[14.1rem] flex justify-center items-center text-main-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto mb-40">
          <TextMotionAnimation ClassName="text-center">
            <h1 className="text-7xl md:text-9xl lg:text-[150px] font-Libre-Baskerville font-bold">Hey I'm</h1>
            <h1 className="text-7xl md:text-9xl lg:text-[150px] font-Libre-Baskerville italic">Jerryyy!</h1>
          </TextMotionAnimation>
        </div>
      </section>
  )
}

export default Hero;