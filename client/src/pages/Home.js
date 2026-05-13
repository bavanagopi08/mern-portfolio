import profile from "../assets/profile.jpg";
function Home() {
return(
    <div style={{ padding: "80px 20px" }}>

  <h1 style={{ fontSize: "50px", marginBottom: "10px", color:"inherit" }}>
    Hi, I'm Bavanasri 👋
  </h1>

 
    <h2 style={{color:"#00adb5"}}>
        MERN Stack Developer
    </h2>



  <p>
    I build responsive full stack web applications.
  </p>
  <a
  href="/resume.pdf"
  download
  style={{
    display: "inline-block",
    marginTop: "20px",
    backgroundColor: "#00adb5",
    color: "white",
    padding: "12px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold"
  }}
>
  Download Resume
</a>
<img 
src={profile}
alt="profile"
style={{
    width:"250px",
    height:"250px",
    borderRadius:"50%",
    objectFit:"cover",
    marginTop:"30px",
    border:"5px solid #00adb5",
    boxShadow:"0 0 25px #00adb5"
    
}}
/>

</div>
);
}
export default Home;