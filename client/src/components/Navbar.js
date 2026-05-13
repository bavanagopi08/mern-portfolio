function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        padding: "15px 20px"
      }}
    >
      <h2 style={{
        margin:0,
        color:"#00adb5",
        fontweight:"bold"
      }}>Bavanasri</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <a href="#home" style={{ color: "white" }}>
          Home
        </a>

        <a href="#about" style={{ color: "white" }}>
          About
        </a>

        <a href="#skills" style={{ color: "white" }}>
          Skills
        </a>

        <a href="#projects" style={{ color: "white" }}>
          Projects
        </a>

        <a href="#contact" style={{ color: "white" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;