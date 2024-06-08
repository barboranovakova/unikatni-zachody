export const TopImage = ({ img, name }) => {
  return (
    <>
      <div className="container-img">
        <img src={img} alt={name} />
      </div>
    </>
  );
};
