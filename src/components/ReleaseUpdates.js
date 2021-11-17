import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { connect } from "react-redux";
import styled from "styled-components";

const ReleaseUpdates = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Root sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderColor: "divider" }}>
          <CustomTabList
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="PRESS RELEASE" value="1" />
            <Tab label="ARTICLE" value="2" />
            <View>view all</View>
          </CustomTabList>
        </Box>
        <TabPanel value="1">
          <ReleaseContainer>
            <ImageContainer>
              <img src="/images/release.png" alt="" />
            </ImageContainer>
            <DetailContainer>
              <h2>RBI’s Liquidity Boost: Key Takeaways For MSMEs</h2>
              <p>15 May 2021</p>
            </DetailContainer>
          </ReleaseContainer>
        </TabPanel>
        <TabPanel value="2">
          <ReleaseContainer>There is no article to display</ReleaseContainer>
        </TabPanel>
      </TabContext>
    </Root>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseUpdates);

const Root = styled(Box)`
  & > div {
    padding: 0;
  }
`;

const CustomTabList = styled(TabList)`
  position: relative;
  button {
    font-size: 20px;
    color: #373742;
    font-weight: 500;
  }
`;

const View = styled.span`
  color: #00b6f0;
  position: absolute;
  right: 30px;
  top: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

const ReleaseContainer = styled.div`
  margin: 26px -36px;
`;

const ImageContainer = styled.div`
  display: flex;
  min-width: 150px;
  img {
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
  }
`;

const DetailContainer = styled.div`
  color: #424242;
  margin: 20px 40px;
  h2 {
    margin: 8px 0;
    font-weight: 600;
    line-height: 30px;
  }
  p {
    margin: 4px 0;
  }
`;
