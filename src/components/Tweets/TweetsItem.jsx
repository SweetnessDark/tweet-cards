import { Box } from "@mui/material";
import {
  Avatar,
  Background,
  BtnFollowers,
  Card,
  Logo,
  Tweet,
  logoBoxStyle,
  dividerStyle,
  avatarBorder,
  avatarBoxStyle,
} from "./Tweets.styled";
import logo from "./images/logo.png";
import background from "./images/background.png";

export const TweetsItem = ({ user, onClick }) => {
  const { id, user: name, followers, avatar, tweets, isFollow = false } = user;

  return (
    <Card key={id}>
      <Box sx={logoBoxStyle}>
        <Logo
          src={logo}
          alt="GoIt logo"
          width="76px"
          height="22px"
          loading="lazy"
        />
        <Background src={background} width="308" height="168" loading="lazy" />
      </Box>
      <Box sx={dividerStyle}>
        <Box sx={{ ...avatarBorder }}>
          <Box sx={avatarBoxStyle}>
            <Avatar
              src={avatar}
              alt={name}
              width="62"
              height="62"
              loading="lazy"
            />
          </Box>
        </Box>
      </Box>
      <Tweet>{tweets.toLocaleString()} tweets</Tweet>
      <Tweet>{followers.toLocaleString()} followers</Tweet>
      <BtnFollowers
        onClick={() => onClick(id)}
        data-follow={isFollow}
        variant="contained"
      >
        {isFollow ? "Following" : "Follow"}
      </BtnFollowers>
    </Card>
  );
};
