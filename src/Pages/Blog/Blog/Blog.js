import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4>What is cors?</h4>
            <h6>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
            </h6>
            <h4> Why are you using firebase? What other options do you have to implement authentication?</h4>
            <h6>
                Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                <br />
                *Other options to implement authentication <br />
                .Biometrics   .Cookie-Based authentication
                .Token-Based authentication   .Third party access(OAuth, API-token)
                .OpenId   .SAML
                .Multi-Factor Authentication   .Token Authentication
            </h6>
            <h4>How does the private route work?</h4>
            <h6>
                Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.
                The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </h6>
            <h4> What is Node? How does Node work?</h4>
            <h6>
                Node is an open source server environment,is free,runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.),uses JavaScript on the server <br />
                *How it is work. <br />
                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </h6>
        </div>
    );
};

export default Blog;