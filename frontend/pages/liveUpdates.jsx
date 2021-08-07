import React from "react";
import LiveCards from "../components/LiveCards";
import { Grid } from "@material-ui/core";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=4e9b6a0b39d341209f1f628612b59ae0"
  );
  const data = await res.json();
  return {
    props: { datas: data },
  };
};

function checkData(data) {
  if (
    data.url != null &&
    data.url != undefined &&
    data.title != null &&
    data.description != null
  ) {
    const url = data.url.toString();
    return (
      <Grid item xs={12} sm={6} md={3} key={data.source.id}>
        <LiveCards
          title={data.title}
          description={data.description}
          url={url}
          name={data.source.name}
        />
      </Grid>
    );
  }
  return <></>;
}

const liveUpdates = ({ datas }) => {
  return (
    <div>
      <h1>live updates page</h1>
      <Grid container spacing={2}>
        {datas.articles.filter(checkData).map(checkData)}
      </Grid>
    </div>
  );
};

export default liveUpdates;
