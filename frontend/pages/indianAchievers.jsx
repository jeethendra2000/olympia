import React from "react";
import IndianAchiever from "../components/IndianAchiever";
import { Typography, Grid } from "@material-ui/core";

export const getServerSideProps = async () => {
  const res = await fetch("https://olympia.pythonanywhere.com/achievers/");
  const data = await res.json();
  return {
    props: { achievers: data },
  };
};

function indianAchievers({ achievers }) {
  return (
    <div>
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginBottom: "40px", marginTop:"30px" }}
      >
        Indian Achievers   
      </Typography>   
      <Grid container spacing={4}>
        {achievers.map((achiever) => (
          <Grid item key={achiever.id} xs={12} sm={12} md={4} onClick={() => location.replace(achiever.detailed_info_link)}>
            <IndianAchiever
              athleteImage={achiever.athleteImage}
              name={achiever.name}
              medals={achiever.medals}
              sports_category={achiever.sports_category}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default indianAchievers;
