function BootstrapSection() {
  return (
    <div className="content-card">
      <div className="section-title">Bootstrap Section</div>

      <div className="section-block">
        <h5>🏠 Home</h5>
        <p>
          This portfolio demonstrates the usage of Bootstrap to design
          responsive and professional web layouts.
        </p>
      </div>

      <hr />

      <div className="section-block">
        <h5>👤 About Me</h5>
        <p>
          Computer Science undergraduate with interests in Full Stack
          Development, UI Engineering, and problem solving.
        </p>
      </div>

      <hr />

      <div className="section-block">
        <h5>🎓 Academic Details</h5>
        <p>B.Tech in Computer Science Engineering (AI & ML)</p>
        <span className="badge bg-success px-3 py-2">Undergraduate</span>
      </div>

      <hr />

      <div className="section-block">
        <h5>🛠 Skills</h5>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React & Bootstrap</li>
          <li>Basic Node.js</li>
        </ul>
      </div>

      <hr />

      <div className="section-block">
        <h5>📞 Contact</h5>
        <p>Email: student@cuchd.in</p>
        <p>Phone: +91 XXXXXXXX</p>
      </div>
    </div>
  );
}

export default BootstrapSection;
