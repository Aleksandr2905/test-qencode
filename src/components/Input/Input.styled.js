import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputLayout = styled.input`
  border: 1.2px solid #d3d8dc;
  border-radius: 6px;
  padding: 0px 12px;
  width: 100%;
  height: 48px;
`;

export const Errors = styled.p`
  position: absolute;
  font: 500 14px / 143% "BasisGrotesquePro-Medium", sans-serif;
  color: red;
`;
