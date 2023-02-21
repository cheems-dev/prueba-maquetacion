import Card from "./components/card";
import Section from "./components/section";

const classes = {
  layout: "layout",
  card: "layout__cards",
  subCard: "layout__subCards",
};

function App() {
  return (
    <div className={classes.layout}>
      <Section />
      <div className={classes.card}>
        <Card direction="vertical-reverse" />
        <Card />
        <Card direction="vertical-reverse" />
      </div>

      <Section type="ghost" />

      <Section type="alternative" />
      <div className={classes.card}>
        <Card type="alternative" bgType="alternative" />
        <Card direction="vertical-reverse" type="alternative-blue" />
        <Card
          direction="vertical-reverse"
          type="alternative-blue"
          bgContentType="alternative"
        />
      </div>
      <div className={classes.card}>
        <div className={classes.subCard}>
          <Card direction="horizontal" />
          <Card direction="horizontal" />
        </div>
        <Card direction="vertical-reverse" type="alternative-blue" />
        <Card
          direction="vertical-reverse"
          type="alternative-blue"
          bgContentType="alternative"
        />
      </div>
    </div>
  );
}

export default App;
