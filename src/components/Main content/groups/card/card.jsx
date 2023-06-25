import styles from './cardstyle.css'
import commentIcon from './assets/message.png'
import folderIcon from './assets/folder-2.png'

function Card({topic,detail,quality,comment,file,images, id}) {

    const qualitystyle = () =>{
        if(quality === 'Low'){
            return {
                color: '#D58D49',
                background: "rgba(223, 168, 116, 0.20)"
            }
        }
        else if(quality === 'High'){
            return {
                color: '#D8727D',
                background: "rgba(216, 114, 125, 0.10)"
            }
        }
        else if(quality === 'Completed') {
            return {
                color: '#68B266',
                background: 'rgba(131, 194, 157, 0.20)'
            }
        }
    }

    const dragStarted = (e, id) => {
        e.dataTransfer.setData('cardId', JSON.stringify({ id }));
      };

    return ( 
    <div className="card" style={styles} draggable onDragStart={(e) => dragStarted(e, id)}>
        <div className="top-row">
            <div className="quality" style = {qualitystyle()}>{quality}</div>

            <div className="menu">...</div>
        </div>
        <div className="card-topic">{topic}</div>
        <div className="detail">{detail}</div>
        <div className="bottom-row">
            <div className="friends">
                {
                    images.map((image,index) => {
                        return <img key={index} className={`image${index+1}`} src={image} alt={`user${index+1} image`} />
                    }
                    )
                }
            </div>
            <div className="comment">
                <img src={commentIcon} alt="" />
                <span>{comment}</span>
                <span>comments</span>
            </div>
            <div className="files">
                <img src={folderIcon} alt="" />
                <span>{file}</span>
                <span>files</span>
            </div>
        </div>
    </div> );
}

export default Card;