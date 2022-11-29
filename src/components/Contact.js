import { FaUser, FaUserCircle, FaTrashAlt, FaTrash } from "react-icons/fa";

const Contact = ({ name, email, onDelete }) => {
  return (
    <div className="flex justify-between items-center py-2.5 px-5 mb-2.5 rounded-md bg-gray-100 border-x">
      <div className="flex items-center gap-x-4">
        {/* <FaUser className="border-2 border-solid border-black rounded-full w-10 h-10 pt-1" /> */}
        <FaUserCircle className="text-4xl" />
        <div>
          <p className="font-bold">{name}</p>
          <p>{email}</p>
        </div>
      </div>
      <button onClick={onDelete}>
        <FaTrashAlt className="w-9 h-9 p-2 text-red-600" />
      </button>
    </div>
  );
};

export default Contact;
