import React from 'react';
import { Row, Container } from 'reactstrap'
import './Portfolio.scss';

const Portfolio = ({ lang }) => {

    return (
        <div id='portfolio' className='portfolio'>
            <Container>
                <Row style={{ paddingTop: '2rem', marginBottom: '1rem' }}>
                    <h3>
                        {
                            lang === 'eng' ? 'Portfolio' :
                                'Портфолио'
                        }
                    </h3>
                </Row>
                <Row>
                    <span>
                        {
                            lang === 'eng' ? 'This section is in progress' :
                                'Данная секция находится в прогрессе'
                        }
                    </span>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;