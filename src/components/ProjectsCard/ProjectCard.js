import { InfoPill } from "../InfoPill/InfoPill";
import "./ProjectCard.css";

export const ProjectCard = ({
  title,
  description,
  stack,
  image,
  repository,
  deploy,
}) => {
  return (
    <div>
      <div className="card-content">
        <div>
          <h4>{title}</h4>
          <p className="card-description">{description}</p>
          <div className="card-tech">
            {stack?.map((technology) => (
              <InfoPill key={repository} text={technology} />
            ))}
          </div>
          <a href={repository} target="_blank" rel="noreferrer">
            View code
          </a>
          {deploy.length < 1 ? null : (
            <a href={deploy} target="_blank" rel="noreferrer">
              View Deploy
            </a>
          )}
        </div>
      </div>
      <div className="card-img ">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
