import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import ScrollMenus from "../../ScrollMenus";

const TopicsLnb = ({data}) => {

    return (
        <Container>
            <Nav>
                <NavItem>
                    <NavLink to={'/'}>
                        Editorial
                    </NavLink>
                </NavItem>

                <ScrollMenus data={data}
                             renderItem={(item, i) => (
                                 <NavItem key={i}>
                                     <NavLink to={`/topics/${item.slug}`}>
                                         {item.title}
                                     </NavLink>
                                 </NavItem>
                             )}
                />

                <NavItem>
                    <NavLink to={'/'}>
                        View all
                    </NavLink>
                </NavItem>
            </Nav>
        </Container>
    )
}

const Container = styled.div`

`;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled.div`

`;

const NavLink = styled(Link)`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 16px;

  &.isActive,
  &:hover {
    color: #111;
  }

  &.isActive {
    box-shadow: inset 0 -2px #111;
  }

`;

export default TopicsLnb;