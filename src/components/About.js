import DynamicText from "../components/DynamicText";
import CV from "../assets/upload/CV_Bruce-LIOU.pdf";
import banner from "../assets/img/banner.png";

const About = ({ play }) => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center typewriter">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <span>Salut, je m'appelle Bruce. </span>
            <br className="hidden lg:inline-block" />
            <DynamicText />
          </h1>
          <p className="mb-8 leading-relaxed">
            Développeur avec des compétences solides en résolution de problèmes.
            <br></br>
            J'aime les challenges techniques et le travail en équipe dans un
            cadre SCRUM.
          </p>
          <div className="btn-group">
            <a href="#contact" className="btn btn-lg btn-accent">
              Me contacter
            </a>
            <a href="#projects" className="btn btn-lg">
              Voir mon portfolio
            </a>
            <a href={CV} className="btn btn-lg">
              Télécharger mon CV
            </a>
          </div>
          {/*           <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Me contacter
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Voir mon portfolio
            </a>
            <a
              href={CV}
              className="ml-4 inline-flex text-white bg-info border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg"
            >
              Mon CV
            </a>
          </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={banner}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
