import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uniqueRandom from "unique-random";
import Header from "./header";
import LASC from "./images/LASC.png";
//uuid library wasn't working so I found this uniqueRandom lib. Probably not perfect but allows me to continue on
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const random = uniqueRandom(1, 100);
const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const todoNameRef = useRef();

  // let subtitle;

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedTodos) setTodos(savedTodos);
  }, []);
  //first arg of useEffect is a function
  //second determines when useEffect runs/updates
  //in below case, anytime the todos state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function openModal(){
    setIsOpen(true);
  };

  function closeModal(e) {
    e.stopPropagation();
    console.log('closing modal...')
    console.log('state of modal', modalIsOpen)
    setIsOpen(false);
  };
  

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: random(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
    //this sets input field to empty after storing current value in the name variable, good UI for the app
  }

  function handleClear() {
    const clearTheseTodos = todos.filter((todo) => !todo.completed);
    setTodos(clearTheseTodos);
  }

  //returns number of completed tasks, helper for tasks remaining
  const isCompleted = () => {
    const complete = todos.filter((todo) => todo.completed === true);
    return complete.length;
  };

  function tasksRemaining() {
    const numOfTasks = parseInt(todos.length);
    const complete = parseInt(isCompleted());
    return numOfTasks - complete;
  }

  return (
    <div id="main">
      <Header 
        onRequestClose={closeModal}
        openModal={openModal}
        modalIsOpen={modalIsOpen}
        style={customStyles}
        // afterOpenModal={afterOpenModal}
      />
      <div className="grid-container">
        <div className="input-area">
          <img src={LASC} />
        </div>
        <div className="input-fields">
          <input
            className="center"
            id="main-input"
            ref={todoNameRef}
            type="text"
          />
          <button className="center" onClick={handleAddTodo}>
            {" "}
            Add Todo{" "}
          </button>
          <button className="center" onClick={handleClear}>
            Clear Completed
          </button>
        </div>
        <div className="list-area">
          <div className="side-title">Tasks Remaining</div>
          <TodoList toggleTodo={toggleTodo} currentTodos={todos} />
        </div>

        <div className="tasks-remaining">
          {tasksRemaining() === 1
            ? "1 Task Remaining"
            : tasksRemaining() + " Tasks Remaining"}
        </div>
      </div>
    </div>
  );
}

export default App;
