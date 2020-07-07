import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Divider from '../../components/Divider'

const About = () => {
    const classes = [
        `page-section mb-0 bg-info`,
        `ml-3 text-info`
    ]
    return (
        <div>
            <section className={classes[0]} id="about-me">
                <Container className="bg-danger p-5 rounded section-shadow">
                    <Divider
                        sectionName="About me"
                        textColor="info" />
                    <Row >
                        <Col lg={8} className={classes[1]}>
                            <p>
                                Yeeees! ! 2018 was the year when I finally was able to dive back into the programming world having a considerable amount of time for my development . It was the year in which I felt the need for real dive into programming, which until then has appeared in my life from time to time in different shapes.
                            </p>
                            <p>
                                I discovered the Edx portal and realized that this is exactly the way to learn about which I read in the famous book "A revolution in learning" years ago. And it was a-ha moment for me that I just have no choice but to take advantage of it
                            </p>
                            <p>
                                In an era of unbelievably rapid technological development, which entails changes in programming techniques, the traditional teaching model does not seem to suit, and for people working full time is just impossible to become a part of it. After thorough research, I chose the curriculum that suits me best. I was impressed by the fact that the program was prepared by an institution such as Microsoft, which means is undoubtedly made by practitioners more than theoreticians. Attracting was also the fact that there is a certain path, there are stages and also certification. So without hesitation I started my "studies". Week by week I was more and more addicted to it.. My life was practically limited to work and study. In the meantime, I also came across the iconic CS50 course from Harvard, also available as part of edx. David J Malan, who lectured it, became a cult for me and I believe he could teach others how to teach successfully. His lectures make people forget to breathe.
                            </p>
                            <p>
                                Being seriously drawn into the topic, I came across more educational platforms and the courses they offer. On my educational path, starting with fun with scratch, I went through, among others, C, Java, Python, HTML, CSS, Javascript and over time I became convinced that what interests me the most is web technologies. Fascinating is their versatility, range and possibilities that they bring today compared to what it looked like 20 years ago.
                            </p>
                            <p>
                                In fact, my first contact with programming took place when I got my first "computer" which was the iconic C64.
                                Surprisingly, I did not start playing games like a maniac as the vast majority of my colleagues did.
                                I was more enamored that by writing a set of various commands in BASIC I can force the machine to do various strange things.
                                Then in a more adult life for many years I was working in the computer environment, managing local or wide area networks.
                                I had to deal with a popular database programming language called Clipper,
                                with the use of which I created systems producing various types of reports which today is known under the concept of Data Science;-)
                                I forced computers to work in various ways such as supporting businesses of all sorts such as trade, services or even managing production.
                                I employed them to control CCTV systems, film and music production. Until at some point I came to the point where
                                I realized that it was time for a break ... which lasted until 2018, when I began to feel the need to return to the industry.
                                And I made it and now looking forward to new challenges.

                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default About
