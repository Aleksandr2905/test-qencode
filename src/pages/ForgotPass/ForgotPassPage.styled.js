import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonCancel = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 8px;
  width: 400px;
  height: 48px;
  border: 1.2px solid #d3d8dc;
  text-align: center;
  font: 500 16px / 131% "BasisGrotesquePro-Medium", sans-serif;
  background-color: #fff;
  color: #316fea;
`;
