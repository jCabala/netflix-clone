import { useEffect, useState } from 'react';
import "./styles/Navbar.css"

function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    const logoUrl =
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
  
    const smallWidth = 800;
  
    useEffect(() => {
      window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    }, []);
  
    function handleDropdown() {
      const links = document.querySelector(".navbar__dropdown-links");
  
      if (links.style.display === "none") {
        links.style.display = "block";
      } else {
        links.style.display = "none";
      }
    }
  
    return (
      <div>
        <nav class="navbar">
          <div class="navbar__left-items">
            <img src={logoUrl} alt="" />
  
        
            {windowWidth <= smallWidth && (
              <div class="navbar__dropdown">
                <button class="navbar__link" onClick={handleDropdown}>
                   More
                </button>
              </div>
            )}
  
            {windowWidth > smallWidth && (
              <div class="navbar__links-container">
                <a class="navbar__link" href="#">
                  
                  Main page
                </a>
                <a class="navbar__link" href="#">
                  
                  My list
                </a>
                <a class="navbar__link" href="#">
                  
                  New
                </a>
              </div>
            )}
          </div>
  
          <div class="navbar__right-items">
            <div> S </div>
            <div> N </div>
            <div class="avatar"> </div>
          </div>
        </nav>
        {windowWidth <= smallWidth && (
          <ul class="navbar__dropdown-links">
            <li>
              
              <a class="navbar__link" href="#">
                
                Main page
              </a>
            </li>
            <li>
              
              <a class="navbar__link" href="#">
                
                My list
              </a>
            </li>
            <li>
              
              <a class="navbar__link" href="#">
                
                New
              </a>
            </li>
          </ul>
        )}
      </div>
    );
  };
  

export default Navbar;