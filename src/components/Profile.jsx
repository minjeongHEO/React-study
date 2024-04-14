import Avatar from "./Avatar";

export default function Profile({ image, name, title, isNoob }) {
    return (
        <div className='profile'>
            <Avatar image={image} isNoob={isNoob} />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}
