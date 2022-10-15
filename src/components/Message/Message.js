// Dependencies
import { useContext } from "react";
import { Link } from "react-router-dom";
// Context
import { BasicContext } from "../../context/BasicContext";

const Message = ({ content, type }) => {
    const basicContext = useContext(BasicContext);
    return (
        <div className={`alert alert-${type}`} role="alert">
            <h4 className="alert-heading">
                {type === "success" && <span><i className="bi bi-check-circle-fill"></i> Well done!</span>}
                {type === "warning" && <span><i className="bi bi-exclamation-triangle-fill"></i> Hey!</span>}
                {type === "danger" && <span><i className="bi bi-x-octagon-fill"></i> Ups!</span>}
            </h4>
            <p>
                {content}
            </p>
            <hr />
            <p className="mb-0">If you need you can continue shopping from <Link to="/graymarket" onClick={basicContext.clearSearch}>this link</Link>.</p>
        </div>
    )
}

export default Message