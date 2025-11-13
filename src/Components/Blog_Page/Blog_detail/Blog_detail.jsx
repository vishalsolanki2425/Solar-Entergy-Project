import { useParams } from "react-router";
import { blogData } from "../Blog_detail/BlogData";
import "./Blog_detail.css";
import { MdDateRange, MdOutlineAccountCircle } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

function Blog_detail() {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <div className="container py-5 text-center"><h2>Blog not found</h2></div>;
    }

    return (
        <div className="blog-detail container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="blog_img mb-4">
                        <img src={blog.image} className="img-fluid rounded shadow" alt={blog.title} />
                    </div>

                    <h1 className="blog-title mb-3">{blog.title}</h1>

                    <div className="blog-meta d-flex flex-wrap align-items-center gap-3 mb-4">
                        <div className="admin d-flex align-items-center">
                            <MdOutlineAccountCircle className="meta-icon" />
                            <span className="ms-2">Go Solar Power</span>
                        </div>
                        <div className="data d-flex align-items-center">
                            <MdDateRange className="meta-icon" />
                            <span className="ms-2">{blog.date}</span>
                        </div>
                        <div className="time d-flex align-items-center">
                            <IoTimeOutline className="meta-icon" />
                            <span className="ms-2">{blog.time}</span>
                        </div>
                    </div>

                    <div className="blog-content">
                        <p className="lead">{blog.content}</p>

                        <h2 className="blog-subtitle">{blog.title2}</h2>
                        <p>{blog.content2}</p>

                        <h2 className="blog-subtitle">{blog.title3}</h2>
                        <p>{blog.content3}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog_detail;