import styled from "styled-components";

export const Col = styled.div`
  display: grid;
  grid-gap: ${(props) => props.gap ? props.gap : 25};
  gap:  ${(props) => props.gap ? props.gap : 25};
  grid-template-columns: repeat(
    ${(props) => (props.cols ? props.cols : 5)},
    minmax(0, 1fr)
  );

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      ${(props) => (props.responsive ? props.responsive : 1)},
      minmax(0, 1fr)
    );
  }
`;

export const Row = styled.div`
  display: grid;
  grid-gap: ${(props) => props.gap ? props.gap : 25};
  gap:  ${(props) => props.gap ? props.gap : 25};
  grid-template-rows: repeat(
    ${(props) => (props.rows ? props.rows : 5)},
    minmax(0, 1fr)
  );

  @media (max-width: 768px) {
    grid-template-rows: repeat(
      ${(props) => (props.responsive ? props.responsive : 1)},
      minmax(0, 1fr)
    );
  }
`;
