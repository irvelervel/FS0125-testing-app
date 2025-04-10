import { useEffect, useState } from 'react'
import { Col, Container, Form, ListGroup, Row } from 'react-bootstrap'

const FetchComponent = function () {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nel recupero utenti')
        }
      })
      .then((users) => {
        // un array di utenti
        setUsers(users)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} className="text-center">
          <Form.Control
            type="text"
            placeholder="cerca utenti"
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            value={search}
          />
          <ListGroup>
            {users
              .filter((u) => {
                return u.name.toLowerCase().includes(search.toLowerCase())
              })
              .map((user) => {
                return (
                  <ListGroup.Item key={user.id} data-testid="list-item">
                    {user.name} - {user.phone}
                  </ListGroup.Item>
                )
              })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default FetchComponent
