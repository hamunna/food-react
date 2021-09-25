import React from 'react';
import './Header.css';
import logo from '../../logo.png';

const Header = () => {
	return (
		<div>
			<header>
				<nav>
					<div className="container">
						<div id="brand-logo">
							<a href="#"><img src={logo} alt="" /></a>
						</div>

						<div>
							<ul>
								<li><a href="/Shop">Shop</a></li>
								<li><a href="/Blog">Food Blog</a></li>
								<li><a href="/Favorits">Favorits</a></li>
								<li><a href="/About">About Us</a></li>
								<li><a href="/Policy">Privacy Policy</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Header;