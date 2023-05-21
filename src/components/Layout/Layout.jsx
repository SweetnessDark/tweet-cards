import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Main, Wrapper } from "./Layout.styled";
import { Container } from "./../App.styled";
import { BgCircle } from "./../BgCircle/BgCircle";

const Layout = () => {
  return (
    <>
      <Main>
        <Container>
          <Wrapper>
            <Suspense fullback={null}>
              <Outlet />
            </Suspense>
          </Wrapper>
        </Container>
      </Main>
      <BgCircle />
    </>
  );
};

export default Layout;
