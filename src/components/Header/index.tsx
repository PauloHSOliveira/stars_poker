import React from 'react';

import { HeaderContainer, Logo, Nav, List, ListItem } from './StyledComponents';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />

      <Nav>
        <List>
          <ListItem>teste</ListItem>
        </List>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
