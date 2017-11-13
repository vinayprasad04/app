import React,{Component} from 'react';
import Nav from './nav';
import {Link} from 'react-router-dom';
import Dropdown from "./dropdown";

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            allNavArr:[
                {className:"nav-link", href:"/home", text:"Home", hasdropdown:""},
                {className:"nav-link", href:"/about", text:"About", hasdropdown:""},
                {className:"nav-link", href:"/about", text:"Services", hasdropdown:""},
                {className:"nav-link", href:"/about", text:"Contact", hasdropdown:""},

                {className:"nav-link dropdown-toggle", href:"#", text:"Portfolio", hasdropdown:"dropdown",
                    sublinks:[
                        {subhref:"/about", sublinktext:"2 Column Portfolio"},
                        {subhref:"/about", sublinktext:"3 Column Portfolio"},
                        {subhref:"/about", sublinktext:"4 Column Portfolio"},
                        {subhref:"/about", sublinktext:"Single Portfolio Item"}
                        ]},
                {className:"nav-link dropdown-toggle", href:"#", text:"Blog", hasdropdown:"dropdown",
                    sublinks:[
                        {subhref:"/about", sublinktext:"2 Column Blog"},
                        {subhref:"/about", sublinktext:"3 Column Blog"},
                        {subhref:"/about", sublinktext:"4 Column Blog"},
                        {subhref:"/about", sublinktext:"Single Blog Item"}
                        ]},
                {className:"nav-link dropdown-toggle", href:"#", text:"Other Pages", hasdropdown:"dropdown",
                    sublinks:[
                        {subhref:"/about", sublinktext:"2 Column Other"},
                        {subhref:"/about", sublinktext:"3 Column Other"},
                        {subhref:"/about", sublinktext:"4 Column Other"},
                        {subhref:"/about", sublinktext:"Single Other Item"}
                        ]},
            ]
        }
    }

        render() {

            var allNavList = this.state.allNavArr.map((objb, i) => {
                if(objb.hasdropdown === "dropdown"){
                return (
                        <Dropdown name ={objb.text} sublinklink ={objb.sublinks}/>

                    )
                }
                else{
                return (
                    <li><Nav className={objb.className} href={objb.href} text={objb.text} /></li>
                    )
                }



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


