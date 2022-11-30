import React from 'react'
import LinkComponent from "../../components/Link"
function PageNotFound() {
    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h1>404</h1>
            <h2>Page Not Found!</h2>
            <p>Sorry! The page you are looking for doesnt exist.</p>
            <div className="button-row">
                <LinkComponent className="list-inline-item btn btn-primary" to={"/"}>
                    Back To Home
                </LinkComponent>
            </div>
        </div>
    )
}
export default PageNotFound