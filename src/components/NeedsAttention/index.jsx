import { LinkTo } from "../LinkTo";
import {
  FlexBox1,
  FlexBox2,
  FlexBox3,
  FlexBox4,
  Text1,
  Text2,
  Title,
  StyledSvg,
} from "./NeedsAttentionStyled";
export const NeedsAttention = () => {
  return (
    <FlexBox1>
      <FlexBox2>
        <StyledSvg>
          <use href="/icons.svg#icon-attention" />
        </StyledSvg>
        <Title>Needs Attention</Title>
      </FlexBox2>
      <FlexBox3>
        <FlexBox4>
          <Text1>Marine Survey Required</Text1>
          <Text2>Scheduled for 06/12/2025</Text2>
          <LinkTo text="Review details link" />
        </FlexBox4>
        <FlexBox4>
          <Text1>Loss Control Complete</Text1>
          <Text2>Last insprection02/15/2025</Text2>
          <LinkTo text="View report" />
        </FlexBox4>
        <FlexBox4>
          <Text1>Claims Review Required</Text1>
          <Text2>3 open claims // $245.000 TTL</Text2>
          <LinkTo text="View claims" />
        </FlexBox4>
      </FlexBox3>
    </FlexBox1>
  );
};
