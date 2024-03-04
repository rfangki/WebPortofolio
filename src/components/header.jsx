import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img src={Logo} className="w-36" />
          <div className="flex gap-16">
            <a
              href="https://wa.me/085764752896"
              target="_blank"
              className="cursor-pointer"
            >
              <button className="btn btn-md ">Work with me</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
