import { Container, Title } from "../components/App.styled";
import { BtnFromTweets } from "./../components/App.styled";

const Home = () => {
  return (
    <Container>
      <Title>Welcome User</Title>
      <BtnFromTweets to="/tweets">Go to Tweets</BtnFromTweets>
    </Container>
  );
};

export default Home;
