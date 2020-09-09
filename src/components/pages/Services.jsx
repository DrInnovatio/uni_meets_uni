import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import { Button, FormControl } from 'react-bootstrap';
import '../../App.css'

export default function Services() {
  return (
    <div>

      <div>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Prepend>
          <FormControl aria-describedby="basic-addon1" />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Prepend>
          <FormControl aria-describedby="basic-addon1" />
        </InputGroup>

        <InputGroup>
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  )
} 