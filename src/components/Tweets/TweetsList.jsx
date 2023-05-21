import { ListItemCard } from "./Tweets.styled";
import { TweetsItem } from "./TweetsItem";

export const TweetsList = ({ users, onClick }) => {
  return (
    <ListItemCard>
      {users.map((user) => {
        return <TweetsItem key={user.id} user={user} onClick={onClick} />;
      })}
    </ListItemCard>
  );
};
