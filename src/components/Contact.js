import { FaUserCircle, FaTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div className="flex justify-between items-center py-2.5 px-5 mb-2.5 rounded-md bg-gray-100 border-x">
      <NavLink
        to={`/contact/${id}`}
        className="flex items-center gap-x-4"
        state={contact}
      >
        <FaUserCircle className="text-4xl" />
        <div>
          <p className="font-bold">{name}</p>
          <p>{email}</p>
        </div>
      </NavLink>
      <button onClick={() => onDelete(id)}>
        <FaTrashAlt className="w-9 h-9 p-2 text-red-600" />
      </button>
    </div>
  );
};

export default Contact;
