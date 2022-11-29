import { FaTrashAlt, FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const ContactDetail = ({ onDelete }) => {
  const navigate = useNavigate();
  const { name, email, id } = useLocation().state;
  return (
    <div className="w-[40rem]">
      <div className="flex justify-between items-center py-2.5 px-5 mb-2.5 rounded-md bg-gray-100 border-x">
        <div className="flex items-center gap-x-4">
          <FaUserCircle className="text-4xl" />
          <div>
            <p className="font-bold">{name}</p>
            <p>{email}</p>
          </div>
        </div>
        <button onClick={() => (onDelete(id), navigate("/"))}>
          <FaTrashAlt className="w-9 h-9 p-2 text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default ContactDetail;
