import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { connect } from "react-redux";
import styled from "styled-components";

const news = [
  {
    id: 1,
    title: "Govt considering support measuresforMSME sector",
    date: "15 May 2021",
    image: "/images/news1.png",
  },
  {
    id: 2,
    title: "Latest Credit Facilitation SchemeMSMEs Must Know",
    date: "15 May 2021",
    image: "/images/news2.png",
  },
  {
    id: 3,
    title: "Govt considering support measuresforMSME sector",
    date: "15 May 2021",
    image: "/images/news1.png",
  },
  {
    id: 4,
    title: "Latest Credit Facilitation SchemeMSMEs Must Know",
    date: "15 May 2021",
    image: "/images/news2.png",
  },
];

const NewsUpdates = () => {
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
            <Tab label="News" value="1" />
            <Tab label="Events" value="2" />
            <View>view all</View>
          </CustomTabList>
        </Box>
        <TabPanel value="1">
          {news.map((data) => {
            return (
              <NewsContainer>
                <ImageContainer>
                  <img src={data.image} alt="" />
                </ImageContainer>
                <DetailContainer>
                  <h3>{data.title}</h3>
                  <p>{data.date}</p>
                </DetailContainer>
              </NewsContainer>
            );
          })}
        </TabPanel>
        <TabPanel value="2">
          <NewsContainer>There is no event to display</NewsContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsUpdates);

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

const NewsContainer = styled.div`
  display: flex;
  margin: 26px 0;
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
  margin: 0 10px;
  h3 {
    font-size: 18px;
    margin: 4px 0;
    font-weight: 600;
    line-height: 22px;
  }
  p {
    margin: 4px 0;
  }
`;
