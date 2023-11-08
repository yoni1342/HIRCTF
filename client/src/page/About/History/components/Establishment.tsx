import React from "react";
import { images } from "../../../../assets";
export default function Establishment() {
  return (
    <div className="my-4">
      <div className="flex flex-col justify-center items-center">
        <h2 className="lg:h2 sm:h3 h4 px-3">Establishment of HIRCTF</h2>
        <div className="py-10 px-7 leading-8 space-y-5 lg:w-[50%]">
          <p>
            Mr. Tamiru Demeke established HORN with aim of expanding the
            consultancy, research and training services to all African nations
            to make a contribution for establishment of robust economic
            integration amongst these nations for the overall growth of the
            continent, to use the untapped opportunities which are prevailing in
            Africa by offering fantastically certified and professional
            consulting services, conduct research and provide training on
            various topics.
          </p>
          <p>
            HORN has three main departments namely research, consultancy and
            training departments. The research department is responsible to
            conduct high quality researches in the areas of social, economic,
            and health economics areas. The consultancy department is
            responsible in providing consultancy services in varies areas in
            accordance to the interest of clients. The training department is
            also responsible to provide trainings in areas that clients required
            training.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="lg:h2 sm:h3 h4 px-3">
          Organizational Structure of HORN
        </h2>
        <div className="py-10 px-7 leading-8 space-y-5 lg:w-[50%]">
          <p>
            HORN is structured as a two-tier organization that has three core
            business processes and two support business processes. The three
            core processes deal with activities directly related to the mission
            of the company, including consultancy, training &amp; capacity
            building, and research and publication. The corresponding business
            processes are: (1) Consultancy business process, (2) Training and
            capacity building business process, (3) Research and publication
            business process, and (4) the Regional and International Affairs
            business process. On the other hand, the two support business
            processes were designed to provide relevant support for the core
            businesses and create synergy for the company’s effort of achieving
            its goals and/or accomplish its mission successfully. These business
            processes include: (1) Corporate Planning and Business Development
            process, and (2) Finance and Administration process. Each business
            process is led by a manager who is accountable to the General
            Manager of the company. The structure is found to be very suitable
            for HORN to carry out its duties and realize its mission.
          </p>
        </div>
        <img src={images.companyStructer} alt="" />
      </div>
    </div>
  );
}
