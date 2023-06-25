import Card from '../card/card';
import style from './style.css'
import user1 from './assets/user1 .png'
import user2 from './assets/user2 .png'
import user3 from './assets/user3.png'

import card2user1 from './assets/card2 user1.png'
import card2user2 from './assets/card2 user2.png'

function Group1() {
    const dragOver = (e) => {
        e.preventDefault();
      };
      
      const dragDropped = (e) => {
        const transferredCardId = JSON.parse(e.dataTransfer.getData('cardId')).id;
      };


    return ( 
    <div className="group1" style={style} onDragOver={dragOver} onDrop={dragDropped}>

        <div className="todo__container">
            <div className="todo__content">
                <span className='bullet__style'>•</span>
                <span className="todo__text">To Do</span>
                <span className="counter">4</span>
            </div>
            <button>+</button>
        </div>

        <div className='horizontal__break'></div>
        
        <Card 
            topic = {"Brainstorming"}
            detail= {"Brainstorming brings team members' diverse experience into play."}
            quality = {"Low"}
            comment = {"12"}
            file = {"0"}
            images = {[user1,user2, user3]}
            id = {1}
        />

        <Card 
            topic = {"Research"}
            detail= {"User research helps you to create an optimal product for users."}
            quality = {"High"}
            comment = {"10"}
            file = {"3"}
            images = {[card2user1,card2user2]}
            id = {2}
        />



    </div> 
    );
}

export default Group1;