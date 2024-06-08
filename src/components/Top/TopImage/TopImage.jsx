export const TopImage = ({ img, name }) => {
  return (
    <>
      <div class="container-img">
        <img src={img} alt={name} />
      </div>
    </>
  );
};
