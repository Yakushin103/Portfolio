import React from 'react'
import { Row, Container, Button } from 'reactstrap'
import whatsappImg from './../../img/whatsapp.svg'
import instagramImg from './../../img/instagram.svg'
import vkcomImg from './../../img/vkcom.svg'
import phoneImg from './../../img/phone.svg'
import './Contacts.scss'

const Contacts = ({ lang }) => {

    return (
        <div id='contacts' className='contacts'>
            <Container>
                <Row style={{ marginBottom: '1.5rem' }}>
                    <h3>
                        {
                            lang === 'eng' ? 'Contacts' : 'Контакты'
                        }
                    </h3>
                </Row>
                <Row style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                    <span>
                        {
                            lang === 'eng' ? 'Want to know more or just chat?' :
                                'Хотите узнать больше или начать чат?'
                        }
                    </span>
                    <span>
                        {
                            lang === 'eng' ? 'You are welcome!' :
                                'Добро пожаловать!'
                        }
                    </span>
                </Row>
                <Row style={{ marginBottom: '1.5rem' }} className='contacts-social' >
                    <a href='https://wapp.click/79888950008'>
                        <img style={{ height: '2rem' }} src={whatsappImg} alt='whatsapp-img'></img>
                    </a>
                    <a href='https://www.instagram.com/yakushin103/'>
                        <img style={{ height: '2rem' }} src={instagramImg} alt='instagram-img'></img>
                    </a>
                    <a href='https://vk.com/vasoyakushin103'>
                        <img style={{ height: '2rem' }} src={vkcomImg} alt='vkcom-img'></img>
                    </a>
                    <a href='tel:+79888950008'>
                        <img style={{ height: '2rem' }} src={phoneImg} alt='phone-img'></img>
                    </a>
                </Row>
                <Row className='contacts-text' style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                    <span>
                        {
                            lang === 'eng' ? 'Like me on' :
                                'Добавляйтесь ко мне'
                        }
                    </span>
                    <span>Instagram and Vk</span>
                    <span>
                        {
                            lang === 'eng' ? 'Or you can call or write me in whatsapp' :
                                'Или вы можете написать или позвонить мне в whatsapp'
                        }
                    </span>
                </Row>
            </Container>
        </div>
    )
}

export default Contacts;