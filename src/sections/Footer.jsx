import { FaGithub, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5 bg-black">
      <div className="flex gap-6">
        <a
          href="https://github.com/PGoyal-06"
          target="_blank"
          rel="noreferrer"
          className="social-icon text-white hover:text-gray-400 transform transition-transform duration-300 hover:rotate-180"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/parth-goyal-720485277/"
          target="_blank"
          rel="noreferrer"
          className="social-icon text-white hover:text-gray-400 transform transition-transform duration-300 hover:rotate-180"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/parth__goyal__/"
          target="_blank"
          rel="noreferrer"
          className="social-icon text-white hover:text-gray-400 transform transition-transform duration-300 hover:rotate-180"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://medium.com/@parth082006"
          target="_blank"
          rel="noreferrer"
          className="social-icon text-white hover:text-gray-400 transform transition-transform duration-300 hover:rotate-180"
        >
          <FaMedium size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;