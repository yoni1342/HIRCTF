import Navbar from "../../components/Nav";
import { images } from "../../assets";
import ProjectCard from "./Components/ProjectCard";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollTop";

export default function Index() {
  return (
    <div>
      <Navbar name="projects" />
      <div className="flex flex-col items-center">
        <h2 className="lg:h1 md:h2 sm:h3 h4 px-3">Projects</h2>
        <p>
          Here, you can explore various
          projects that are available.
        </p>
        <p>
          Discover a wide range of projects covering different domains,
          technologies, and industries.
        </p>
        

        <div className="flex flex-wrap items-center justify-center">
          <ProjectCard title="Market Analysis and Strategy Development" desc="Conduct a comprehensive market analysis for a client in the healthcare industry, including market trends, competitor analysis, and customer preferences. Develop a strategic plan to help the client expand their product offerings and capture a larger market share." img={images.gallery4} />
          <ProjectCard title="Employee Training Program Development" desc="Design and develop a customized training program for a manufacturing company to enhance the skills and knowledge of their workforce. The program will cover areas such as safety protocols, quality control, and operational efficiency, with the goal of improving overall productivity and employee satisfaction." img={images.gallery3} />
          <ProjectCard title="Sustainability Assessment and Recommendations" desc="Perform an in-depth sustainability assessment for a consumer goods company, analyzing their supply chain, manufacturing processes, and waste management practices. Provide recommendations on implementing sustainable initiatives to reduce their environmental impact and enhance their corporate social responsibility efforts." img={images.gallery2} />
          <ProjectCard title="Sustainability Assessment and Recommendations" desc="Perform an in-depth sustainability assessment for a consumer goods company, analyzing their supply chain, manufacturing processes, and waste management practices. Provide recommendations on implementing sustainable initiatives to reduce their environmental impact and enhance their corporate social responsibility efforts." img={images.gallery2} />
          <ProjectCard title="Sustainability Assessment and Recommendations" desc="Perform an in-depth sustainability assessment for a consumer goods company, analyzing their supply chain, manufacturing processes, and waste management practices. Provide recommendations on implementing sustainable initiatives to reduce their environmental impact and enhance their corporate social responsibility efforts." img={images.gallery2} />

          {/* <Courses img={images.gallery2} title ='Positioning & Lead Generation' cretor ='https://assets-global.website-files.com/5d816b07d269382588dbcab1/60cd0f017a96e400add8fdf2_image-profile-chris2-140-min.jpg' name ='Chris Do' price='$699' desc='Build awareness for your services, market to a global audience, and command a price premium through strategic positioning an'  /> */}

        </div>
      </div>
      <Footer />
      <div>
        <ScrollToTop /> 
      </div>
    </div>
  );
}
