import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  title?: string;
  subtitle?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TemplateComponent: React.FC<Props> = (props) => {
  const { title, subtitle } = props;

  return (
    <div className="TemplateComponent">
      <h1 itemProp="title" className="TemplateComponent__title">
        {title}
      </h1>
      <h2 itemProp="subtitle" className="TemplateComponent__subtitle">
        {subtitle}
      </h2>
    </div>
  );
};

TemplateComponent.defaultProps = {};

export default TemplateComponent;
