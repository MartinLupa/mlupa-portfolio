import "./ProjectCard.css";

export const ProjectCard = ({ img }) => {
  return (
    <div className="card-container">
      <img src={img} alt="" />
    </div>
  );
};
