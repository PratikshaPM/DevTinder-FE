import { useSelector } from "react-redux";

const DEFAULT_URL =
  "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png";
const NavBar = () => {
  const user = useSelector((store) => store.user?.data);

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Dev Tinder</a>
      </div>
      <div className="flex-none gap-2">
        {user && <div className="form-control">Welcome, {user.firstName} </div>}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mx-5"
          >
            <div className="w-10 rounded-full ">
              <img
                alt="Tailwind CSS Navbar component"
                src={user?.profileURL || DEFAULT_URL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
