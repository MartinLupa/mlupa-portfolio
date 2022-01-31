import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      Martín Lupa - Jan 2022
      <div className="icons-container">
        <a
          className="icon linkedin-icon"
          href="https://www.linkedin.com/in/martin-lupa/"
        >
          <LinkedInIcon fontSize="small" />
        </a>
        <a
          className="icon linkedin-icon"
          href="https://www.github.com/MartinLupa"
        >
          <GitHubIcon fontSize="small" />
        </a>
      </div>
    </footer>
  );
};
