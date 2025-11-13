import { Card } from "react-bootstrap";
import { Link } from "react-router";
import "./Blog_card.css";

function Blog_card(props) {
    return (
        <div className="blog-card">
            <Card className="shadow-sm border-0" style={{ width: "100%" }}>
                <Card.Img variant="top" src={props.img} className="blog-card-img" />
                <Card.Body>
                    <Card.Link
                        as={Link}
                        to={`/blogs/${props.id}`}
                        className="blog-title text-decoration-none fw-bold"
                    >
                        {props.title}
                    </Card.Link>
                    <Card.Text className="blog-desc">{props.desc}</Card.Text>
                    <Link to={`/blogs/${props.id}`} className="read-more-link">
                        Read More »
                    </Link>
                    <hr />
                    <Card.Text className="blog-date">{props.data}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Blog_card;