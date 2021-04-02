import React from "react";
import { Branding } from "../../atoms/branding/Branding";
import "./Navbar.css";

export const Navbar = () => {
	return (
		<nav>
			<Branding />
			<ul className='menu'>
				<li>
					<a href=''>About us</a>
				</li>
				<li>
					<a href=''>Features</a>
				</li>
				<li>
					<a href=''>Testimonials</a>
				</li>
				<li>
					<a href=''>Pricing</a>
				</li>
				<li>
					<a href='' className='cta-btn'>
						Get Started
					</a>
				</li>
			</ul>
		</nav>
	);
};
