import "./InfoPill.css";

export const InfoPill = ({ text }) => {
  return (
    <div className="pill-container">
      <p>{text}</p>
    </div>
  );
};
