import styled from "@emotion/styled";
import { ArrowBackIosNewRounded, HomeRounded } from "@mui/icons-material"; // Import HomeRounded icon
import { useNavigate } from "react-router-dom";
import { getFontColor } from "../utils";
import { IconButton } from "@mui/material";

interface TopBarProps {
  title: string;
}

export const TopBar = ({ title }: TopBarProps) => {
  const n = useNavigate();
  return (
    <Container>
      <BackBtn size="large" onClick={() => n(-1)} onDoubleClick={() => n("/")}>
        <ArrowIcon />
      </BackBtn>
      <HomeBtn size="large" onClick={() => n("/")}> {/* Add Home icon button */}
        <HomeIcon />
      </HomeBtn>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background-color: ${({ theme }) => theme.secondary + "c1"};
  margin-bottom: 48px;
`;

const ArrowIcon = styled(ArrowBackIosNewRounded)`
  color: ${({ theme }) => getFontColor(theme.secondary)};
`;

const HomeIcon = styled(HomeRounded)` // Style for Home icon
  color: ${({ theme }) => getFontColor(theme.secondary)};
`;

const Title = styled.h2`
  font-size: 28px;
  margin: 0 auto;
  text-align: center;
  padding: 4px 0 8px 0;
  text-shadow: 0 0 24px #00000068;
`;

const BackBtn = styled(IconButton)`
  position: absolute;
  color: ${({ theme }) => getFontColor(theme.secondary)};
  left: 16px;
`;

const HomeBtn = styled(IconButton)` // Style for Home button
  position: absolute;
  color: ${({ theme }) => getFontColor(theme.secondary)};
  right: 16px;
`;
