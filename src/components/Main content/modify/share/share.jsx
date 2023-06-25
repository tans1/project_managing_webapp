import styles from './style.css'
import peopleIcon from './assets/profile-2user.png'
import verticalBar from './assets/Vector 10.png'
import pauseIcon from './assets/pause.png'
import menuIcon from './assets/menu.png'

function Share() {
    return ( 
    <div className='share--container' style={styles}>
        <div className='share'>
            <img src={peopleIcon} alt="peoples icon image" />
            <span>Share</span>
        </div>
        <img src={verticalBar} alt="vertical bar image" />
        <div className='pauseIcon'>
            <img  src={pauseIcon} alt="pause Icon" />
        </div>
        <img className = "menuIcon" src={menuIcon} alt="menu Icon" />
    </div> 
    );
}

export default Share;