import React from "react";
import { StyledDiv } from "../../styles";

import DesignerSidebar from "./DesignerSidebar";
import DesignerCenter from "./DesignerCenter";
function Designer({ props }) {
  return (
    <StyledDiv DP="flex" AS="flex-start" TA="left">
      <DesignerSidebar props={props} />
      <DesignerCenter />
    </StyledDiv>
  );
}

export default Designer;
