import addIcon from './assets/add-square.png'
import user1 from './assets/user1.png'
import user2 from './assets/user2.png'
import user3 from './assets/user3.png'
import user4 from './assets/user4.png'
import styles from './style.css'
import disk from './assets/disk.png'


function Users() {
    return ( 
        <div className="users--container" style={styles}>

            <img className='addIcon' src={addIcon} alt="add user icon" />
            <span className='invite'>invite</span>
            <div className="users--image">
                <img src={user1} alt="" />
                <img className='user-image2' src={user2} alt="" />
                <img className='user-image3' src={user3} alt="" />
                <img className='user-image4' src={user4} alt="" />
                <img className='disk' src={disk} alt="" />
                <span>+2</span>
            </div>
        </div>
     );
}

export default Users;