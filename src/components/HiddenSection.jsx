// questo componente lo creo in React al fine di testarlo successivamente tramite
// react-testing-library
// questo componente sarà composto da un bottone e una card sottostante.
// la card inizialmente sarà nascosta, ma cliccando il bottone comparirà nel DOM
// collegherò la visualizzazione della card allo stato del componente; cliccando
// sul bottone farò un toggle di quello stato, da false a true e viceversa

import { useState } from 'react'
import { Button, Col, Container, Row, Card } from 'react-bootstrap'

const HiddenSection = function () {
  const [show, setShow] = useState(false)

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} className="text-center">
          <h1>COMPoNENTe CaRd</h1>
          <Button
            variant="success"
            onClick={() => {
              setShow(!show) // toggle
            }}
          >
            {show ? 'NASCONDI' : 'MOSTRA'} ORFISSO
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} className="text-center">
          {show && (
            <Card>
              <Card.Img
                variant="top"
                alt="orfisso"
                src="https://placebear.com/500/500"
              />
              <Card.Body>
                <Card.Title>Orso Fisso</Card.Title>
                <Card.Text>Un orso di nome "Fisso"</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default HiddenSection
