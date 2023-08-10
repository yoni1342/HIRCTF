import { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image }) => {
  const handleClose = () => {
    onClose();
  };
  useEffect (() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg  m-5 lg:m-40 overflow-scroll">
            <div className="p-4 flex flex-col items-center justify-center   ">
              <button className="absolute top-2 right-2 w-8 h-8 bg-red-400 text-white font-bold text-xl rounded-xl hover:bg-red-500" onClick={handleClose}>
                X
              </button>
              <img src={image} alt='' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
