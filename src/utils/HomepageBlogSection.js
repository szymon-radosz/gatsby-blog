import React from "react";
import HomePageSingleRect from "./HomePageSingleRect";

const HomepageBlogSection = () => {
    return (
        <div class="section_container">
            <div class="section_wrapper blog_wrapper">
                <div class="section__container--text">
                    <h3 class="section__container--name-text">Blog</h3>
                    <h4 class="section__container--position-text">
                        I try to write some tips and tutorials based on my
                        experience.
                    </h4>
                </div>

                <div class="section__container--work">
                    <div class="section__row section__first-row">
                        <div class="section__container first-project">
                            <HomePageSingleRect
                                mainImgPath="https://tech-bulb.com/wp-content/uploads/2020/04/code.png"
                                sectionTitle="How to make your HTML more semantic following simple rules"
                                sectionDescription="13 Aug 2020"
                                isProjectSection={false}
                                blogPostUrl="https://tech-bulb.com/how-to-make-your-html-more-semantic-following-simple-rules/"
                            />
                        </div>
                        <div class="section__container second-project">
                            <HomePageSingleRect
                                mainImgPath="https://tech-bulb.com/wp-content/uploads/2020/04/javascript-1.png"
                                sectionTitle="Make your app e2e tests more enjoyable with Cypress"
                                sectionDescription="13 Apr 2020"
                                isProjectSection={false}
                                blogPostUrl="https://tech-bulb.com/make-your-app-tests-more-enjoyable-with-cypress/"
                            />
                        </div>
                    </div>
                    <div class="section__row section__second-row">
                        <div class="section__container third-project">
                            <HomePageSingleRect
                                mainImgPath="https://tech-bulb.com/wp-content/uploads/2020/04/code.png"
                                sectionTitle="5 Tips before your first hackathon"
                                sectionDescription="29 Nov 2019"
                                isProjectSection={false}
                                blogPostUrl="https://tech-bulb.com/5-tips-before-your-first-hackathon/"
                            />
                        </div>
                    </div>
                    <a
                        href="https://tech-bulb.com/blog"
                        title="Watch all blog posts"
                    >
                        <p class="watch-more__text">Watch more</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomepageBlogSection;
