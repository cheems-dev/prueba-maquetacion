import React from "react";

interface Props {
  type?: "normal" | "ghost" | "alternative";
}

const classes = {
  layout: "section__layout",
};

const Section: React.FC<Props> = (props) => {
  const { type = "normal" } = props;

  return (
    <div className={`${classes.layout} section__${type}`}>
      <h3 itemProp="title">Internacional</h3>
    </div>
  );
};

Section.defaultProps = {};

export default Section;
