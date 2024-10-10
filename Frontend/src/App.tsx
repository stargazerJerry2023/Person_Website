import Navbar from '../src/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <section id="home" className="p-12 text-center">
        <h1 className="text-teal-300 text-5xl sm:text-4xl font-mono neon-effect">
          Welcome to My Personal Website
        </h1>
        <p className="text-lg mt-8 text-gray-400">
          I'm a Software Engineer who loves coding, hacking, and stargazing!
        </p>
      </section>

      <section id="about" className="p-12 text-left">
        <h2 className="text-teal-300 text-4xl font-mono neon-effect">About Me</h2>
        <p className="text-lg mt-8 text-gray-400">
          I'm a sophomore studying Computer Science at Boston University...
        </p>
      </section>

      <section id="projects" className="p-12 text-left">
        <h2 className="text-teal-300 text-4xl font-mono neon-effect">Projects</h2>
      </section>

      <section id="contact" className="p-12 text-left">
        <h2 className="text-teal-300 text-4xl font-mono neon-effect">Contact Me</h2>
      </section>
    </div>
  );
};

export default App;



