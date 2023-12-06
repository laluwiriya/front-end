const Splash = () => {
  return (
    <div className="w-96 h-96 relative">
      <img
        className="w-96 h-96 left-0 top-0 absolute"
        src="https://via.placeholder.com/510x900"
      />
      <div className="w-96 left-[74px] top-[575px] absolute text-center text-white text-2xl font-bold font-['Manrope']">
        An application that will make your gift sending experience even more
        memorable
      </div>
      <img
        className="w-72 h-24 left-[106px] top-[286px] absolute"
        src="https://via.placeholder.com/299x93"
      />
    </div>
  );
};
export default Splash;
