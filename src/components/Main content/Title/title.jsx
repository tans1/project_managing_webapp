import Topic from "./Topic/topic";
import Users from "./Users/users";

function Title() {
    const styles = {
        width : "100%",
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        gap: "10px"
    }
    return ( 
        <div style={styles}>
            <Topic />
            <Users />
        </div>
     );
}

export default Title;