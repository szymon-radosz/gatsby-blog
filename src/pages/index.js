import React from "react";
import HomepageBlogSection from "../components/Homepage/HomepageBlogSection";
import HomepageProjectsSection from "../components/Homepage/HomepageProjectsSection";
import HomepageMainSection from "../components/Homepage/HomepageMainSection";
import Layout from "./../components/Layout";

const IndexPage = () => {
    return (
        <Layout>
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
        </Layout>
    );
};

export default IndexPage;
