import React, { Component } from "react"

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            pic: ''
        }
    }

    getDogs = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loaded: true,
                    pic: data.message
                })
                console.log(data)
            },
                error => {
                    this.setState({
                        loaded: true,
                        error
                    })
                })
            .catch((err) => console.log(err))
    }

    componentDidMount() {
        this.getDogs()
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.getDogs();
                }}>Let's see a new dog!</button>
                <br />
                <br />
                <img src={this.state.pic} />
            </div>
        )
    }
}

export default DogIndex;