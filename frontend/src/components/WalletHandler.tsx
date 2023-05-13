const WalletHandler = () => {
  const handleClick = async () => {};
  return (
    <div className="absolute top-5 right-5">
      <button
        onClick={handleClick}
        className="text-white outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700"
      >
        Connect
      </button>
    </div>
  );
};

export default WalletHandler;
