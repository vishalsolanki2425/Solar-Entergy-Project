import { Col, Container, Row } from "react-bootstrap";
import Blog_card from "./Blog_Card/Blog_card";
import { blogData } from "./Blog_detail/BlogData";
import "./Blog_Page.css";

function Blog_Page() {
    return (
        <>
            <div className="blog_page">
                <div className="blog">
                    <Container>
                        <div className="blog_content">
                            <h1>Blog</h1>
                        </div>
                    </Container>
                </div>
            </div>
            <Container className="py-5">
                <Row className="g-4">
                    {blogData.map((item) => (
                        <Col key={item.id} lg={4} md={6} sm={12}>
                            <Blog_card
                                id={item.id}
                                img={item.image}
                                title={item.title}
                                desc={item.desc}
                                data={item.date}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Blog_Page;