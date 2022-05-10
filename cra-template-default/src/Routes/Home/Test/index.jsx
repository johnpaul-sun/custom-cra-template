import React from "react";
import * as Component from "../../Components";
import Image from "../../Assets/Images/impaulintech-vr.png";
import "./main.css";
import "../../Assets/Styles/index.css";

export default function Main() {
  return (
    <>
      <div className="main-body">
        <Component.Header />
        <div className="container">
          <div className="left-column">
            <img src={Image} alt="impaulintect-vr" />
          </div>
          <div className="right-column">
            <h1>
              Hi
              <br />
              ImPaulinTech
              <br />
              and I tell computers what to do.
            </h1>
            <p>
              Welcome to my <strong>default</strong> custom CRA-Template at...
              <br />
              <strong>{window.location.host}</strong>
            </p>
            <p>
              This is a customized <strong>"create-react-app"</strong> template.
              I modified the folder structure to make file handling more
              manageable and to save time when setting it up.
            </p>
            <div>
              <p>Checkout more of my custom templates.</p>
              <p>
                &gt;&nbsp;
                <a
                  href="https://www.npmjs.com/package/cra-template-impaulintech"
                  target="_new"
                >
                  npx create-react-app --template impaulintech
                </a>
              </p>
              <p>
                &gt;&nbsp;
                <a
                  href="https://www.npmjs.com/package/cra-template-impaulintech-redux"
                  target="_new"
                >
                  npx create-react-app --template impaulintech-redux
                </a>
              </p>
              <p>
                &gt;&nbsp;
                <a
                  href="https://www.npmjs.com/package/cra-template-impaulintech-useContext"
                  target="_new"
                >
                  npx create-react-app --template impaulintech-useContext
                </a>
              </p>
            </div>
          </div>
        </div>
        <Component.Footer />
      </div>
    </>
  );
}
