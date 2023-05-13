const GreeterLayout = () => {
  return (
    <div className="grid place-items-center">
      <h1 className="font-bold text-4xl text-white mb-10">Greeter</h1>
      <form className="grid place-items-center">
        <div className="mb-6">
          <label htmlFor="" className="block mb-2 text-sm font-normal text-white">
            Constructor: Greeter(string memory _greeting)
          </label>
          <input
            type="text"
            id="text"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-0"
            placeholder="A simple string"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Deploy
        </button>
      </form>
    </div>
  );
};

export default GreeterLayout;
