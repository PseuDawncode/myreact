import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

function ProjectCard({ name, screenshot, github, techUsed, writeup }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Card className="shadow mb-4" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={screenshot} alt={`${name} screenshot`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Tech Used:</strong> {techUsed}
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary" onClick={handleShow}>Details</Button>
            <Button variant="secondary" href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>What is it?</h5>
          <p>{writeup.what}</p>
          
          <h5>What I learned</h5>
          <p>{writeup.learned}</p>
          
          <h5>My role</h5>
          <p>{writeup.role}</p>
          
          <h5>Challenges</h5>
          <p>{writeup.challenges}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;