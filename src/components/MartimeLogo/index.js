import Image from "next/image";
import {
  ImageBox,
  Title,
  Text,
  TextUpper,
  FlexBox3,
  FlexBox4,
  FlexBox2,
  FlexBox1,
} from "./MartimeLogoStyled";
export const MartimeLogo = () => {
  return (
    <FlexBox1>
      <ImageBox>
        <Image
          src="/Logo_1x.webp"
          alt="logo"
          width={102}
          height={102}
          srcSet="/Logo_1x.webp 1x,/Logo_2x.webp 2x"
          style={{ width: "100%", height: "auto" }}
        />
      </ImageBox>
      <FlexBox2>
        <Title>Maritime Logistics Corp</Title>
        <FlexBox3>
          <FlexBox4>
            <Text>
              425 Harbor Boulevard, Suite 300<br></br>Seattle, WA 98104
            </Text>
          </FlexBox4>
          <FlexBox4>
            <TextUpper>Existing account</TextUpper>
            <Text>54383</Text>
          </FlexBox4>
          <FlexBox4>
            <TextUpper>Broker</TextUpper>
            <Text>Marsh McLennen</Text>
          </FlexBox4>
          <FlexBox4>
            <TextUpper>Underwriter</TextUpper>
            <Text>Kate Johnson</Text>
          </FlexBox4>
        </FlexBox3>
      </FlexBox2>
    </FlexBox1>
  );
};
