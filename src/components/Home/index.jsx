import styled from "styled-components";
import anselimg from "../../assets/ansel-main.JPG";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
`;

const Header = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 30px;
  padding-top: 10px;
  background-color: white;
  flex: 6;
`;

const HeaderText = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 40px;
  margin-bottom: 0px !important;
`;

const Tagline = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 20px;
`;

const Home = () => {
  return (
    <Container>
      <Header>
        <HeaderText>Hi, i'm Ansel</HeaderText>
        <img src={anselimg} height={400} />
        <Tagline>
          <span style={{ color: "#ff577f" }}>Full stack web developer</span> -
          <span style={{ color: "#295939" }}> photographer</span> -
          <span style={{ color: "#e9b0df" }}> designer</span> -
          <span style={{ color: "#ff884b" }}> cyclist</span>
        </Tagline>
        <p style={{ marginTop: 10 }}>
          <a href="/contact">Lets Work Together! </a>
        </p>
      </Header>
    </Container>
  );
};

export default Home;
