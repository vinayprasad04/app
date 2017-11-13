import React,{Component} from 'react';


class Card extends Component {
    render() {
        return (
            <div className="card h-100">
                <h4 className="card-header">{this.props.title}</h4>
                <div className="card-body">
                    <p className="card-text">{this.props.desc}</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        );
    }
}
export default Card;
