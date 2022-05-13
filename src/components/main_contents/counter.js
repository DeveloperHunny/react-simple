import React from "react";
import styles from "../../css/counter.module.css"

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }

        this.counting = this.counting.bind(this);
    }

    counting(){
        this.setState({ count : this.state.count + 1});
    }

    render(){
        return(
            <div className="content">
                <h1> This is Counter Page</h1>
                <h2> Count : {this.state.count}</h2>

                <button onClick={this.counting}>Count</button>
            </div>
        )
    }

}


export default Counter;