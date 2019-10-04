import React from "react";

const randomColour = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

const Button = React.memo(props => (
  <button onClick={props.onClick} style={{ background: randomColour() }}>
    {props.children}
  </button>
));

export default Button;
