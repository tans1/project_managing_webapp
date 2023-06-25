import plantImage from './assets/Plant Care App (Dribbble shot) 1.png'
import user1 from './assets/user1 .png'
import user2 from './assets/user3.png'
import user3 from './assets/user1 .png'

import Card from '../card/card';
import style from './style.css'



function Group3() {
    return ( 
        <div className="group3" style={style}>

            <div className="done__container">
                <div className="done__content">
                    <span className='group3bullet__style'>•</span>
                    <span className="done__text">Done</span>
                    <span className="counter">2</span>
                </div>
            </div>

            <div className='group3horizontal__break'></div>
            
            <Card
                topic = {"Mobile App Design"}
                detail= {<img src={plantImage} alt='card imafe'/>}
                quality = {"Completed"}
                comment = {"12"}
                file = {"15"}
                images = {[user1,user2]}
                id = {5}
            />

            <Card
                topic = {"Design System"}
                detail= {"It just needs to adapt the UI from what you did before "}
                quality = {"Completed"}
                comment = {"12"}
                file = {"15"}
                images = {[user1, user2, user3]}
                id = {6}
            />
        
        </div> 
    );
}

export default Group3;