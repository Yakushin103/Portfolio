import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
    Button
} from 'reactstrap';
import HeaderContent from './HeaderContent'
import './Header.scss';

const Header = ({ lang, setLang }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleScroll = (name) => {
        let elHeight = document.getElementById(name).getBoundingClientRect().y
        if (name === 'home') {
            window.scrollTo({ behavior: 'smooth', top: 0 })
        } else {
            window.scrollTo({ behavior: 'smooth', top: elHeight })
        }
    }

    return (
        <div id='home' className='header'>
            <Container>
                <Navbar style={{ borderBottom: '1px solid #828282' }} expand="md">
                    <NavbarToggler onClick={toggle}>
                        {
                            lang === 'eng' ? 'Menu' : 'Меню'
                        }
                    </NavbarToggler>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto header-nav" navbar>
                            <NavItem>
                                <Button onClick={() => handleScroll('home')}>
                                    {
                                        lang === 'eng' ? 'Home' : 'Главная'
                                    }
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button onClick={() => handleScroll('about')} >
                                    {
                                        lang === 'eng' ? 'About me' : 'Обо мне'
                                    }
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button onClick={() => handleScroll('skill')} >
                                    {
                                        lang === 'eng' ? 'Skills' : 'Навыки'
                                    }
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button onClick={() => handleScroll('portfolio')} >
                                    {
                                        lang === 'eng' ? 'Portfolio' : 'Портфолио'
                                    }
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button onClick={() => handleScroll('contacts')} >
                                    {
                                        lang === 'eng' ? 'Contacts' : 'Контакты'
                                    }
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <HeaderContent
                    lang={lang}
                    setLang={setLang}
                />
            </Container>
        </div >
    );
}

export default Header;