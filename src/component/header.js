import styles from "../css/Header.module.css"

function Header(){
    return(
        <div>
            <div className={styles.header}>
                <h1> REACT SIMPLE </h1>
            </div>
            <hr/>
        </div>
    )
}

export default Header;