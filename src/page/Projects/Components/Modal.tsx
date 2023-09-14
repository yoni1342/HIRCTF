import { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, children }) => {
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
          <div className="relative bg-white rounded-lg shadow-lg h-screen w-screen m-5 lg:m-40 overflow-scroll">
            <div className="p-4 flex flex-col items-center justify-center   ">
              <h2 className="h2 text-xl font-bold mb-2">{title}</h2>
              <p className="text-gray-700 mb-4">{description}</p>
              <button className="absolute top-2 right-2 w-8 h-8 bg-red-400 text-white font-bold text-xl rounded-xl hover:bg-red-500" onClick={handleClose}>
                X
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
