import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="md:flex justify-between mb-[32px]">
      <h1>Knowledge Cafe</h1>

      <img src={profile} alt="profile" />
    </div>
  );
};

export default Header;
