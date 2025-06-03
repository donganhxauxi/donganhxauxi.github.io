import { navLinks } from "../../constants/index";
import { useEffect, useState } from "react";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar ${isScrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Dan
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ id, title }) => (
              <li className="group" key={id}>
                <a href={`#${id}`}>
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn group">
          <span className="inner">
            <span>Contact me</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
