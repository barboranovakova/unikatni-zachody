import './TopImage.css';

export const TopImage = ({ img, name, onHandleClick }) => {
  return (
    <>
      <div className="container-img">
        <h4>{name}</h4>
        <img src={img} alt={name} />

        <button onClick={onHandleClick} className="showme-btn_image">
          Ukaž mi více
        </button>
      </div>
    </>
  );
};
