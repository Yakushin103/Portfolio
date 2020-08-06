import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import ImgContent from './../../img/header-img.png'

const HeaderContent = ({ lang, setLang }) => {

    const handleLang = (name) => {
        setLang(name)
    }

    return (
        <div className='header-content'>
            <Row className='header-content-items'>
                <Col style={{ width: '25%' }}>
                    <h2>
                        {
                            lang === 'eng' ? 'Vasso Yakushin' : 'Василий Якушин'
                        }
                    </h2>
                </Col>
                <Col style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                    <span>
                        {
                            lang === 'eng' ? 'Frontend developer' : 'Фронтенд разработчик'
                        }
                    </span>
                    <span>
                        {
                            lang === 'eng' ? '30 years ago, Rostov-on-Don' : '30 лет, Ростов-на-Дону'
                        }
                    </span>
                </Col>
                <Col style={{ width: '25%' }} className='vertical-button'>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Button className={lang === 'eng' ? 'choosed' : null} onClick={() => { handleLang('eng') }}>Eng</Button>
                        <Button className={lang === 'ru' ? 'choosed' : null} style={{ borderRight: '1px solid #070707', borderRadius: '0' }} onClick={() => { handleLang('ru') }}>Ru</Button>
                    </div>

                </Col>
            </Row>
            <Row>
                <img src={ImgContent}></img>
            </Row>
        </div>
    )
}

export default HeaderContent;