import React from "react";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<>
			<div className="logo">
				<Link to="/">
					<img src="/images/logo_icon.png" alt="" />
				</Link>
			</div>
		</>
	);
}

export default Logo;
