import styles from './style.css'
import filterIcon from './assets/filter.png'
import calendarIcon from './assets/calendar.png'

function Filter() {
    return ( 
        <div className='filter'>
            <div className="dropdown" style={styles}>
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={filterIcon} alt="" /> 
                    Filter
                </button>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">date</a></li>
                    <li><a className="dropdown-item" href="#">name</a></li>
                </ul>
            </div>

            <div className="dropdown" style={styles}>
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={calendarIcon} alt="" /> 
                    Today
                </button>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">option1 </a></li>
                    <li><a className="dropdown-item" href="#">option2 </a></li>
                </ul>
            </div>


        </div>

     );
}

export default Filter;