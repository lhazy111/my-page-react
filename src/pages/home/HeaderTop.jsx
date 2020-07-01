import React from 'react'
import { Image, Container } from 'react-bootstrap'
import avatar from './avataaars.png';


const HeaderTop = () => {
    return (
        <div className="h=100">
            <header className="masthead bg-primary text-white text-center" id="page-top">
                <Container
                    className="d-flex align-items-center flex-column"
                >
                    <Image className="masthead-avatar mb-5" src={avatar} />
                    <h1 className="masthead-heading mb-0">Welcome</h1>
                    <p className="pre-wrap masthead-subheading font-weight-light mb-0">HTML_CSS_JS_BOOTSTRAP...
            </p>
                </Container>

            </header>
        </div>
    )
}

export default HeaderTop
