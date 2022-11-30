import { useState } from "react";
import { FaRegEdit, FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteContact, putContact } from "../services/CRUDContactService";

const ContactDetail = ({ onPutContact }) => {
  // const params = useParams();
  const navigate = useNavigate();
  const { name, email, id } = useLocation().state;
  const [contact, setContact] = useState({ name, email, id });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const deleteHandler = async (id) => {
    try {
      await deleteContact(id);
      toast.success("Contact was Deleted :)");
      navigate("/");
    } catch (error) {
      toast.error("there is an Error!");
    }
  };
  const editContactHandler = async (id, contact) => {
    try {
      await putContact(id, contact);
      toast.success("Cantact Updated :)");
      navigate("/");
    } catch (error) {
      toast.error("there is an Error!");
    }
  };

  return (
    <div className="w-[40rem]">
      <div className="flex justify-between items-center py-2.5 px-5 mb-2.5 rounded-md bg-gray-100 border">
        <div className="flex items-center gap-x-4">
          <FaUserEdit className="text-4xl" />
          <div className="flex flex-col">
            <input
              className="outline-none font-bold bg-inherit"
              type="text"
              name="name"
              value={contact.name}
              placeholder={name}
              onChange={changeHandler}
            />
            <input
              className="outline-none bg-inherit checked:bg-red-600 "
              type="email"
              name="email"
              value={contact.email}
              placeholder={email}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="flex gap-x-1.5">
          <button onClick={() => editContactHandler(id, contact)}>
            <FaRegEdit className="w-9 h-9 p-1.5 text-green-600" />
          </button>
          <button onClick={() => deleteHandler(id)}>
            <FaTrashAlt className="w-9 h-9 p-2 text-red-600 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
