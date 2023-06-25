import searchIcon from './assets/search-normal.png';
import calendar from './assets/calendar-2.png'
import message from './assets/message-question.png'
import notification from './assets/notification.png'
import userimage from './assets/user--image.png'
import arrowdown from './assets/arrow-down.png'
import colorIcon from './assets/colorfilter.png'
import arrowleft from './assets/arrow-left.png'
import { useState, useEffect } from 'react';

import styles from './style.css'

function NavBar({active, changeactive}) {
    const [largeScreen, setLarge] = useState(true);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 880){
            setLarge(false)
          } else{
            setLarge(true);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [window.innerWidth]);


    return ( 
        <nav className='navbar' style={styles}>
            <div className="sidebar--controller" style={active ? {borderRight: "1px solid #DBDBDB"} : {}}>
                {
                    active && <div className='sidebar--controller--front'>
                        <img className='colorIcon' src={colorIcon} alt="color filter icon" />
                        <span>Project M.</span>
                    </div>
                }

                {
                    active ? 
                        <div className='sidebar__expand-icon'>
                            <img  src={arrowleft} alt='left arrow icon' onClick={changeactive}/>
                        </div>:
                        <div className='sidebar__expand-icon'>
                            <span className="material-symbols-outlined" onClick={changeactive}>menu</span>
                            <span onClick={changeactive}>Menu</span>
                        </div>
                }

                

                
            </div>

            <div className="search_container">
                <button><img className='searchIcon' src={searchIcon} alt="search icon" /></button>
                <input type="text" placeholder="Search for anything..." />
            </div>

            <div className='navbar--content'>
                { largeScreen ?
                    <div className="navbar_end">
                        <div className='navbar--end--buttons'>
                            <button><img src={calendar} alt="calendar icon" /></button>
                            <button><img src={message} alt="message icon" /></button>
                            <button><img src={notification} alt="notification icon" /></button>
                        </div>
                        <div className='navbar--user-profile'>
                            <div className='navbar--user-text'>
                                <div className='user-name'>Anima Agrawal</div>
                                <div className='user-address'>U.P, India</div>
                            </div>
                            <div className='navbar--user-image'><img src={userimage} alt="user profile image" /></div>
                            <button><img className='arrowdown' src={arrowdown} alt="" /></button>
                        </div>
                    </div>
                    :
                    <div className="dropdown" style={styles}>
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="material-symbols-outlined" >person</span> 
                        </button>

                        <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#"> 
                                    <div className='navbar--user-text'>
                                    <div className='user-name'>Anima Agrawal</div>
                                    <div className='user-address'>U.P, India</div>
                                </div>
                                <div className='navbar--user-image'><img src={userimage} alt="user profile image" /></div>
                            
                                </a>
                            </li>
                        </ul>
                    </div>
                }
            </div>
            

        </nav>
     );
}

export default NavBar;