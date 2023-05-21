import { createPortal } from "react-dom";
import { CirclesItem } from "./BgCircle.styled";
const bgRoot = document.querySelector("#bg-root");

export const BgCircle = () => {
  return createPortal(
    <>
      <ul>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
      </ul>
    </>,
    bgRoot
  );
};
