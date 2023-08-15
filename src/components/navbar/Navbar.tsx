import showtimelogo from '../../assets/images/showtimelogo.png'
import './Navbar.scss';
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex-a nav" >
      <div className="flex-c gap-2 logo">
        <img src={showtimelogo} alt="Logo" />
        <span>SHOWTIME</span>
      </div>
      <div className="flex-c navlinks">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Movies</NavLink>
        <NavLink to="/series" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Series</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
