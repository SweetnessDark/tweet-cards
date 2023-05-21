import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BtnBackTweets = styled(Link)`
  padding: 16px 32px;
  //   display: flex;
  //   align-items: flex-start;

  font-weight: 700;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  background-color: transparent;

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  transition: all 250ms ease-in-out;

  cursor: pointer;
  text-decoration: none;

  :hover {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ListItemCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Card = styled.li`
  position: relative;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 26px;
  padding-bottom: 26px;
  min-width: 300px;
  flex-basis: calc((100% - 64px) / 4);
  flex-direction: column;
  gap: 36px;
  background-image: linear-gradient(
    115deg,
    rgb(71, 28, 169) -1%,
    rgb(87, 54, 163) 54%,
    rgb(75, 42, 153) 79%
  );
  box-shadow: rgba(0, 0, 0, 0.23) -3px 7px 21px;
  border-radius: 20px;
  overflow: hidden;
`;
export const Logo = styled.img``;
export const Avatar = styled.img``;
export const Background = styled.img``;
export const WrapperAvatar = styled.div``;
export const Tweet = styled.p`
  margin: 0px;
  font-family: Montserrat, sans-serif;
  color: rgb(235, 216, 255);
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
`;

export const BtnFollowers = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: rgb(235, 216, 255);
  padding: 14px 56px;
  min-width: 229px;
  color: rgb(55, 55, 55);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;
  border-radius: 10px;

  &:hover {
    background-color: rgb(92, 211, 168);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 3px;
  }
`;

export const centredItemsStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const tweetsItemStyle = {
  p: "26px",
  minWidth: "300px",
  flexBasis: "calc((100% - 64px) / 3)",
  flexDirection: "column",
  gap: "36px",
  backgroundImage:
    "linear-gradient(115deg, #471CA9 -1%, #5736A3 54%, #4B2A99 79%);",
  boxShadow: "-3px 7px 21px rgba(0, 0, 0, 0.23)",
  borderRadius: "20px",
  overflow: "hidden",
};

export const logoBoxStyle = {
  position: "relative",
};

export const dividerStyle = {
  position: "relative",
  width: "inherit",
  height: "8px",
  bgcolor: "#EBD8FF",
  boxShadow:
    "0px 3px 3px rgba(0, 0, 0, 0.1), inset 0px -2px 3px #AE7BE3, inset 0px 3px 3px #FBF8FF;",

  marginBottom: "35px",
};

export const avatarBorder = {
  display: "flex",
  webkitBoxAlign: "center",
  alignItems: "center",
  webkitBoxPack: "center",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80px",
  height: "80px",
  backgroundColor: "rgb(235, 216, 255)",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 4px, rgb(174, 123, 227) 0px -2px 4px inset, rgb(251, 248, 255) 0px 4px 3px inset",
  borderRadius: "50%",
};

export const avatarBoxStyle = {
  borderRadius: "50%",
  bgcolor: "primary.accent",
  overflow: "hidden",
};
