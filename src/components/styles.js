import styled from "styled-components";
export const StyledDiv = styled.div`
  display: ${(props) => props.DP};
  position: ${(props) => props.POT};
  flex-direction: ${(props) => props.FD};
  justify-content: ${(props) => props.JC};
  height: ${(props) => props.HG};
  align-items: ${(props) => props.AI};
  align-self: ${(props) => props.AS};
  width: ${(props) => props.WD};
  border-bottom: ${(props) => props.BB};
  font-size: ${(props) => props.FS};
  background: ${(props) => props.BG};
  margin-left: ${(props) => props.ML};
  padding-bottom: ${(props) => props.PB};
  padding-top: ${(props) => props.PT};
  text-align: ${(props) => props.TA};
  &:hover {
    cursor: ${(props) => props.CUR};
    background: ${(props) => props.HBG};
  }
  &:focus {
    font-weight: 300;
    border-bottom: ${(props) => props.FBB};
  }
`;
export const StyledSpan = styled.span`
  padding: ${(props) => props.PD};
  padding-bottom: ${(props) => props.PB};
  font-size: ${(props) => props.FS};
`;

export const StyledUl = styled.ul`
padding-inline-start:${(props)=>props.PIS};
margin-block-start:${(props)=>props.MBS};
`;
export const StyledLi = styled.li`
  list-style: none;
  height: ${(props) => props.HG};
  width: ${(props) => props.WD};

  height: 40px;

  white-space: ${(props) => props.WS};
  padding-left: 1rem;
  padding-right: 2rem;
  border-radius: ${(props) => props.BR};

  &:hover {
    background-color: ${(props) => props.HBG};
    box-shadow: ${(props) => props.HBS};
    height: 40px;

    padding-left: 1rem;
    cursor: default;
    transition: padding-right;
  }
  i {
    font: 1em/1 "rokkitt", sans-serif;
  }
  b {
    color: grey;

    display: inline-block;

    padding: 0.675em 0.175em;
  }

  &:hover b {
    color: rgb(25, 179, 148);
  }
`;
