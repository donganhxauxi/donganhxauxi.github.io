import { socials } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-col justify-center">
        <div className="socials">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              className="icon"
            >
              <img src={social.imgPath} alt={social.name} className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
