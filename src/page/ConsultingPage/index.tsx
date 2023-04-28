import React from "react";
import Navbar from "../../components/Nav";
import { images } from "../../assets";
import banner from "../../assets/banner con.svg";
import Footer from '../../components/Footer'

export default function index() {
  return (
    <div>
      <Navbar name="services" path="consulting" />

      <div>
        <div>
          <img src={banner} alt="" className="w-full" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="lg:h1 md:h2 sm:h3 h4 px-3">Consulting Services</h2>
          <div className="py-10 px-7 leading-8 space-y-5 lg:w-[70%]">
            <p>
              HIRCTF is a multi-disciplinary company, which provides consultancy
              services in various fields. HIRCTF is client-focused and aim for
              excellence, relevance and impact in all that it does. Drawing on
              the very best Ethiopian and international expertise, it
              proactively seeks to understand and address each client’s specific
              needs and strategic objectives, and align its consultancy services
              with national and international policies and agendas. This ensures
              that HIRCTF’s consultancy services will have maximum relevance,
              enabling its clients to enhance the impact of their work. Building
              on this, HIRCTF has planned to expand its operations to share its
              expertise and build alliances elsewhere in Africa.
            </p>
            <p>
              HIRCTF applies process-based consultancy approach whereby our
              consultants work with clients to instill commitment to change and
              problem-solving process, bolster creative thinking, build the
              necessary capacity and design structured programs that move the
              organization/institution from its current state to the desired
              future state (i.e., fulfil its dream). Accordingly, HIRCTF
            </p>

            <p>
              1. provides complete consulting services to all interested parties
              (private companies, NGO’s, universities etc) and assists in the
              technical and financial management on behalf of the funded bodies.
            </p>
            <p>
            2. Conduct surveys that are compatible to the interests of clients using strong team that have demonstrated design, methodological, and statistical knowledge through the implementation of large and complex survey research projects. HIRCTF’s teams of research methodologists have many years of experience in design, data collection, analysis, and reporting. HIRCTF’s statisticians, survey methodologists, project managers, survey analysts and subject matter experts work side-by-side to collect the best possible data and increase each client’s ability to act on survey results. The statistical and methodological experience of our survey research staff is complemented by the depth and breadth of the subject matter knowledge within HIRCTF. In addition to this, HIRCTF supports ITS clients by providing a range of data collection methodologies to address its clients most pressing questions. HIRCTF survey teams offer expertise across all data collection modes, such as telephone, mail, web, in-person, and mixed-mode designs. HIRCTF collect data offline on tablets, online using web-interface, capture phone interviews, and conduct cost efficient mixed mode surveys. Our data collection personnel are trained to work with difficult-to-reach, multilingual populations and sensitive topics.
            </p>
            <p>
            3. Health data management including design of data collection tools, database design, analysis and interpretation.
            </p>
            <p>
                4. Conceptual development and implementation of community-based health interventions.
            </p>
            <p>
                5. Preparation of annual and periodic reports of projects/program.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
