import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card, Col, Row, Container } from "react-bootstrap";

const DisplayMovie = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.title === title);

  if (!movie) return <div>Film introuvable.</div>;

  return (
    <Container className="mt-5">
      {/* Go back button to return to the previous page */}
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-4">
        &larr; Go back
      </Button>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg">
            <Row className="g-0">
              <Col md={5}>
                <Card.Img
                  src={movie.posterUrl}
                  alt={movie.title}
                  style={{
                    maxHeight: "400px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <Card.Title>
                    <h1>{movie.title}</h1>
                  </Card.Title>
                  <Card.Text>
                    <h4>
                      <strong>Description:</strong>
                    </h4>
                    {movie.description}
                  </Card.Text>
                  <Card.Text>
                    <strong>Rating:</strong> {movie.rating} / 5
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => window.open(movie.trailerUrl, "_blank")}
                  >
                    ▶ Watch Now
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayMovie;
