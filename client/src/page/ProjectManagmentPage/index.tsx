import React from 'react'
import Navbar from '../../components/Nav'
import Footer from '../../components/Footer'
import banner from '../../assets/project-management 1.svg'
import ScrollToTop from '../../components/ScrollTop'
export default function index() {
  return (
    <div>
        <Navbar name='services' path='project'/>

        <div>
        <div>
          {/* <img src={banner} alt="" className="lg:h-[30rem] w-full" /> */}
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="lg:h1 md:h2 sm:h3 h4 px-3">Project design/planning and management</h2>
          <div className="py-10 px-7 leading-8 space-y-5 lg:w-[70%]">
            <p>
            Under Project Cycle Management, HIRCTF under takes entire set of activities related to any type of community project management. Starting with needs assessment HIRCTF facilitates feasibility studies, participatory project design, development of proposals, project implementation support and monitoring and evaluation.
            </p>
            <p>
            HIRCTF’s key project interest falls under the broad mandate of livelihood development, enterprise and economic development, environmental sustainability and good governance. HIRCTF has plan to establish relationships with other peer consultancy firms in almost all African countries to work in collaboration and open branches in these countries to uplift socio-economic conditions of African countries and their people.
            </p>

            <p>
              <strong>Accordingly, HIRCTF</strong>
            </p>
            <p>
            1.Design project and project implementation plans for not-for-profit organisations (both national and international non-government organisation)
            </p>
            <p>
            2. Consult of project management
            </p>
            <p>
                3. Conduct quality assurance
            </p>
            <p>
                4. Conduct business feasibility studies for investment
            </p>
            <p>
                5. Prepare business plan for business organisations
            </p>
            <p>
                6. Conduct business process mapping and reengineering
            </p>
            <p>
                7. Design organisational structure and develop manuals that go along with it such as human resource management manual, financial manual, etc.
            </p>
            <p>
                8. Conduct salary scale study for organisations
            </p>
            <p>
                9. Conduct baseline study
            </p>
            <p>
                10. Conduct performance assessments
            </p>
            <p>
                11. Prepare strategic planning for business and non-business organisations: HIRCTF provides tailor-made solutions to management challenges, from organizational diagnostic review and analysis to strategic management planning for private-for-profit organizations, small and medium size businesses, as well as private-for-non-profit organizations i.e. Non- Governmental Organizations and Civil Societies.   
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <div>
        <ScrollToTop /> 
      </div>

    </div>
  )
}
