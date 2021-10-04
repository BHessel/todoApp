import React from 'react'


export default function Header() {
    return (
        <div className='header'>
            <div className='title'>
                <a href='https://opensea.io/collection/lonelyalienspaceclub' target='_blank'>Lonely Alien Todo List</a>
            </div>
            <div className='options'>
                <ul className='head-links'>
                    <li>
                        <a href='https://opensea.io/collection/lonelyalienspaceclub' target='_blank'>About
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/BHessel/todoApp' target='_blank'>Github
                        </a>
                    </li>
                </ul>
            </div>
            <div className='bs'>
                <button>Fake Button!</button>
            </div>
        </div>
    )
}

//Make left side with logo
//Make right side with Login (jk, practice app)
//import a cool font?
//make background cool in some way


//for input area, center everything, then:
//hover for buttons to show when highlighted/clicked
//make a small title above the input field, e.g. "add task here"