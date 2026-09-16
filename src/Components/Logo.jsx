import moiveLogo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex gap-1">
      <img className="w-8 rounded-xl" src={moiveLogo} alt="" />
      <h1> Moive Explorer</h1>
    </div>
  );
};

export default Logo;
