import { withRouter } from "react-router-dom";
import React from "react";

const Button = withRouter(({ history }) => (
  <div className="button-favorites">
    <button
      type="button"
      onClick={() => {
        history.push("/favorites");
      }}
    >
      Favorites
    </button>
  </div>
));

export default Button;
