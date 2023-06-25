import styles from './style.css'
import category from './assets/category.png'
import addIcon from './assets/add-square.png'

import messageIcon from './assets/message.png'
import membersIcon from './assets/profile-2user.png'
import settingsIcon from './assets/setting-2.png'
import taskIcon from './assets/task-square.png'
import Writetext from './writetext'

function SideBar() {
    return ( 
        <div className="sidebar" style={styles}>
            <div className="sidebar__part1">
                <ul>
                    <li>
                        <img src={category} alt="Home Icon" />
                        <div>Home</div>
                    </li>
                    <li>
                        <img src={messageIcon} alt="Message Icon" />
                        <div>Messages</div>
                    </li>
                    <li>
                        <img src={taskIcon} alt="task Icon" />
                        <div>Tasks</div>
                    </li>
                    <li>
                        <img src={membersIcon} alt="members Icon" />
                        <div>Members</div>
                    </li>
                    <li>
                        <img src={settingsIcon} alt="Settings Icon" />
                        <div>Settings</div>
                    </li>
                </ul>
            </div>

            <div className='horizontal-break'></div>
            <div className='sidebar__part2'>
                <div className='add--project'>
                    <div>my projects</div>
                    <button><img src={addIcon} alt="add project Icon" /></button>
                </div>

                <ul className='projects--list'>
                    <li>
                        <div className='list__style green'>•</div>
                        <div className='list__element'>
                            <div className='project--name'> 
                                Mobile App
                            </div>
                            <div>...</div>
                        </div>
                        
                    </li>

                    <li>
                        <div className='list__style orange'>•</div>
                        <div className='list__element'>
                            <div className='project--name'>
                                Website redesign
                            </div>
                            <div>...</div>
                        </div>
                        
                        
                    </li>

                    <li>
                        <div className='list__style'>•</div>
                        <div className='list__element'>
                            <div className='project--name'>
                                Design system
                            </div>
                            <div>...</div>
                        </div>

                       
                    </li>

                    <li>
                        <div className='list__style blue'>•</div>
                        <div className='list__element'>
                            <div className='project--name'>
                                Wireframes
                            </div>
                            <div>...</div>
                        </div>
                        
                        
                    </li>
                </ul>
            </div>
            <Writetext />
        </div>
     );
}

export default SideBar;