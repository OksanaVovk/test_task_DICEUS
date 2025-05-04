import { AvatarBox } from "./AvatarStyled";

export const Avatar = ({ text, width, height, fontSize = 16 }) => {
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
