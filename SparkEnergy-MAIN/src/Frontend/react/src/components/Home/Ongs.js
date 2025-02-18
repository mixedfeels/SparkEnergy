import LayoutONG from "../ongs-components/layoutONGs";
import LayoutPessoas from "../ongs-components/layoutPessoas";
import LayoutProf from "../ongs-components/layoutProf";
import styled from "styled-components";

const OngsContainer = styled.div`
  background-color: #010201;
  & > * + * {
    margin-top: 5rem;
  }
`;

function Ongs() {
  return (
    <OngsContainer>
      <div>
        <LayoutONG></LayoutONG>
      </div>
      <LayoutPessoas></LayoutPessoas>
      <LayoutProf></LayoutProf>
    </OngsContainer>
  );
}

export default Ongs;
