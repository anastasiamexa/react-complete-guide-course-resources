import { Link } from "react-router-dom";
import classes from "./Post.module.css";

export default function Post({ id, name, text }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{name}</p>
        <p className={classes.text}>{text}</p>
      </Link>
    </li>
  );
}
