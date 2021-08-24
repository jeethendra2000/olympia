import { Typography, Grid } from "@material-ui/core";
import React from "react";
import AboutCard from "../components/AboutCard";

export const getServerSideProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/aboutUs/");
  const data = await res.json();

  return {
    props: { team_members: data },
  };
};

function about({ team_members }) {
  return (
    <div style={{ marginTop: "50px" }}>
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        Our Team     
      </Typography>     
      <Grid container spacing={6} style={{ marginBottom: "10px" }}>
             
        {team_members.map((team_member) => (
          <Grid key={team_member.id} item xs={12} sm={6} md={3}>
            <AboutCard
              image={team_member.profileImage}
              fullname={team_member.fullName}
              work={team_member.work}
              bio={team_member.bio}
            />     
          </Grid>
        ))}     
      </Grid>     
    </div>
  );
}

export default about;
