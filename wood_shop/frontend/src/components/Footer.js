import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
            <footer className="footer">
                        <div className="footer_container container">
                            <div className="footer_body">
                                <div className="footer_contacts">
                                    <a href="mailto:wetornix@gmail.com" className="icon_mail">
                                        <img
                                            src="/images/mail.png"
                                            alt=""
                                            height="25"
                                            width="25"
                                            className="icon"
                                        />
                                        lignea@gmail.com
                                    </a>
                                    <a href="tel:+3757777777" className="icon_phone">
                                        <img
                                            src="/images/phone.png"
                                            alt=""
                                            height="25"
                                            width="25"
                                            className="icon"
                                        />
                                        +375293354677
                                    </a>
                                </div>
                                <div className="footer_link">
                                    <a href="https://t.me/wetornix" className="icon_tg">
                                        <img
                                            src="/images/tg.png"
                                            alt=""
                                            height="25"
                                            width="25"
                                            className="icon"
                                        />
                                        lignea_tg
                                    </a>
                                    <a href="https://www.instagram.com/lignea_woodwork/" className="icon_inst_footer">
                                        <img
                                            src="/images/inst.png"
                                            alt=""
                                            height="25"
                                            width="25"
                                            className="icon"
                                        />
                                        @lignea
                                    </a>
                                </div>
                            </div>
                        </div>

            <Container>
                <Row>

                    <Col className="text-center py-3">Copyright &copy; Жиляк Н.А. Нечай-Ницевич Д.П. Лешук Д.И</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
