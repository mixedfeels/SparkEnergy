import styled from "styled-components";

const ProgressContainer = styled.div`
  background-color: var(--line-border-fill);
  position: absolute;
  top: 50%;
  left: 0;
  width: ${({ $progress }) =>
    $progress >= 0 && $progress <= 100 ? `${$progress}%` : "0%"};
  transform: translateY(-50%);
  height: 4px;
  z-index: 1;
  transition: all 0.8s ease-in;
`;

const ProgressContainer2 = styled.div`
  height: 4px;
  background: #005700;
  width: ${({ $progress }) => `${$progress}%`};
  transition: all 0.4s ease-in;
`;

function Progress({ totalSteps, step }) {
  const progress = ((step - 1) / totalSteps) * 130; // Garantir que o valor esteja em % (0-100)

  return (
    <ProgressContainer $progress={progress}>
      <ProgressContainer2 $progress={progress} />
    </ProgressContainer>
  );
}

export default Progress;
