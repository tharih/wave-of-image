import "../gallery/gallery.css";
import { AnimatePresence, motion } from "framer-motion";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
const VideoModal = ({ closeModal, linkVideo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="video_box"
    >
      <span className="dismiss" onClick={closeModal}>
        <AiOutlineCloseCircle className="close_btn_video" />
      </span>
      {/* <Video
        autoPlay
        loop
        muted
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        poster="http://sourceposter.jpg"
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source src="http://sourcefile.webm" type="video/webm" />
      </Video> */}
      <iframe
        width="90%"
        height="700"
        src={linkVideo}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </motion.div>
  );
};

export default VideoModal;
