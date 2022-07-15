import React from "react";
import Modal from "react-modal";
import BenDog from './images/bendog.png';

export default function Header(props) {
    const { openModal, onRequestClose, modalIsOpen, style } = props;

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
            <a onClick={openModal}>
              About
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={onRequestClose}
              >
                <h1>Hi, I'm Ben</h1>
                <img src={BenDog} />
                <h4>And that's my dog Callie</h4>
                <p>The other year I was working for a SaaS company in Phoenix, in what became the final stop of my sales career.</p>
                <p>While I had done relatively well in sales, I was sitting with one of our devs in the office one day, and couldn't stop thinking about how much cooler his job was than mine!</p>
                <p>I never learned to code beyond a little HTML when I was younger, but I had always wanted to get my hands dirty.</p>
                <p>One day I finally decided enough was enough, and that if I wasn't going to spend the next 30 years in sales, the time to change was right then.</p>
                <p>Fast forward a bit, and now you get to look at this fancy little modal component, and we can meet in an interview!</p>

                <h4>I look forward to meeting you,</h4>
                <p>Ben</p>


                <button onClick={onRequestClose}>Close</button>
              </Modal>
            </a>
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
