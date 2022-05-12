import styles from "../css/main.module.css"

function Content(props){
    return(
        <div className={styles.box}>
            <h3>Component {props.id}</h3>
        </div>
    );
}

function Main(){
    return(
        <div className="main">
            <ul>
                <li><Content id="1"/></li>
                <li><Content id="2"/></li>
                <li><Content id="3"/></li>
                <li><Content id="4"/></li>
            </ul>
        </div>
        
    )
}

export default Main;