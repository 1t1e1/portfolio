import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import routes from "../routes";

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand to="/portfolio/" tag={Link}>
					Ana Sayfa
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						{routes
							.filter((el) => el.name !== "Portfolio")
							.map((route) => (
								<NavItem key={route.path}>
									<NavLink to={route.path} tag={Link}>
										{route.name}
									</NavLink>
								</NavItem>
							))}
						<NavItem>
							<NavLink href="https://github.com/1t1e1">
								GitHub
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
