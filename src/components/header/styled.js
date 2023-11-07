import styled from "styled-components";

export const DivHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.3rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border: none;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(13.5px);

  a {
    font-size: 1.15rem;
    color: white;
    text-decoration: none;
    font-weight: 500;
    margin-left: 2.5rem;
    transition: 0.5s ease;
    cursor: pointer;
    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 1rem;
    }
    &:hover {
      color: #00ff00;
      opacity: 5;
    }
  }

  label {
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
      display: block;
    }

    i {
      background-color: white;
      height: 2px;
      width: 25px;
      display: block;
      margin: 5px 0;
      transition: 0.4s;
    }
  }

  nav {
    @media (max-width: 768px) {
      display: none;
      &.open {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        padding: 1rem 0;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
        backdrop-filter: blur(12.5px);
        -webkit-backdrop-filter: blur(13.5px);
      }
    }
  }
`;

export const HeaderWithBefore = styled(DivHeader)`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12.5px);
    z-index: -1;
  }
`;

export const Name = styled.a`
  font-size: 2rem;
  color: white;
  text-decoration: none;
  font-weight: 520;
`;
