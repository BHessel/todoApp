import React from "react";
import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

export default function Header(props) {
    const { openModal, onRequestClose, modalIsOpen, style } = props;
//   let subtitle;
//   const [modalIsOpen, setIsOpen] = useState(false);

//   Modal.setAppElement(document.querySelector('#main'));
//   const openModal = () => {
//     setIsOpen(true);
//   };

  //   const afterOpenModal = () => {
  //     console.log(subtitle)
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#f00";
  //   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

  return (
    <div className="header">
      <div className="title">
        <a
          href="https://opensea.io/collection/lonelyalienspaceclub"
          target="_blank"
        >
          Lonely Alien Todo List
        </a>
      </div>
      <div className="options">
        <ul className="head-links">
          <li>
            <button onClick={openModal}>
              About
              <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={onRequestClose}
                // style={style}
              >
                <h2>Content Inside Modal Test!</h2>
                <button onClick={onRequestClose}>close</button>
              </Modal>
            </button>
          </li>
          <li>
            <a href="https://github.com/BHessel/todoApp" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
      <div className="bs">
        <button onClick={() => alert("Told you it was fake! :)")}>
          Fake Button!
        </button>
      </div>
    </div>
  );
}

//Make left side with logo
//Make right side with Login
//import a cool font?
//make background cool in some way

//for input area, center everything, then:
//hover for buttons to show when highlighted/clicked
//make a small title above the input field, e.g. "add task here"
