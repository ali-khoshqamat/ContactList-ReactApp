import { NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/" },
  { name: "Add Contact", to: "/add-contact" },
];

const Navigation = () => {
  return (
    <nav className="bg-[#24292f] text-white p-[18px] font-bold">
      <ul className="flex items-center gap-x-5">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
// 57606A
