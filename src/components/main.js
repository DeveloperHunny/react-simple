import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/main.module.css"

class MoveShopMall extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName : "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            userName : e.target.value
        })
    }

    render(){
        return (
            <div className={styles.contentBox}>
                <h2>ShopMall</h2>
                <label htmlFor="inputUserName">userName</label>
                <input type="text" id="inputUserName" value={this.state.userName} onChange={this.handleChange}></input>
                <br/>
                <Link to= {"ShopMall/" + this.state.userName} >MOVE</Link>
            </div>
        )
    }
}

function Content(props){
    return(
        <div className={styles.contentBox}>
            <h2>{props.name}</h2>
            <Link to={props.path}>MOVE</Link>
        </div>
    );
}

function Main(){
    return(
        <div className="main">
            <ul>
                <li><Content name="Counter" path="/Counter"/></li>
                <li><MoveShopMall/></li>
                <li><Content name="Undefined Content" path="/notfound"/></li>
                <li><Content name="Undefined Content" path="/notfound"/></li>
            </ul>
        </div>
        
    )
}

export default Main;