import styled from "styled-components";
import anselimg from "./assets/ansel_main.jpeg";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import StravaImg from "./assets/strava.svg";

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;

  justify-content: center;
  height: 100vh;
  margin: 0 auto;
`;

const Header = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 30px;
  background-color: white;
`;

const HeaderText = styled.p`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 40px;
  margin-bottom: 0px !important;
`;

const Tagline = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const HeaderImg = styled.div``;

const StravaIcon = styled.img`
  width: 20px;
  height: 22px;
  margin-left: 0px;
  margin-top: 0px;
  margin-bottom: 10px;
`;

const iconStyle = { fill: "#000", margin: 10 };
const App = () => {
  return (
    <Container>
      <Header>
        <HeaderText>Hi, i'm Ansel</HeaderText>
        <Tagline>
          <span style={{ color: "#ff577f" }}>Full stack web developer</span>
          <br />
          <span style={{ color: "#295939" }}>photographer</span>
          <br />
          <span style={{ color: "#e9b0df" }}>designer</span>
          <br />
          <span style={{ color: "#ff884b" }}>cyclist</span>
        </Tagline>
        <HeaderImg>
          <img src={anselimg} width={200} />
        </HeaderImg>
        <a href="https://github.com/anselsmolund">
          <GitHubIcon style={iconStyle} />
        </a>
        <a href="https://www.instagram.com/ansels.photo/">
          <InstagramIcon style={iconStyle} />
        </a>
        <a href="https://www.youtube.com/channel/UCX4OanYXxKVVMd-KvkIntNQ">
          <YouTubeIcon style={iconStyle} />
        </a>
        <a href="https://twitter.com/smolundo">
          <TwitterIcon style={iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/anselsmolund/">
          <LinkedInIcon style={iconStyle} />
        </a>
        <a href="https://www.strava.com/athletes/43174923">
          <StravaIcon src={StravaImg} />
        </a>
      </Header>
    </Container>
  );
};

export default App;
