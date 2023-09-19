import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaTelegram } from "react-icons/fa";

type Props = {
  departmentName: string;
  des: string;
  nameofhead: string;
  titleofhead: string;
  imageofhead: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    telegram?: string;
  };
};
function Department({
  departmentName,
  des,
  nameofhead,
  titleofhead,
  imageofhead,
  social,
}: Props) {
  return (
    <div className="my-5">
      {/*Name*/}
      <h2 className="h4">{departmentName}</h2>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="my-3 lg:w-[70%] text-justify">
          {/*Description*/}
          <p>{des}</p>
        </div>

        {/*head of dept*/}
        <div>
          {/*image*/}
          <img src={imageofhead} alt="doctor" className="w-[200px] rounded-lg" />
          {/*Name*/}
          <h3> {nameofhead}</h3>
          {/*title*/}
          <p>{titleofhead}</p>
          {/*Social*/}
          <div className="flex items-center space-x-4">
            {social.linkedin && (
              <a href={social.linkedin}>
                <FaLinkedin className="text-primary cursor-pointer hover:text-secondary" />
              </a>
            )}
            {social.twitter && (
              <a href={social.twitter}>
                <FaTwitter className="text-primary cursor-pointer hover:text-secondary" />{" "}
              </a>
            )}
            {social.facebook && (
              <a href={social.facebook}>
                <FaFacebook className="text-primary cursor-pointer hover:text-secondary" />{" "}
              </a>
            )}
            {social.telegram && (
              <a href={social.telegram}>
                <FaTelegram className="text-primary cursor-pointer hover:text-secondary" />{" "}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
