import React, { Component } from 'react';

// Write Review Button that displays review form  when clicked

class WriteReview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expanded: false,
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({expanded: !this.state.expanded})
    }
    close() {
        this.setState({expanded: !this.state.expanded})
    }

    render() {

        if (!this.state.expanded) {
            return (
                <p><button onClick={this.open}>Write Review</button></p>
            )
        }
        return(
            <div>
                {/* <p onClick={this.close}>Close</p> */}
                <p>Please Rate</p>
                <form>
                  <select id="ratings">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </form>

                <p><input type="text" placeholder={"Title"}></input></p>
                <p><input type="text" placeholder={"Comments"}></input></p>
                <p><button type="button">Submit</button></p>
            </div>
        )
    }
}

export default WriteReview;