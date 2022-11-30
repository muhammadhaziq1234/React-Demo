import React from "react";
import { Link } from "react-router-dom";
const LinkComponent = ({ external = false, to = "#", children, ...rest }) => {
  if (external) {
    return (
      <a href={to} target={"_blank"} rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to || "#"} {...rest}>
      {children}
    </Link>
  );
};

export default LinkComponent;
