import classes from './Post.module.css';

export default function Post({ name, text }) {
    return (
        <div className={classes.post}>
            <h1 className={classes.author}>{name}</h1>
            <h1 className={classes.text}>{text}</h1>
        </div>
    );
}