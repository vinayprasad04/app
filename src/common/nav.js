import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Dropdown from "./dropdown";
//<Dropdown name="Portfolio"/>
//<Dropdown name="Blog"/>
  //  <Dropdown name=" Other Pages"/>
//<Link to={this.props.href} className={this.props.className}>{this.props.text}</Link>

class Nav extends Component {
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            isActive: false
        }
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    render() {
        return (
            <div>
            <li><Link to="/about" className={this.props.className}>{this.props.text}</Link> </li>
                {this.props.text}
            </div>
            );
    }
}
export default Nav;