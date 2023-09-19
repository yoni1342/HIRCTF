import React, { useState } from "react";
import Modal from "./Modal";

type Props = {
  title: string,
  desc: string,
  img: string,
};

function ProjectCard({title, desc, img}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl  lg:w-[50rem] m-4">
      <img
        src={img}
        alt="Album"
        className="lg:w-[50%] object-cover"
      />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-4">{desc}</p>

        <div className="card-actions justify-end">
          <button className="btn bg-primary border-primary" onClick={handleOpenModal}>
            See More
          </button>
        </div>
      </div>
      <div className="z-10">
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          title={title}
          description={desc}
        >
        </Modal>
      </div>
    </div>
  );
}

export default ProjectCard;
