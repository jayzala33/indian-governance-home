import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Box from "@mui/material/Box";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const BannerSection = () => {
  return (
    <Root background="/images/aircraft.png">
      <Background>
        <Container sx={{ typography: "body1" }}>
          <BannerContainer>
            {/* <ImageContainer>
            <div>
              <img src="/images/aircraft.png" alt="" />
            </div>
          </ImageContainer> */}
            <DetailContainer>
              <h1>
                An INDIAn initiative <br />
                Governance <br />
                program
              </h1>
              <p>
                <span>Play Video</span>
                <PlayCircleIcon fontSize="inherit" />
              </p>
            </DetailContainer>
          </BannerContainer>
        </Container>
      </Background>
    </Root>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BannerSection);

const Root = styled.div`
  background-image: url("${({ background }) => background}");
  background-size: cover;
  background-position: center;
`;

const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled(Box)`
  max-width: 1200px;
  margin: auto;
`;

const BannerContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 600px;
  margin-bottom: -170px;
`;

const DetailContainer = styled.div`
  color: white;
  margin: auto 20px;
  padding-bottom: 170px;
  h1 {
    margin: 10px 0;
    font-weight: 600;
    line-height: 50px;
    font-size: 50px;
  }
  p {
    display: flex;
    font-size: 20px;
    span {
      margin: auto 0;
    }
    svg {
      color: #00b6f0;
      font-size: 40px;
      margin-left: 20px;
    }
  }
`;
