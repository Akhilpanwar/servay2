import React, { useState } from "react";
import { StyledDiv, StyledSpan } from "../styles";
import  {survey } from "../survey";
import Designer from "../headercomponent/Designer/Designer";
import Logic from "../headercomponent/Logic";
import Preview from "../headercomponent/Preview";
import Jsoneditor from "../jsonEditor/jsoneditor";
import EmbededSurvey from "../headercomponent/EmbededSurvey";
import Translation from "../headercomponent/Translation";
import { useSelector,useDispatch } from "react-redux";
function Header() {
  const [component, setComponent] = useState(
    <Designer props={survey[0].content[0].forms} />
  );
const data=useSelector((state)=>state);
console.log(data)

  const handleClick = (item, index) => {
    switch (item.title) {
      case "Designer":
        setComponent(<Designer props={survey[0].content[0].forms} />);

        break;
      case "Preview":
        setComponent(<Preview />);
        break;
      case "Logic":
        setComponent(<Logic />);
        break;
      case "JsonEditor":
        setComponent(<Jsoneditor />);
        break;
      case "Embeded Survey":
        setComponent(<EmbededSurvey />);
        break;
      case "Translation":
        setComponent(<Translation />);
        break;
      default: {
        setComponent(<Designer />);
      }
    }
  };

  return (
    <StyledDiv>
      <StyledDiv DP="flex" BB="1px solid lightgrey" HG="8rem">
        <StyledDiv DP="flex" FD="row" WD="60%" JC="space-around">
          {survey.map((item, index) => {
            return (
              <StyledDiv
                FBB="2px solid rgb(25, 179, 148)"
                AS="end"
                FS="1rem"
                CUR="pointer"
                HBG="whiteSmoke"
                key={index}
                tabIndex="1234"
                PB="12px"
                PT="12px"
                onClick={(e) => handleClick(item)}
              >
                <StyledSpan PD="32px 32px" >{item.title}</StyledSpan>
              </StyledDiv>
            );
          })}
        </StyledDiv>
      </StyledDiv>
      <StyledDiv DP="flex" BG="#eee">{component}</StyledDiv>
    </StyledDiv>
  );
}

export default Header;
