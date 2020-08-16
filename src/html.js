import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {props.headComponents}

                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-151479853-1"
                ></script>
                <meta
                    name="description"
                    content="Just few words about tech. Read articles about React.js, Javascript, Laravel, Wordpress, SEO, based on my personal experience as a Frontend Developer."
                />
                <meta
                    name="robots"
                    content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
                <link rel="canonical" href="https://tech-bulb.com/" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="tech-bulb.com - Just few words about tech"
                />
                <meta
                    property="og:description"
                    content="Just few words about tech. Read articles about React.js, Javascript, Laravel, Wordpress, SEO, based on my personal experience as a Frontend Developer."
                />
                <meta property="og:url" content="https://tech-bulb.com/" />
                <meta property="og:site_name" content="tech-bulb.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:description"
                    content="Just few words about tech. Read articles about React.js, Javascript, Laravel, Wordpress, SEO, based on my personal experience as a Frontend Developer."
                />
                <meta
                    name="twitter:title"
                    content="tech-bulb.com - Just few words about tech"
                />
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
