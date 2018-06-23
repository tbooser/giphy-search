import { withRouter } from "react-router-dom";
import React from "react";

const Button = withRouter(({ history }) => (
	<div className="button-favorites">
		<button
			type="button"
			onClick={() => {
				history.push("/");
			}}
		>
			<span className="arrow-back">
				<a href="/">
					<i class="fas fa-arrow-left" />
				</a>
			</span>{" "}
			Home
		</button>
	</div>
));

export default Button;
