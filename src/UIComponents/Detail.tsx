import * as React from "react";

const Detail: React.SFC<{ heading: string; detail: string }> = ({
  heading,
  detail
}) => (
  <div>
    <div className="heading">{heading}</div>
    <div className="detail">{detail}</div>
  </div>
);

export default Detail;