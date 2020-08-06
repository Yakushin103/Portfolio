import React from 'react'
import { Row, Container } from 'reactstrap'
import './About.scss'

const About = ({ lang }) => {

    return (
        <div id='about' className='about'>
            <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className='about-content'>
                    <Row style={{ marginBottom: '1rem' }}>
                        <h3>
                            {
                                lang === 'eng' ? 'About me' : 'Обо мне'
                            }
                        </h3>
                    </Row>
                    <Row style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                        <span>
                            {
                                lang === 'eng' ? 'Hi, I`m Vasso - frontend developer from Rostov-on-Don.' :
                                    'Привет, я Василий - веб разработчик из Ростова-на-Дону.'
                            }
                        </span>
                        <span>
                            {
                                lang === 'eng' ? 'I`m interested in frontend and everything connected with it.' :
                                    'Я интересуюсь веб разработкой и всем что с этим связанно.'
                            }
                        </span>
                    </Row>
                    <Row style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                        <span>
                            {
                                lang === 'eng' ? 'I studied at course "Web developer".' :
                                    'Я учился на курсах "Веб разработчик".'
                            }
                        </span>
                        <span>
                            {
                                lang === 'eng' ? 'Then I did a few commercial projects.' :
                                    'Затем я выполнил несколько коммерческих проектов.'
                            }
                        </span>
                        <span>
                            {
                                lang === 'eng' ? 'And then I got a job in an IT company for the position web developer on React and Redux.' :
                                    'И затем я устроился в IT компанию на должность веб разработчика.'
                            }
                        </span>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                        <span>
                            {
                                lang === 'eng' ? 'Now Im working as a freelancer and help people create beautiful and interesting websites.' :
                                    'Сейчас я работаю фрилансером и помогаю людям создавать красивые и интересные сайты.'
                            }
                        </span>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default About;