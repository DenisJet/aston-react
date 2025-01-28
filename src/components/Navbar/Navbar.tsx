import { Link, useNavigate } from "react-router";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { userActions } from "../../store/user.slice";
import { ROUTES } from "../../constants/routes.constants";

export default function Navbar() {
  const jwt = useAppSelector((state: RootState) => state.user.jwt);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(userActions.logout());
    navigate(ROUTES.signin);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to={ROUTES.home} className="link text-xl hover:opacity-50">
          Movie Search
        </Link>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto input-primary"
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="/user.svg" />
            </div>
          </div>
          {!jwt && (
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
          {jwt && (
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
          )}
        </div>
      </div>
    </div>
  );
}
