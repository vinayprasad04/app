import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class Dropdown extends Component {
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
                <li className={this.state.active ? 'dropdown show': 'dropdown'}>
                    <a onClick={this.toggleClass} className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" >
                        {this.props.name}
                    </a>
                    <div  className={this.state.active ? 'dropdown-menu dropdown-menu-right show': 'dropdown-menu dropdown-menu-right'} aria-labelledby="navbarDropdownPortfolio">
                        <Link to="/about" className="dropdown-item">1 Column Portfolio</Link>
                        <a className="dropdown-item" href="portfolio-2-col.html">2 Column Portfolio</a>
                        <a className="dropdown-item" href="portfolio-3-col.html">3 Column Portfolio</a>
                        <a className="dropdown-item" href="portfolio-4-col.html">4 Column Portfolio</a>
                        <a className="dropdown-item" href="portfolio-item.html">Single Portfolio Item</a>
                    </div>
                </li>
        );
    }
}
export default Dropdown;