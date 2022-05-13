import { Link } from "react-router-dom";
import styles from "../css/main.module.css"


function Content(props){
    return(
        <div className={styles.contentBox}>
            <h2>{props.name}</h2>
            <Link to={props.name}>MOVE</Link>
        </div>
    );
}

function Main(){
    return(
        <div className="main">
            <ul>
                <li><Content name="Counter"/></li>
                <li><Content name="ShopMall"/></li>
                <li><Content name="Undefined Content"/></li>
                <li><Content name="Undefined Content"/></li>
            </ul>
        </div>
        
    )
}

export default Main;