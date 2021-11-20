import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const NavBarCom = () => {
    return (
        <div>
            <Navbar stcky='top' bg='warning' variant='dark'>
                <Container>
                    <Navbar.Brand href='#home'>User List</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarCom

