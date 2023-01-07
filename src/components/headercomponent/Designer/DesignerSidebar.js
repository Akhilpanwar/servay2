import React from "react";
import { StyledDiv, StyledLi, StyledUl, StyledSpan } from "../../styles";


function DesignerSidebar({ props }) {
  return (
    <StyledDiv DP="flex" AS="flex-start" TA="left">
    <StyledUl DP="flex"
    FD="column"
    JC="space-around"
    PIS="0.6rem"
    MBS="2px"
    >
      {props.map((item, index) => {
        return (
          <StyledLi
        WD="max-content"
            BR="24px"
            WS="nowrap"
            HBG="white"
            HBS="0px 2px 6px rgb(0 0 0 / 10%)"
          >
            <b>{item.icons}</b>

            <i>{item.title}</i>
          </StyledLi>
        );
      })}
    </StyledUl>
    </StyledDiv>
  );
}

export default DesignerSidebar;
