import React, { useState } from "react";
import Modal from "./Modal";

type Props = {
    companyName: string,
    logo: string
    desc: string,
    certificate: string,
  };
function ClientCard({companyName, logo, desc, certificate}:Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex items-center justify-center">
      {/* Logo of client */}
      <div className="w-[30%]">
        <img src={logo} alt="" className="" />
      </div>
      {/* Description */}
      <div className="w-[70%]">
        <h3 className="h4 cursor-pointer hover:underline my-3">{companyName}</h3>
        <p className="font-light">
          {desc}
        </p>
        <div className="btn bg-primary border-primary my-3" onClick={handleOpenModal}>
          View Certificate
        </div>
        <div className="z-10">
          <Modal
            isOpen={isOpen}
            onClose={handleCloseModal}
            image={certificate}
          ></Modal>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
