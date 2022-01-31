import { InfoPill } from "../InfoPill/InfoPill";
import "./ProjectCard.css";

export const ProjectCard = ({ title, description, stack, image }) => {
  return (
    <div>
      <div className="card-content">
        <div>
          <h4>{title}</h4>
          <p className="card-description">{description}</p>
          <div className="card-tech">
            {stack?.map((technology) => (
              <InfoPill text={technology} />
            ))}
          </div>
          <button>View code</button>
        </div>
      </div>
      <div className="card-img ">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
