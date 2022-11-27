const AddContact = () => {
  return (
    <div className="">
      <h2 className="font-bold text-lg mb-2.5">Add Contact</h2>
      <form className="flex flex-col justify-between h-48">
        <div className="flex flex-col">
          <label className="text-sm font-bold">Name</label>
          <input
            type="text"
            className="outline-none border border-solid border-gray-300 rounded py-1.5 px-2.5 "
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">Email</label>
          <input
            type="email"
            className="outline-none border border-solid border-gray-300 rounded py-1.5 px-2.5 "
            placeholder="Email"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 font-bold text-white w-min py-2 px-5 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
