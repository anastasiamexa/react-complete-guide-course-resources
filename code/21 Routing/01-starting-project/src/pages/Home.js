import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>Go to <Link to="/products">the list of products</Link></p>
    </>
  );
}
