/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface Props {
  title?: string;
  date?: string;
  direction?: "vertical" | "vertical-reverse" | "horizontal";
  type?: "normal" | "alternative" | "alternative-blue";
  bgType?: "normal" | "alternative";
  bgContentType?: "normal" | "alternative";
}

const classes = {
  card: "card__component",
  layout: "card__layout",
  site: "card__site",
  title: "card__title",
  content: "card__content",
};

const Card: React.FC<Props> = (props) => {
  const { direction = "vertical", type = "normal", bgType = "normal" } = props;
  const { bgContentType = "normal", title } = props;

  return (
    <div className={classes.layout}>
      <div className={`${classes.card} card__component-${bgType}`}>
        <div className={`card__${direction} card__bg-${bgContentType}`}>
          <div className={classes.content}>
            <h6 className={`card__title-${type}`}>Un año de guerra</h6>
            <h3>
              {title ??
                "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </h3>
          </div>
          <img src="https://via.placeholder.com/150 " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
