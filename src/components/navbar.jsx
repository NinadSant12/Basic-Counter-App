import React, {Component} from 'react';

class NavBar extends Component{
  

    render(){
        return(
            <nav className="navbar navbar-light bg-light">
               <a className="navbar-brand">Navbar<span className="badge badge-spill badge-primary m-2">{this.props.totalCounters}</span></a>
            </nav>
        );

        

    }
}
    export default NavBar;
