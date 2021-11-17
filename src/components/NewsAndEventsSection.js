import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Box from "@mui/material/Box";

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    date: "15 May 2021",
    image: "/images/event1.png",
    button: "News",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    date: "15 May 2021",
    image: "/images/event2.png",
    button: "Press",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ",
  },
];

const NewsAndEventsSection = () => {
  return (
    <Root background="/images/background.png">
      <Box sx={{ typography: "body1" }}>
        <Grid container>
          {events.map((data) => {
            return (
              <Grid item md={6}>
                <Grid container>
                  <Grid item md={4}>
                    <ImageContainer>
                      <img src={data.image} alt="" />
                    </ImageContainer>
                  </Grid>
                  <Grid item md={8}>
                    <DetailContainer>
                      <h2>{data.title}</h2>
                      <p>
                        <span>{data.date}</span>
                        <span>{data.button}</span>
                      </p>
                      <p>{data.text}</p>
                    </DetailContainer>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Root>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsAndEventsSection);

const Root = styled.div`
  background-image: url("${({ background }) => background}");
  border-radius: 25px;
  background-size: cover;
  background-position: center;
  padding: 30px;
  margin: 40px 0;
`;

const ImageContainer = styled.div`
  display: flex;
  min-width: 150px;
  margin: 30px 0;
  img {
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
  }
`;

const DetailContainer = styled.div`
  color: white;
  margin: 30px 20px;
  max-width: 300px;
  h2 {
    margin: 10px 0;
    font-weight: 600;
    line-height: 22px;
    font-size: 26px;
  }
  p {
    margin: 4px 0;
    font-size: 16px;
    display: flex;
    & > :nth-child(2) {
      margin-left: 28px;
      font-weight: 600;
      border: 1px solid yellow;
      border-radius: 6px;
      padding: 0 6px;
    }
  }
`;
