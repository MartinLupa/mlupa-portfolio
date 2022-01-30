import "./ProjectCard.css";

export const ProjectCard = ({ img }) => {
  return (
    <div>
      <div className="card-container ">
        <img src={img} alt="" />
      </div>
    </div>
  );
};
