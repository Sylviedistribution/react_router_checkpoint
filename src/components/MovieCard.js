import { Card, Image } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${movie.title}"?`)) {
      onDelete(movie);
    }
  };
  
  // Function to navigate to the movie detail page
  const goTo = () => {
    navigate("/movie/" + movie.title);
  };

  return (
    <Card style={{ width: "18rem" }} onClick={goTo}>
      <Image
        variant="top"
        src={movie.posterUrl}
        height={"300px"}
        style={{ cursor: "pointer" }}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>Rating: {movie.rating} / 5</Card.Text>
        <div
          style={{
            height: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <TrashFill
            style={{
              cursor: "pointer",
              color: "red",
              fontSize: "20px",
            }}
            onClick={() => handleDelete(movie)}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
