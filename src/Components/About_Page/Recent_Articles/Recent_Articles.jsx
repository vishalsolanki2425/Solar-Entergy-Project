import { Button, Col, Container, Row } from "react-bootstrap";
import blog1 from "../../../Assets/images/blog1.jpg"
import "./Recent_Articles.css"
import { Link } from "react-router";

function Recent_Articles() {
    return (
        <>
            <Container className="Recent_Articles_container">
                <div className="Recent_Articles d-flex justify-content-between align-items-center mt-5 mb-5">
                    <h2>Recent Articles</h2>
                    <Button className="interested-btn"><Link to={"/blog"} className="text-decoration-none text-dark">View all blog posts</Link></Button>
                </div>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <div className="blog_home">
                            <div className="blog_img">
                                <img src={blog1} alt="" />
                            </div>
                            <div className="blog_content_home ps-2">
                                <span>June 15, 2023</span>
                                <h4>Solar Energy Benefits for Homeowners</h4>
                                <p>Discover how solar energy can reduce your electricity bills
                                    and help the environment.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className="blog_home">
                            <div className="blog_img">
                                <img src={blog1} alt="" />
                            </div>
                            <div className="blog_content_home ps-2">
                                <span>June 15, 2023</span>
                                <h4>Solar Energy Benefits for Homeowners</h4>
                                <p>Discover how solar energy can reduce your electricity bills
                                    and help the environment.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className="blog_home">
                            <div className="blog_img">
                                <img src={blog1} alt="" />
                            </div>
                            <div className="blog_content_home ps-2">
                                <span>June 15, 2023</span>
                                <h4>Solar Energy Benefits for Homeowners</h4>
                                <p>Discover how solar energy can reduce your electricity bills
                                    and help the environment.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Recent_Articles;