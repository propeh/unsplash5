import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {Link} from "react-router-dom";
import {IconDots} from "../../../../icons";

const Menu = () => {

    const menu = [
        {
            name: 'About',
            to: '/about'
        },
        {
            name: 'Wallpapers',
            to: '/wallpapers'
        },
        {
            name: 'Topics',
            to: '/topics'
        },
        {
            name: 'Collections',
            to: '/collections'
        },
        {
            name: 'Community',
            to: '/community'
        },
        {
            name: 'History',
            to: '/history'
        },
    ]

    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(v => !v)
    }
    return (
        <Container>
            <ButtonMenu onClick={onClick}>
                <IconDots/>
            </ButtonMenu>

            <Navigation className={cn({isOpen})}>
                {
                    menu.map((item, index) => (
                        <NavLink key={index} to={item.to}>
                            {item.name}
                        </NavLink>
                    ))
                }
            </Navigation>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
`;

const ButtonMenu = styled.div`
  padding: 12px;
  cursor: pointer;
  transition: 0.2s;
  svg {
    fill: #767676;
  }
  &:hover {
    svg {
      fill: #111;
    }
  }
`;

const Navigation = styled.nav`
  background: #111;
  width: 255px;
  padding: 8px 0;
  border-radius: 4px;
  position: absolute;
  top: 100%;
  left: 0;
  opacity: 0;
  transform: scale(0);
  transition: 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: 14px 0;
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 14px;
    background:#111;
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
  }
  &.isOpen {
    opacity: 1;
    transform: none;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  height: 38px;
  padding: 0 16px;
  transition: 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export default Menu;