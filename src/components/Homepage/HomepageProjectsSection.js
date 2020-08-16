import React from "react";
import HomePageSingleRect from "./HomePageSingleRect";

const HomepageProjectsSection = () => {
    return (
        <div class="section_container" id="projects">
            <div class="section_wrapper projects_wrapper">
                <div class="section__container--text">
                    <h3 class="section__container--name-text">Projects</h3>
                    <h4 class="section__container--position-text">
                        I like build various types of projects e.g. web apps,
                        mobile apps etc.
                    </h4>
                </div>
                <div class="section__container--work">
                    <div class="section__row section__first-row">
                        <div class="section__container first-project">
                            <HomePageSingleRect
                                mainImgPath="https://tech-bulb.com/wp-content/uploads/2020/06/pa.png?v=1"
                                sectionTitle="English learning app"
                                sectionDescription="Technologies: React.js, Laravel, Redux,
                                Typescript, Jest/Enzyme, Chrome browser
                                extension"
                                isProjectSection={true}
                                projectGithubUrl="https://github.com/s-radosz/wordsTranslationChromeExtensionApp"
                                projectLiveUrl="http://www.praktyczny-angielski.pl/"
                            />
                        </div>
                        <div class="section__container second-project">
                            <HomePageSingleRect
                                mainImgPath="https://tech-bulb.com/wp-content/uploads/2020/04/logo-zdrowy-koszyk.png?v=1"
                                sectionTitle="Zdrowy Koszyk - Mobile app for finding food products ingredients"
                                sectionDescription="Technologies: React Native, React.js,
                                Laravel"
                                isProjectSection={true}
                                projectGithubUrl="https://github.com/s-radosz/zdrowyKoszykApp"
                                projectLiveUrl="http://zdrowy-koszyk.live/"
                            />
                        </div>
                    </div>
                    <div class="section__row section__second-row">
                        <div class="section__container third-project">
                            <HomePageSingleRect
                                mainImgPath="https://tech-bulb.com/wp-content/uploads/2020/04/LOM-white.png?v=1"
                                sectionTitle="Land of Mine - city simulator game working in browser"
                                sectionDescription="Technologies: React.js, Typescript, Laravel,
                                Cypress"
                                isProjectSection={true}
                                projectGithubUrl="https://github.com/s-radosz/LandOfMine"
                                projectLiveUrl="http://land-of-mine.com/"
                            />
                        </div>
                    </div>
                    <a
                        href="https://github.com/s-radosz/"
                        title="Watch all"
                        target="_blank"
                    >
                        <p class="watch-more__text">Watch more</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomepageProjectsSection;
