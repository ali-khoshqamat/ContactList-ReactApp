import { NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/" },
  { name: "Add Contact", to: "/add-contact" },
];

const Navigation = () => {
  return (
    <nav className="bg-[#24292f] text-white p-[18px] font-bold flex items-center gap-x-5">
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
      <input
        type="text"
        className="px-2.5 py-1 outline-none bg-inherit border border-solid border-[#57606A] 
        rounded-md text-[#C3C7CB] text-sm font-light placeholder:text-[#C3C7CB] placeholder:text-sm placeholder:font-light"
        placeholder="Search..."
      />
    </nav>
  );
};

export default Navigation;
