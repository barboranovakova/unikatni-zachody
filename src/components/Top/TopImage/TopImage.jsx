import './TopImage.css';

export const TopImage = ({ img, name }) => {
  return (
    <>
      <div className="container-img">
        <h4>{name}</h4>
        <img src={img} alt={name} />
      </div>
    </>
  );
};
