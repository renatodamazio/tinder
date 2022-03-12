import styled from "styled-components";

export const GridColumn = styled.div`
  display: grid;
  grid-gap: ${(props) => props.gap ? props.gap : 25};
  gap:  ${(props) => props.gap ? props.gap : 25};
  grid-template-columns: repeat(
    ${(props) => (props.columns ? props.columns : 5)},
    minmax(0, 1fr)
  );

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      ${(props) => (props.responsive ? props.responsive : 1)},
      minmax(0, 1fr)
    );
  }
`;