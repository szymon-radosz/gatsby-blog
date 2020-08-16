import React from "react";
import HomepageBlogSection from "./../utils/HomepageBlogSection";
import HomepageProjectsSection from "./../utils/HomepageProjectsSection";
import HomepageMainSection from "./../utils/HomepageMainSection";
import Navbar from "./../utils/Navbar";
import Footer from "./../utils/Footer";

const IndexPage = () => {
    return (
        <>
            <div id="page" class="site">
                <a class="skip-link screen-reader-text" href="#content">
                    Skip to content
                </a>
                <header
                    id="masthead"
                    class="site-header navbar-static-top navbar-light"
                    role="banner"
                >
                    <div class="container">
                        <Navbar />
                    </div>
                </header>
                <div id="content" class="site-content">
                    <div class="container">
                        <div class="row">
                            <section
                                id="primary"
                                class="content-area front-page__container"
                            >
                                <main id="main" class="site-main" role="main">
                                    <article
                                        id="post-2"
                                        class="post-2 page type-page status-publish hentry"
                                    >
                                        <div class="entry-content">
                                            <HomepageMainSection />
                                            <HomepageProjectsSection />
                                            <HomepageBlogSection />
                                        </div>
                                    </article>
                                </main>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <div id="fb-root"></div>
        </>
    );
};

export default IndexPage;
