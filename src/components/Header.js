import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	
	return (
	<div> 
		<nav className="navbar navbar-default">
			<ul className="nav navbar-nav">
		        <li className="active">
		        <Link to="/" className="item">
		        Streamy
		     	</Link>
		        </li>
		        <li>
		        <Link to="/article/new" className="item">
		          Create Article
		        </Link>
		        </li>
		    </ul>     
	    </nav>
	</div>);
	
}



export default Header;