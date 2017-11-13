import React,{Component} from 'react';

class Projects extends Component {
    render() {
        return (
            <div className="card h-100">
                <a href="#">
                    <img className="card-img-top" src={this.props.img} alt=""/></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{this.props.title}</a>
                    </h4>
                    <p className="card-text">
                        {this.props.desc}
                    </p>
                </div>
            </div>
        );
    }
}
export default Projects;
