import React from 'react'
import { Row, Container, Col } from 'reactstrap'
import reactImg from './../../img/react.svg'
import reduxImg from './../../img/redux.svg'
import mongoImg from './../../img/mongodb.svg'
import nodeImg from './../../img/node.svg'
import htmlImg from './../../img/html.svg'
import cssImg from './../../img/css.svg'
import bootstrapImg from './../../img/bootstrap.svg'
import githubImg from './../../img/github.svg'
import starImg from './../../img/Star.png'
import starImgEmpty from './../../img/StarEmpty.png'
import './Skills.scss'

const Skills = ({ lang }) => {

    return (
        <div id='skill' className='skills'>
            <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Row style={{ marginBottom: '1.5rem' }}>
                    <h3>
                        {
                            lang === 'eng' ? 'Skills' : 'Навыки'
                        }
                    </h3>
                </Row>
                <Row className='skills-text' style={{ marginBottom: '1.5rem' }}>
                    <span style={{ textAlign: 'center' }}>
                        {
                            lang === 'eng' ? 'I using in work' :
                                'Я использую в работе'
                        }
                    </span>
                </Row>
                <Row className='skills-items'>
                    <Col style={{ width: '25%' }} className='skills-item'>
                        <div>
                            <img style={{ width: '100%' }} src={reactImg} alt='React-img'></img>
                        </div>
                        <div>
                            <span>React</span>
                        </div>
                        <div className='skills-stars'>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                        </div>
                    </Col>
                    <Col style={{ width: '25%' }} className='skills-item'>
                        <div>
                            <img style={{ width: '100%' }} src={reduxImg} alt='Redux-img'></img>
                        </div>
                        <div>
                            <span>Redux</span>
                        </div>
                        <div className='skills-stars'>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImgEmpty} alt='star-empty'></img>
                        </div>
                    </Col>
                    <Col style={{ width: '25%' }} className='skills-item'>
                        <div>
                            <img style={{ width: '100%' }} src={mongoImg} alt='MongoDB-img'></img>
                        </div>
                        <div>
                            <span>MongoDB</span>
                        </div>
                        <div className='skills-stars'>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImgEmpty} alt='star-empty'></img>
                        </div>
                    </Col>
                    <Col style={{ width: '25%' }} className='skills-item'>
                        <div>
                            <img style={{ width: '100%' }} src={nodeImg} alt='Sass-img'></img>
                        </div>
                        <div>
                            <span>Sass</span>
                        </div>
                        <div className='skills-stars'>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                        </div>
                    </Col>
                </Row>
                <Row className='skills-items'>
                    <Col style={{ width: '25%' }} className='skills-item'>
                        <div>
                            <img style={{ width: '100%' }} src={htmlImg} alt='HTML5-img'></img>
                        </div>
                        <div>
                            <span>HTML 5</span>
                        </div>
                        <div className='skills-stars'>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                        </div>
                    </Col>
                    <Col style={{ width: '25%' }} className='skills-item'>
                        <div>
                            <img style={{ width: '100%' }} src={cssImg} alt='CSS3-img'></img>
                        </div>
                        <div>
                            <span>CSS 3</span>
                        </div>
                        <div className='skills-stars'>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                        </div>
                    </Col>
                    <Col style={{ width: '25%' }} className='skills-item'>
                        <div>
                            <img style={{ width: '100%' }} src={bootstrapImg} alt='bootstrap-img'></img>
                        </div>
                        <div>
                            <span>Bootstrap 4</span>
                        </div>
                        <div className='skills-stars'>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                        </div>
                    </Col>
                    <Col style={{ width: '25%' }} className='skills-item'>
                        <div>
                            <img style={{ width: '100%' }} src={githubImg} alt='github-img'></img>
                        </div>
                        <div>
                            <span>GitHub</span>
                        </div>
                        <div className='skills-stars'>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                            <img src={starImg} alt='star'></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skills;