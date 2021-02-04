import styled from "styled-components";
import anselimg from "./assets/ansel_main.jpeg";

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Header = styled.div`
  font-size: 50px;
  display: flex;
  align-items: center;
`;

const HeaderImg = styled.div``;
const App = () => {
  return (
    <Container>
      <Header>
        <h1>Hi, i'm Ansel</h1>
        <img src={anselimg} width={200} />
      </Header>
    </Container>
  );
};

export default App;
