import { useEffect, useState } from "react";
import { getUsers, updateUser } from "../../services/api";
import { Container } from "../App.styled";
import ToTopBtn from "./../ToTop/ToTopBtn";
import { Box } from "@mui/material";
import { TweetsList } from "./TweetsList";
import { centredItemsStyles } from "./Tweets.styled";
import LoadMore from "./../LoadMore/LoadMore";

const isSameUser = (a, b) => a.id === b.id;

const compareArr = (arrA, arrB, compareFunction) =>
  arrA.filter(
    (arrAValue) =>
      !arrB.some((arrBValue) => compareFunction(arrAValue, arrBValue))
  );

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [filter] = useState("Show all");
  const [following, setFollowings] = useState([]);
  const [page, setPage] = useState(1);
  const [indexLimit, setIndexLimit] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getUsers(page);

      setUsers((prevUsers) => {
        const newUser = data.map((user) => {
          if (following.includes(user.id)) {
            return { ...user, isFollow: true };
          } else {
            return { ...user, isFollow: false };
          }
        });

        const compareUsers = compareArr(prevUsers, data, isSameUser);

        return [...compareUsers, ...newUser];
      });

      setIsLoading(false);
    };
    fetchData();
  }, [page, following]);

  const handleFollow = async (userId) => {
    setFollowings((prevFollowings) => {
      const index = prevFollowings.indexOf(userId);

      setUsers((prevUsers) =>
        prevUsers.map((user) => {
          if (user.id === userId) {
            user.isFollow = !user.isFollow;
            user.followers = user.isFollow
              ? user.followers + 1
              : user.followers - 1;
          }
          return user;
        })
      );

      if (index === -1) {
        return [...prevFollowings, userId];
      } else {
        prevFollowings.splice(index, 1);
        return [...prevFollowings];
      }
    });

    const [user] = users.filter((user) => user.id === userId);
    updateUser(userId, user.followers);
  };

  const handleChangePage = () => {
    setPage((prevPage) => prevPage + 1);
    setIndexLimit((prevIndexLimit) => prevIndexLimit + 9);
    // setTotalHits((prevTotalHits) => prevTotalHits - 9);
  };

  const filtredUsers = users
    .filter((user) => {
      if (filter === "Follow") return !user.isFollow;
      if (filter === "Followings") return user.isFollow;

      return user;
    })
    .sort((a, b) => a.id - b.id)
    .splice(0, indexLimit);

  return (
    <Container>
      <Box sx={{ ...centredItemsStyles, flexDirection: "column" }}>
        {users && <TweetsList users={filtredUsers} onClick={handleFollow} />}
        <LoadMore loading={isLoading} onClick={handleChangePage} />
        <ToTopBtn />
      </Box>
    </Container>
  );
};

export default Tweets;
