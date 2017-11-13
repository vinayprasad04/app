import React,{Component} from 'react';
import Nav from './nav';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            allNavArr:[
                {className:"nav-link", href:"/home", text:"Home"},
                {className:"nav-link", href:"/about", text:"About"},
                {className:"nav-link", href:"/about", text:"Services"},
                {className:"nav-link", href:"/about", text:"Contact"},
                {className:"nav-link", href:"/about", text:"About"},
                {className:"nav-link", href:"/about", text:"About"},
            ]
        }
    }
//<Nav/>

        render() {
            var allNavList = this.state.allNavArr.map((objb) => {
                return (
                    <Nav className={objb.title} href={objb.desc} text={objb.desc}/>
                )

            });



    return (
            <div className="headerOuter">
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">Start Bootstrap</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            {allNavList}
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
    );
  }
}
export default Header;


