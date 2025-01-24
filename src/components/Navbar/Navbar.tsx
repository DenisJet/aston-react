import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="link text-xl hover:opacity-50">
          Movie Search
        </Link>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/favorites" className="text-base">
                Favorites
              </Link>
            </li>
            <li>
              <Link to="/history" className="text-base">
                History
              </Link>
            </li>
            <li>
              <a className="text-base">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
