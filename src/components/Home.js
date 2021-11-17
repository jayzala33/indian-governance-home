import React from "react";
import { connect } from "react-redux";
import BannerSection from "./BannerSection";
import NewsAndEventsSection from "./NewsAndEventsSection";
import NewsUpdates from "./NewsUpdates";
import ReleaseUpdates from "./ReleaseUpdates";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <SectionContainer>
        <NewsAndEventsSection />
        <Grid container spacing={5}>
          <Grid item md={7}>
            <ReleaseUpdates />
          </Grid>
          <Grid item md={5}>
            <NewsUpdates />
          </Grid>
        </Grid>
      </SectionContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;
