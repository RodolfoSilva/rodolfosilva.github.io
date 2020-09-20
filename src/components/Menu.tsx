import Link from 'next/link';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import useWindowSize from '../hooks/use-window-size';
import GitHubIcon from './GithubIcon';
import TwitterIcon from './TwitterIcon';

const OpenMenuButton = styled.button`
  display: block;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }

  color: #fff;

  &:hover,
  &:focus,
  &:active {
    color: #08bebf;
    outline: none;
  }

  height: 32px;
  width: 32px;

  border: 0;
  background-color: transparent;

  position: absolute;
  right: 22px;
  top: 22px;

  > span,
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    background-color: currentColor;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 4px;
  }

  > span {
    bottom: 50%;
    top: 50%;
    clip: unset;
    clip-path: unset;
    transform: translateY(-50%);
    width: 80%;
    margin-left: 10%;
    font-size: 0;
  }

  &::before {
    bottom: 4px;
  }

  &::after {
    top: 4px;
    right: 0;
  }
`;

const CloseMenuButton = styled.button`
  color: #fff;
  display: block;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }

  &:hover,
  &:focus,
  &:active {
    color: #08bebf;
    outline: none;
  }

  height: 48px;
  width: 48px;

  border: 0;
  background-color: transparent;

  position: absolute;
  right: 16px;
  top: 16px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: currentColor;
    display: block;
    width: 3px;
    height: 100%;
  }

  &::before {
    transform: rotate(45deg) translate(16px, -16px);
  }
  &::after {
    transform: rotate(-45deg) translate(16px, 16px);
  }
`;

interface NavigationProps {
  isOpen: boolean;
}

const Navigation = styled.nav<NavigationProps>`
  grid-area: nav;
  ${({ isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};
  `}
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(165deg, #36116a, #51199f);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    align-self: stretch;
    li > a {
      display: block;
      padding: 16px;
      font-size: 2rem;
      color: #fff;
      font-weight: 300;
      text-decoration: none;
      &:hover,
      &:focus,
      &:active {
        color: #08bebf;
        /* color: #FFC500; */
      }
    }
  }

  @media (min-width: 992px) {
    position: relative;
    background: transparent;
    ul {
      display: flex;
    }
    ul > li > a {
      font-size: 1rem;
    }
  }
`;

const MIN_DESKTOP_WIDTH = 992;

export default function Menu() {
  const { width } = useWindowSize();
  const [isDisplayLarge, setIsDisplayLarge] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => setIsOpen(true);
  const handleCloseClick = () => setIsOpen(false);

  React.useEffect(() => {
    setIsDisplayLarge(width >= MIN_DESKTOP_WIDTH);
  }, [width]);

  return (
    <>
      <OpenMenuButton
        aria-hidden={isDisplayLarge}
        aria-label="Abrir o menu"
        onClick={handleOpenClick}
      >
        <span className="sr-only">Abrir menu</span>
      </OpenMenuButton>
      <Navigation
        aria-hidden={!isOpen || isDisplayLarge}
        isOpen={isOpen || isDisplayLarge}
      >
        <CloseMenuButton
          aria-hidden={isDisplayLarge}
          aria-label="Fechar o menu"
          onClick={handleCloseClick}
        >
          <span className="sr-only">Fechar o menu</span>
        </CloseMenuButton>
        <ul>
          <li>
            <Link href="/">
              <a aria-label="Ir para página inicial" title="Início">
                Início
              </a>
            </Link>
          </li>
          <li>
            <Link href="/curriculo">
              <a aria-label="Veja o meu Currículo" title="Currículo">
                Currículo
              </a>
            </Link>
          </li>
          <li>
            <a
              href={`https://github.com/rodolfosilva`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Veja o meu Github"
              title="Veja o meu GitHub"
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a
              href={`https://twitter.com/ro_dolfosilva`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Veja o meu Twitter"
              title="Veja o meu Twitter"
            >
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </Navigation>
    </>
  );
}
