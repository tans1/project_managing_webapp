import styles from "./style.css"
import lampIcon from './assets/lamp-on.png'

function Writetext() {
    return ( <div className="writetext__container" style={styles}>
        <div>
        <div className = "lamp__conainer">
            <img src={lampIcon} alt="lamp Icon" />
        </div>
        </div>
        
        <div className="thoughtTime">
            Thoughts Time   
        </div>
        <div className="textDetail">
            <span>We don’t have any notice for</span>
            <span> you, till then you can share </span>
            <span>your thoughts with your </span>
            <span>peers.</span>
        </div>
        <div className="writemessage--container">
            <input type="text" placeholder="Write a text" />
        </div>

    </div> );
}

export default Writetext;