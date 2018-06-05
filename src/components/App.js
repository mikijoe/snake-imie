import React, { Component } from 'react'
import Grid from "./Grid";

class App extends Component{
    render(){
        return(
            <div>
                <Grid rows={50} columns={50}/>
            </div>
        )
    }
}
export default App