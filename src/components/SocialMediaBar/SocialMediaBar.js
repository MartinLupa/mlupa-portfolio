import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./SocialMediaBar.css";

export const SocialMediaBar = () => {
  return (
    <div className="socialmediabar-container">
      <div className="spacing-bar"></div>

      <a href="https://www.linkedin.com/in/martin-lupa/" target="_blank">
        <LinkedInIcon className="linkedin-icon" />
      </a>
      <a href="https://github.com/MartinLupa/" target="_blank">
        <GitHubIcon className="github-icon" />
      </a>
      <a
        href="https://www.instagram.com/martin.lupa.groppelli/"
        target="_blank"
      >
        <InstagramIcon className="instagram-icon" />
      </a>
    </div>
  );
};
