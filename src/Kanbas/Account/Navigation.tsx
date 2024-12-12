import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./AccountNavigation.css"; // External CSS file

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div className="account-navigation">
      <Link
        to="/Kanbas/Account/Signin"
        className="nav-link text-danger"
      >
        Signin
      </Link>
      <Link
        to="/Kanbas/Account/Signup"
        className="nav-link text-danger"
      >
        Signup
      </Link>
      <Link
        to="/Kanbas/Account/Profile"
        className="nav-link text-danger"
      >
        Profile
      </Link>
    </div>
  );
}
