import { Link } from "react-router-dom";
import styles from "../css/Header.module.css"

function Header(){
    return(
        <div>
            <div className={styles.header}>
                <Link to="/"><h1> REACT SIMPLE </h1></Link>
            </div>
            <hr/>
        </div>
    )
}

export default Header;