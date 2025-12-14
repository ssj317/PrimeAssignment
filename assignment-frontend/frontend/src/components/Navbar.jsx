import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav>
     
     <button
  onClick={logout}
  style={{
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer"
  }}
>
  Logout
</button>

    </nav>
  );
};

export default Navbar;
