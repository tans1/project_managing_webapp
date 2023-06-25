import editIcon from './assets/arrow-square-up.png'
import linkIcon from './assets/link.png'
import styles from './style.css'

function Topic() {
    return ( 
        <div className="topic--container" style={styles}>
            <div className="topic">
                MOBILE APP
            </div>
            <img className='editIcon' src={editIcon} alt="title edit icon" />
            <img className='linkIcon' src={linkIcon} alt="title link icon" />

        </div>
     );
}

export default Topic;