import './style.css';

export default function Card({profilePic, name, user, followers, following}) {
    return (
        <div className="card-profile flex-column">
            <img src={profilePic} className="profilePic"/>
            <div className="user flex-column">
                <h3>{name}</h3>
                <span>{user}</span>
            </div>
            <div className="followData flex-column">
                <p>{followers} seguidores</p>
                <p>{following} seguindo</p>
            </div>
        </div>
    )
}

