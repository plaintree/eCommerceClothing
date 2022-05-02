import {Outlet, Link} from "react-router-dom";
import {ReactComponent as PlanetLogo} from "../../assets/planet.svg";

import "./nav.styles.scss";

const Navigation = () => {
	return (
		<>
			<nav className='navigation'>
				<Link className='logo-container' to='/'>
					<PlanetLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					<Link className='nav-link' to='/auth'>
						SIGN IN
					</Link>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Navigation;
