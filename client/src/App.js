import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {

  const[darkMode, setDarkMode] = useState(false);

  const [projects, setProjects] = useState([
  {
    _id: 1,
    title: "Portfolio Website",
    description: "This is my MERN portfolio project",
    githubLink: "https://github.com/",
    liveDemo: "https://google.com"
  }
]);
const [name, setName]=useState("");
const [email, setEmail]=useState("");
const [message, setMessage]=useState("");

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    await axios.post(
      "http://localhost:5000/api/contact",
      {
        name,
        email,
        message
      }
    );

    alert("Message Sent Successfully");

    setName("");
    setEmail("");
    setMessage("");

  } catch (error) {

    console.log(error);

  }

};

  useEffect(() => {

    axios.get('http://localhost:5000/api/projects')
    .then((res) => {
      setProjects(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  }, []);

  return (
    <div style={{ 
      padding: "20px",
      backgroundColor:darkMode?"#121212":"#f4f4f4",
      color:darkMode?"white":"black",
      minHeight:"100vh",
      transition:"0.3s"
    }}>

      <Navbar/>
      <button
  onClick={() => setDarkMode(!darkMode)}
  style={{
    padding: "10px 15px",
    marginTop: "20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: darkMode ? "white" : "black",
    color: darkMode ? "black" : "white"
  }}>
  {darkMode ? "Light Mode" : "Dark Mode"}
</button>

      <Home/>
      <div id="about">
        <h2>About Me</h2>
        <p>I am a MERN Stack Developer</p>
      </div>
      <div id="skills">
       <h2>Skills</h2>
       <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React JS</li>
        <li>Node JS</li>
        <li>MongoDB</li>
        </ul> 
      </div>
      <div id="projects">
        <h2>Projects</h2>
  

      {projects.map((project) => (

        <div key={project._id} className="project-card">
        

          <h2>{project.title}</h2>

          <p>{project.description}</p>
          <div style={{marginTop: "15px"}}>

          <a href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration:"none",
            backgroundColor:"#00adb5",
            color:"white",
            padding:"8px 15px",
            borderRadius:"5px",
            marginRight:"10px"

          }}>
            GitHub
          </a>

          <a href={project.liveDemo}
           target="_blank"
          rel="noreferrer"
          style={{
            textDecoration:"none",
            backgroundColor:"black",
            color:"white",
            padding:"8px 15px",
            borderRadius:"5px",

          }}>
            Live Demo
          </a>
          </div>

        </div>

      ))}
      </div>
      <div id="contact">

  <h2>Contact Me</h2>

  <form onSubmit={handleSubmit}
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      maxWidth: "400px"
    }}
  >

    <input
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
    />

    <input
      type="email"
      placeholder="Your Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    />

    <textarea
      placeholder="Your Message"
      rows="5"
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
    ></textarea>

    <button
      type="submit"
      style={{
        backgroundColor: "#00adb5",
        color: "white",
        padding: "12px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      Send Message
    </button>

  </form>

</div>

    </div> 
    
  );
  
}

export default App;