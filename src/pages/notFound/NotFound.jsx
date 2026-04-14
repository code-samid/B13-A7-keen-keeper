import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center p-20">
      <h1 className="text-4xl">Page Not Found</h1>
      <Link to="/" className="btn mt-4">Go Home</Link>
    </div>
  );
}