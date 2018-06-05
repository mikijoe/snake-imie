import React, { PureComponent } from 'react'

class Button extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            label: 'click me '
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <button onClick={this.handleClick}>
            {`hello, you clicked me ${this.state.count}times`}
            </button>
        )


    }
}

export default Button