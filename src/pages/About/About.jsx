import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Divider from '../../components/Divider'

const About = () => {
    const classes = [
        `bg-light py-5`,
        `ml-3 text-info`
    ]
    return (
        <>
            <section className={classes[0]} id="about-me">
                <Container className="p-5">
                    <Divider
                        sectionName="About me"
                        textColor="info" />
                    <Row >
                        <Col lg={8} className={classes[1]}>
                            <p>
                                It was the year 2018. I finally was able to dive back into the programming world having a considerable amount of time for my development . It was the year when I felt the need for real dive into programming, which until then has appeared in my life from time to time in different forms.                            </p>
                            <p>
                                I discovered the Edx portal and realized that this is exactly the way to learn That I had read about in the famous book "A revolution in learning" years ago. And it was an aha moment for me that I just had no choice but to take advantage of it
                            </p>
                            <p>
                                In the era of unbelievably rapid technological development, which entails changes in programming techniques, the traditional teaching model does not seem to suit, and for people working full time is just impossible to become a part of it. After thorough research, I chose the curriculum that suited me best. I was impressed by the fact that the program was prepared by an institution such as Microsoft, which means it is undoubtedly made by practitioners rather than theoreticians.Certain path, stages and certificates made it even more attractive. So without hesitation I started my "studies". Week by week I was more and more addicted to it.. My life was practically limited to work and study. In the meantime, I also came across the iconic CS50 course from Harvard, also available as part of edx.                            </p>
                            <p>
                                Being seriously drawn into the topic, I came across more educational platforms and the courses they offer. On my educational path, starting from Scratch, I went through, among others, C, Java, Python, HTML, CSS, Javascript and over time I became convinced that what interests me the most are web technologies. Their versatility, range and possibilities that they bring today compared to what it looked like years ago seem to be endless.                            </p>
                            <p>
                                In fact, my first contact with programming took place when I got my first "computer" which was the iconic C64. Surprisingly, I did not start playing games like a maniac as the vast majority of my colleagues did. I was more enamored that by writing a set of various commands in BASIC I can force the machine to do various strange things.
                            </p>
                            <p>
                                Then in a more adult life for many years I was usually close with computers, managing local or wide area networks. I had to deal with a popular database programming language called Clipper, used to create modules producing various types of reports which today is known under the concept of Data Science;-) I made computers work in various ways such as supporting businesses of all sorts such as trade, services or even managing production. I employed them to control CCTV systems, film and music production. Eventually I came to the point where I realized that it was time for a break ... which lasted until 2018, when I felt the need to return to the industry. And I made it and now looking forward to new challenges.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About
