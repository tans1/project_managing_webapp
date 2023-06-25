import Card from '../card/card';
import style from './style.css'
import user1 from './assets/user2 .png'
import user2 from './assets/user1 .png'
import user3 from './assets/user3.png'
import card1image from './assets/main 1.png'

import card2image1 from './assets/card2 image1.png'
import card2imag2 from './assets/card2 image2.png'

function Group2() {
    return ( 
        <div className="group2" style={style}>

        <div className="onProgress__container">
            <div className="onProgress__content">
                <span className='group2bullet__style'>•</span>
                <span className="onProgress__text">On Progress</span>
                <span className="counter">3</span>
            </div>
        </div>

        <div className='group2horizontal__break'></div>
        
        <Card
            topic = {"Onboarding Illustrations"}
            detail= {<img src={card1image} alt='card imafe'/>}
            quality = {"Low"}
            comment = {"14"}
            file = {"15"}
            images = {[user1,user2, user3]}
            id = {3}
        />

        <Card
            topic = {"Moodboard"}
            detail= {<>
                <img src={card2image1} alt='card imafe'/>
                <img src={card2imag2} alt='card imafe'/>
            </>}
            quality = {"Low"}
            comment = {"9"}
            file = {"10"}
            images = {[user1]}
            id = {4}
        />
       
    </div> 
    );
}

export default Group2;