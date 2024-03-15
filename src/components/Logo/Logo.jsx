import logo from "../../assets/icons/Vector.svg";
import { LogoWrapper } from "./Logo.styled";

export const Logo = () => {
  return (
    <LogoWrapper>
      <svg width="179" height="32">
        <use href={`${logo}#Vector`} />
      </svg>
    </LogoWrapper>
  );
};
