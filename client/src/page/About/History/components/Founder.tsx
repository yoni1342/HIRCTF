import React from "react";
import { images } from "../../../../assets";
export default function Founder() {
  return (
    <div className="my-4">
      <div className="flex flex-col justify-center items-center">
        <h2 className="lg:h2 sm:h3 h4 px-3">Brief Profile Of The Founder</h2>

        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="p-6">
            <img
              src={images.avatar}
              alt=""
              className="w-60 h-60 object-cover mask mask-squircle bg-primary p-7"
            />
          </div>
          <div className="py-10 px-7 leading-8 space-y-5 lg:w-[40%]">
            <p>
              The founder and Chief Executive Officer of the HORN, Mr. Tamiru
              Demeke, is currently PhD Candidate at Martin-Luther University,
              Halle (Saale), Germany and has two Master degrees in Economics
              (International Trade and Finance) and Project Management as well
              as a bachelor degree in Economics from Addis Ababa University,
              Addis Ababa, Ethiopia. He also took a lot trainings every time
              especially in Health Economics particularly in Health Financing,
              Monitoring and Evaluation, both quantitative and qualitative
              research methods, poverty analysis, financial education, and GET
              Ahead Entrepreneurship, among others. He has a total of over above
              34 years work experiences. During these years, he worked in
              government owned bank, multilateral funding agencies,
              non‐governmental organizations, and academic institutions and
              has extensive knowledge and credentials including strong and
              proven experience in market research; strategic planning;
              monitoring and evaluation and performance assessments;
              organizational design and capacity assessments; context research
              and assessments; business development services and capacity
              building; feasibility studies and business plan development; and
              other specialized services. He also provided training for both
              government and non-government organisation employees on project
              planning, project management, monitoring and evaluation, to
              mention few. For his good performances he was awarded various
              prizes and recommendation letters from all organisations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
