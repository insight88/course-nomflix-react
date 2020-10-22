import React from "react"
import { Link, withRouter } from "react-router-dom";
// * withRouter : 다른 component를 wrapping하는 component (고차원 component)
// * withRouter는 내부 component에 props를 전달
import styled from "styled-components"

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;


const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// * react-router-dom의 Link를 style할 때는 styled(Link)

export default withRouter(({ location: { pathname } }) => (
  // * props.location.pathname에 Router가 가리키는 주소가 있다
  <Header>
    <List>
      <Item current={pathname === '/'}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === '/tv'}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === '/search'}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));

// * export default () => () : implicit return
// * export default () => {} : doesn't, so return statement is needed