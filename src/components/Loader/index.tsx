type LoaderProps = {
  message?: string;
};

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <div
        className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"
        role="status"
      ></div>
      {message && <p className="mt-4 text-gray-700">{message}</p>}
    </div>
  );
};

export default Loader;
