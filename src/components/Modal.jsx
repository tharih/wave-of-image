import "../gallery/gallery.css";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({
  clickedImage,
  handleNext,
  handlePrev,
  setClickedImage,
  closeModal,
  imageData,
  currentIndex,
  animateClass,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImage(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="overlay dismiss"
    >
      <img src={imageData[currentIndex].src} alt="" className={animateClass} />
      <span className="dismiss" onClick={closeModal}>
        <AiOutlineCloseCircle className="close_btn" />
      </span>
      <div
        onDrag={handlePrev}
        onClick={handlePrev}
        className="overlay__arrow overlay__arrow_left"
      >
        <BsChevronLeft className="left_chevron" />
      </div>
      <div onClick={handleNext} className="overlay__arrow overlay__arrow_right">
        <BsChevronRight className="right_chevron" />
      </div>
    </motion.div>
  );
};

export default Modal;
