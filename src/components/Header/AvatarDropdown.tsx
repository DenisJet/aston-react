// export const AvatarDropdown = () => {
// 	return (
// 	  <div className="dropdown dropdown-end">
// 		<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
// 		  <div className="w-10 rounded-full">
// 			<img
// 			  alt="Tailwind CSS Navbar component"
// 			  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
// 		  </div>
// 		</div>
// 		<ul
// 		  tabIndex={0}
// 		  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
// 		  <li>
// 			<a className="justify-between">
// 			  Profile
// 			  <span className="badge">New</span>
// 			</a>
// 		  </li>
// 		  <li><a>Settings</a></li>
// 		  <li><a>Logout</a></li>
// 		</ul>
// 	  </div>
// 	);
//   };
  


// import { Link, useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../store/store";
import { userActions } from "../../store/user/user.slice";
import { ROUTES } from "../../constants/routes.constants";
import { Link, useNavigate } from "react-router";
// import { Link } from "react-router";

export const AvatarDropdown = () => {
  const jwt = useAppSelector((state) => state.user.jwt);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(userActions.logout());
    navigate(ROUTES.signin);
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="User Avatar" src="/user.svg" />
        </div>
      </div>
      {jwt ? (
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to={ROUTES.favorites} className="text-base">
              Favorites
            </Link>
          </li>
          <li>
            <Link to={ROUTES.history} className="text-base">
              History
            </Link>
          </li>
          <li>
            <a className="text-base" onClick={logout}>
              Logout
            </a>
          </li>
        </ul>
      ) : (
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to={ROUTES.signin} className="text-base">
              Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
