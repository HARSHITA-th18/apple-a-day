import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold mb-3">
          Access Denied
        </h1>

        <p className="text-gray-600 mb-6">
          You don't have permission to access this page.
        </p>

        <Link
          to="/home"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}