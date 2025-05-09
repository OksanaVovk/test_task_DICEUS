import data from "../../data/communication.json";
import { ButtonBackground } from "../ButtonBackground";
import {
  Title,
  StatusBox,
  Text1,
  RowBox,
  Text2,
  StyledSvg,
  StyledButton,
  ColumnBox,
  GridBox,
  SearchBox,
} from "./CommunicationStyle";
import { SearchField } from "../SearchField";
import { ButtonFilter } from "../ButtonFilter";

export const Communication = () => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Title>Communication</Title>
      <ColumnBox
        style={{
          gap: "20px",
          border: "1px solid #313b54",
          backgroundColor: "#1E2233",
        }}
      >
        <RowBox>
          <SearchBox>
            <SearchField background="#232838" />
          </SearchBox>
          <ButtonFilter width={99} height={27} text="Filter" />
          <ButtonFilter width={99} height={27} text="Group" />
        </RowBox>
        <GridBox>
          {data.map((item) => (
            <ColumnBox isBordered={item.status === "NEW"} key={item.title}>
              <RowBox>
                {item.status !== "" && <StatusBox>{item.status}</StatusBox>}
                <Text1>{item.title}</Text1>
              </RowBox>
              <Text2>
                {item.author} // {item.date}
              </Text2>
              <Text2 isHighlighted>{item.text}</Text2>
              {item.isAttachments && (
                <StyledButton>
                  <StyledSvg>
                    <use href="/icons.svg#icon-clip" />
                  </StyledSvg>
                  <p>{item.attachments} attachments</p>
                </StyledButton>
              )}
              {item.reply && (
                <ButtonBackground text="Reply" width={121} height={40} />
              )}
            </ColumnBox>
          ))}
        </GridBox>
      </ColumnBox>
    </div>
  );
};
