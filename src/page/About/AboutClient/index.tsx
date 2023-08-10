import React from "react";
import Nav from "../../../components/Nav";
import ClientCard from "./components/ClientCard";
import { images } from "../../../assets";
import ScrollToTop from "../../../components/ScrollTop";
import Footer from "../../../components/Footer";
function Index() {
  return (
    <div>
      <div>
        <Nav name="about" />
      </div>
      <div className="min-h-screen">
        <h2 className="lg:h2 sm:h3 h4 p-3">Our Clients</h2>
        <div className="items-center justify-center m-auto w-[50%]">
          <ClientCard
            desc="In our quest for market research excellence, we embarked on a
          comprehensive journey fueled by curiosity, meticulousness, and a
          passion for uncovering insights. Setting clear objectives and
          designing a tailored research plan, we employed a mix of quantitative
          and qualitative methods to gather data through surveys, interviews,
          and analysis of secondary sources. With a keen eye for patterns and
          trends, we meticulously analyzed the data, drawing actionable insights
          that shaped our strategic decision-making process."
            certificate={images.blog2}
            logo={images.logo1}
            companyName="Black Rock"
          />

          <ClientCard
            desc="In our quest for market research excellence, we embarked on a
          comprehensive journey fueled by curiosity, meticulousness, and a
          passion for uncovering insights. Setting clear objectives and
          designing a tailored research plan, we employed a mix of quantitative
          and qualitative methods to gather data through surveys, interviews,
          and analysis of secondary sources. With a keen eye for patterns and
          trends, we meticulously analyzed the data, drawing actionable insights
          that shaped our strategic decision-making process."
            certificate={images.consultancy_service}
            logo={images.logo2}
            companyName="Foo"
          />
        </div>
      </div>
      <Footer />
      <div>
        <ScrollToTop /> 
      </div>
    </div>
  );
}

export default Index;
