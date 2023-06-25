import Filter from "./filter/filter";
import Share from "./share/share";

function Modify() {
    const styles = {
        width : "100%",
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        gap: "10px"
    }

    return ( 
        <div className="modify" style={styles}>
            <Filter />
            <Share />
        </div>
     );
}

export default Modify;