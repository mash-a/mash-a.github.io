import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <ul>
        <li>
          <a
            href="https://github.com/mash-a/"
            target="_blank"
            rel="noopener noreferrer"
            className="fab fa-github"
          />
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mariya-mego-vela/"
            className="fab fa-linkedin-in"
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
        <li>
          <a
            href="https://twitter.com/emvu_"
            target="_blank"
            rel="noopener noreferrer"
            className="fab fa-twitter"
          />
        </li>
        <li>
          <a
            href="https://angel.co/mariya-mego-vela"
            className="fab fa-angellist"
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
