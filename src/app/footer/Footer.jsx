import React from "react";

import "./footer.css";
function Footer() {
  return (
    <div>
      <footer>
        <div class="footericons">
          <a href="/" style={{ marginLeft: "20px" }}>
            <img src="social_10096995.png" alt="facebook icon" height={30} />
          </a>
          <a href="/" style={{ marginLeft: "20px" }}>
            <img src="./twitter.svg" height={30} alt="twitter icon" />
          </a>
          <a href="/" style={{ marginLeft: "20px" }}>
            <img height={30} src="./youtube.svg" alt="youtube icon" />
          </a>
          <a href="/" style={{ marginLeft: "20px" }}>
            <img
              height={30}
              src="./instagram.svg"
              alt="insta icon"
            />
          </a>
        </div>
        <div class="footertext">
          Copyright © 2023 All rights reserved | Smart SocietyTM
        </div>
      </footer>
    </div>
  );
}

export default Footer;
