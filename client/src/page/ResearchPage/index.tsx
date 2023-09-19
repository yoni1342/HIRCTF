import React from 'react'
import Navbar from '../../components/Nav'
import Department from '../../components/Departement/departement'
import { images } from '../../assets'
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollTop'

export default function index() {
  return (
    <div>
      <Navbar name="services" path="consulting" />

      <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center py-3">
          <h2 className="lg:h1 md:h2 sm:h3 h4 px-3">Research Services</h2>
          <div className="py-10 px-7 leading-8 space-y-5 lg:w-[60%]">
            <p>
              HORN is a multi-disciplinary company, which provides consultancy
              services in various fields. HORN is client-focused and aim for
              excellence, relevance and impact in all that it does. Drawing on
              the very best Ethiopian and international expertise, it
              proactively seeks to understand and address each client’s specific
              needs and strategic objectives, and align its consultancy services
              with national and international policies and agendas. This ensures
              that HORN’s consultancy services will have maximum relevance,
              enabling its clients to enhance the impact of their work. Building
              on this, HORN has planned to expand its operations to share its
              expertise and build alliances elsewhere in Africa.
            </p>
            <div>
              <h2 className="h4 lg:h2">Departments</h2>
              <div className="">
                <Department
                  departmentName="Department Name"
                  des="          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                  voluptatum, quibusdam, quos, quas voluptates voluptatem quod
                  voluptatibus doloribus quae quia natus. Quisquam voluptatum,
                  quibusdam, quos, quas voluptates voluptatem quod voluptatibus
                  doloribus quae quia natus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam voluptatum, quibusdam, quos, quas
                  voluptates voluptatem quod voluptatibus doloribus quae quia natus.
                  Quisquam voluptatum, quibusdam, quos, quas voluptates voluptatem quod
                  voluptatibus    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                  voluptatum, quibusdam, quos, quas voluptates voluptatem quod
                  voluptatibus doloribus quae quia natus. Quisquam voluptatum,
                  quibusdam, quos, quas voluptates voluptatem quod voluptatibus
                  doloribus quae quia natus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam voluptatum, quibusdam, quos, quas
                  voluptates voluptatem quod voluptatibus doloribus quae quia natus.
                  Quisquam voluptatum, quibusdam, quos, quas voluptates voluptatem quod
                  voluptatibus    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                  voluptatum, quibusdam, quos, quas voluptates voluptatem quod
                  voluptatibus doloribus quae quia natus. Quisquam voluptatum,
                  quibusdam, quos, quas voluptates voluptatem quod voluptatibus
                  doloribus quae quia natus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam voluptatum, quibusdam, quos, quas
                  voluptates voluptatem quod voluptatibus doloribus quae quia natus.
                  Quisquam voluptatum, quibusdam, quos, quas voluptates voluptatem quod
                  voluptatibus    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                  voluptatum, quibusdam, quos, quas voluptates voluptatem quod
                  voluptatibus doloribus quae quia natus. Quisquam voluptatum,
                  quibusdam, quos, quas voluptates voluptatem quod voluptatibus
                  doloribus quae quia natus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam voluptatum, quibusdam, quos, quas
                  voluptates voluptatem quod voluptatibus doloribus quae quia natus.
                  Quisquam voluptatum, quibusdam, quos, quas voluptates voluptatem quod
                  voluptatibus    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                  voluptatum, quibusdam, quos, quas voluptates voluptatem quod
                  voluptatibus doloribus quae quia natus. Quisquam voluptatum,
                  quibusdam, quos, quas voluptates voluptatem quod voluptatibus
                  doloribus quae quia natus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam voluptatum, quibusdam, quos, quas
                  voluptates voluptatem quod voluptatibus doloribus quae quia natus.
                  Quisquam voluptatum, quibusdam, quos, quas voluptates voluptatem quod
                  voluptatibus"
          imageofhead={images.test1}
          nameofhead="Dr Abera Ababe"
          titleofhead="Head of dept"
          social={{ twitter: "#", linkedin: "#" }}
                />
                <Department
                  departmentName="Department Name"
                  des="          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quos, quas voluptates voluptatem quod
          voluptatibus doloribus quae quia natus. Quisquam voluptatum,
          quibusdam, quos, quas voluptates voluptatem quod voluptatibus
          doloribus quae quia natus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam voluptatum, quibusdam, quos, quas
          voluptates voluptatem quod voluptatibus doloribus quae quia natus.
          Quisquam voluptatum, quibusdam, quos, quas voluptates voluptatem quod
          voluptatibus"
          imageofhead={images.test1}
          nameofhead="Dr Abera Ababe"
          titleofhead="Head of dept"
          social={{ twitter: "#", linkedin: "#" }}
                />
                <Department
                  departmentName="Department Name"
                  des="          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quos, quas voluptates voluptatem quod
          voluptatibus doloribus quae quia natus. Quisquam voluptatum,
          quibusdam, quos, quas voluptates voluptatem quod voluptatibus
          doloribus quae quia natus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam voluptatum, quibusdam, quos, quas
          voluptates voluptatem quod voluptatibus doloribus quae quia natus.
          Quisquam voluptatum, quibusdam, quos, quas voluptates voluptatem quod
          voluptatibus"
          imageofhead={images.test1}
          nameofhead="Dr Abera Ababe"
          titleofhead="Head of dept"
          social={{ twitter: "#", linkedin: "#" }}
                />
              </div>
            </div>
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
