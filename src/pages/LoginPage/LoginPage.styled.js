import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1.2px solid #d3d8dc;
  border-radius: 6px;
  padding: 0px 20px;
  width: 100%;
  height: 48px;
  background-color: #fff;
  font: 500 14px / 143% "BasisGrotesquePro-Medium", sans-serif;
  color: #060e1e;
`;

export const Lines = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #e3e6e9;
`;

export const Word = styled.div`
  margin: 0 5px;
  font: 500 12px / 133% "BasisGrotesquePro-Medium", sans-serif;
  color: #bec5cc;
`;

export const FormaWrap = styled.form`
  display: flex;
  flex-direction: column;
  > :nth-child(2) {
    margin-top: 25px;
  }
`;

export const ForgotPass = styled(Link)`
  margin-top: 15px;
  font: 500 14px / 143% "BasisGrotesquePro-Medium", sans-serif;
  text-align: right;
  color: #316fea;
`;

export const TextSignUp = styled.p`
  font: 400 14px / 143% "BasisGrotesquePro-Medium", sans-serif;
  letter-spacing: 0.01em;
  text-align: center;
  color: #060e1e;
`;

export const LinkSignUp = styled(Link)`
  font: 500 14px / 143% "BasisGrotesquePro-Medium", sans-serif;
  color: #316fea;
`;
