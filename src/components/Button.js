import React, { PureComponent } from 'react'

const  styles = (props, state) => ({
    button: {
        backgroundColor: state.count > 10 ? 'red' : 'blue',
        color: state.count > 10 ? 'black' : 'white'
    }
});

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
            <button onClick={this.handleClick} style={styles.button}>
            {`hello, you clicked me ${this.state.count}times`}
            </button>
        )


    }
}

export default Button