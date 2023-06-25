import Group1 from './Group1/group1';
import Group2 from './Group2/group2';
import Group3 from './Group3/group3';

function Group() {
    const style = {
        display : "grid",
        gridTemplateColumns : "1fr 1fr 1fr",
        gap: "20px",
        marginTop : "20px"
    }
    return ( 
    <div className='groups' style={style}>
        <Group1 />
        <Group2 />
        <Group3 />
    </div> 
    );
}

export default Group;