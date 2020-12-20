import { Component } from 'react'

class Statistics extends Component {
    render() {
        return(
            <section className="statistics">
                <div>Neutral { this.props.neutral }</div>
                <div>Bad { this.props.bad }</div>
                <div>Good! { this.props.good }</div>
        
            Total:  {this.props.total}
            <br />
            Positive % : {this.props.positivePercentage}
            <br />
            </section>
            )
    }
}

export default Statistics


