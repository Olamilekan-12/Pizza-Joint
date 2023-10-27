import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ pizza, setPizza, showModal, setShowModal }) => {
  const backdrop = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "200px",
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };
  const restart = () => {
    setShowModal(false);
    setPizza({
      base: "",
      toppings: [],
    });
  };
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="backdrop"
        >
          <motion.div variants={modal} className="modal">
            <p>Want to make another Pizza?</p>
            <Link to={"/"}>
              <button onClick={restart}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

// {
//   showModal && (

//   );
// }
