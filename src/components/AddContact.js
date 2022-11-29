import { useState } from "react";

const AddContact = ({ onAddContact }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("all fildes are mandatory!");
      return;
    }
    onAddContact(contact);
    setContact({ name: "", email: "" });
  };

  return (
    <div>
      <h2 className="font-bold text-lg mb-2.5">Add Contact</h2>
      <form
        onSubmit={submitFormHandler}
        className="flex flex-col justify-between h-48"
      >
        <div className="flex flex-col">
          <label className="text-sm font-bold">Name</label>
          <input
            type="text"
            className="outline-none border border-solid border-gray-300 focus:ring-1 focus:ring-blue-600 rounded py-1.5 px-2.5"
            placeholder="Name"
            value={contact.name}
            name="name"
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">Email</label>
          <input
            type="email"
            className="outline-none border border-solid border-gray-300 focus:ring-1 focus:ring-blue-600 rounded py-1.5 px-2.5"
            placeholder="Email"
            value={contact.email}
            name="email"
            onChange={changeHandler}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 font-bold text-white w-min py-2 px-5 rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
