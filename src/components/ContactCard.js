import React from "react"
import {FaPhoneAlt,FaEnvelopeOpenText} from "react-icons/fa"
import { RiMessage2Line} from "react-icons/ri";
import {Card} from "react-bootstrap"

export function ContactCard(props)
{
    return(
            <Card className="text-center">
                <Card.Header className="contact-info-header">Contact Information <RiMessage2Line /></Card.Header>
                <Card.Body>
                    <Card.Text>
                    <a href="mailto:rsnodgra92@gmail.com" className="contact-link"><FaEnvelopeOpenText/> rsnodgra92@gmail.com</a> 
                    </Card.Text>
                    <Card.Text>
                    <a href="tel:3037172081" className="contact-link"><FaPhoneAlt /> (303)717-2081</a> 
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}