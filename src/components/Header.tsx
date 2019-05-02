import React from "react";
interface IHeaderProps {
  title: string;
}
function Header(props: IHeaderProps) {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-3">
        {/* eslint-disable-next-line */}
        <a className="brand-logo center">{props.title}</a>
      </div>
    </nav>
  );
}

export default Header;
