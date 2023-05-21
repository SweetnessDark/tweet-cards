import Tweets from "../components/Tweets/Tweets";
import { Container } from "./../components/App.styled";
import { BtnBackTweets } from "./../components/Tweets/Tweets.styled";

const TweetsPage = () => {
  return (
    <Container>
      <BtnBackTweets to="/">Go to Back</BtnBackTweets>
      <Tweets />
    </Container>
  );
};

export default TweetsPage;
