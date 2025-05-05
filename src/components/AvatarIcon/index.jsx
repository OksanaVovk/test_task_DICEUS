import { AvatarBox } from "./AvatarIconStyled";

export const AvatarIcon = ({ text, width, height, fontSize = 18 }) => {
  let avatarsText = "";
  const avatarArray = text.toUpperCase().split(" ");

  if (avatarArray.length === 1) {
    avatarsText = avatarArray[0].slice(0, 2);
  } else {
    avatarsText = avatarArray
      .map((word) => word[0])
      .slice(0, 2)
      .join("");
  }

  return (
    <AvatarBox width={width} height={height} fontSize={fontSize}>
      {avatarsText}
    </AvatarBox>
  );
};
