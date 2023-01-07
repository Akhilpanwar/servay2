import React, { useEffect } from "react";

import { StyledDiv } from "../styles";
import { survey } from "../survey";
function Jsoneditor() {
  



const  data=JSON.stringify(survey, null, 1)

  return (
    <StyledDiv>
  <pre>
    {data}
    </pre>
    
    </StyledDiv>
  );
}

export default Jsoneditor;
