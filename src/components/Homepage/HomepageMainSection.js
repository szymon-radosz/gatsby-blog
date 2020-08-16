import React from "react";

const HomepageMainSection = () => {
    return (
        <div class="section_container main__container">
            <div class="section_wrapper main_wrapper">
                <div class="main__container--text">
                    <h1 class="main__container--name-text">Szymon Radosz</h1>
                    <h2 class="main__container--position-text">
                        Software Developer
                    </h2>
                    <p class="main__container--follow-text">Follow me</p>
                    <div class="main__container--follow-icons">
                        <a
                            href="https://github.com/s-radosz"
                            target="_blank"
                            title="Follow me on github"
                        >
                            <div class="main__container--follow-icon">
                                <img
                                    src="https://tech-bulb.com/wp-content/uploads/2020/04/github.png?v=1"
                                    alt="Follow me on github"
                                    title="Follow me on github"
                                />
                            </div>
                        </a>
                        <a
                            href="https://twitter.com/s_radosz"
                            target="_blank"
                            title="Follow me on twitter"
                        >
                            <div class="main__container--follow-icon">
                                <img
                                    src="https://tech-bulb.com/wp-content/uploads/2020/04/twitter.png?v=1"
                                    alt="Follow me on twitter"
                                    title="Follow me on twitter"
                                />
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/szymon-radosz-6938a5118/"
                            target="_blank"
                            title="Follow me on linkedin"
                        >
                            <div class="main__container--follow-icon">
                                <img
                                    src="https://tech-bulb.com/wp-content/uploads/2020/04/linkedin.png?v=1"
                                    alt="Follow me on linkedin"
                                    title="Follow me on linkedin"
                                />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="main__container--icons">
                    <div class="icons__row icons__first-row">
                        <a href="#projects">
                            <div class="icon__container icon-laravel">
                                <img
                                    src="https://tech-bulb.com/wp-content/uploads/2020/04/laravel.png?v=1"
                                    alt="Laravel"
                                    title="Laravel"
                                />
                            </div>
                        </a>
                        <a href="#projects">
                            <div class="icon__container icon-react">
                                <img
                                    src="https://tech-bulb.com/wp-content/uploads/2020/04/react.png?v=1"
                                    alt="React.js"
                                    title="React.js"
                                />
                            </div>
                        </a>
                    </div>
                    <div class="icons__row icons__second-row">
                        <a href="#projects">
                            <div class="icon__container icon-sass">
                                <img
                                    src="https://tech-bulb.com/wp-content/uploads/2020/04/sass.png?v=1"
                                    alt="Sass"
                                    title="Sass"
                                />
                            </div>
                        </a>
                        <a href="#projects">
                            <div class="icon__container icon-javascript">
                                <img
                                    src="https://tech-bulb.com/wp-content/uploads/2020/04/javascript.png?v=1"
                                    alt="Javascript"
                                    title="Javascript"
                                />
                            </div>
                        </a>
                        <a href="#projects">
                            <div class="icon__container icon-git">
                                <img
                                    src="https://tech-bulb.com/wp-content/uploads/2020/04/git.png?v=1"
                                    alt="Git"
                                    title="Git"
                                />
                            </div>
                        </a>
                    </div>
                    <div class="icons__row icons__third-row">
                        <a href="#projects">
                            <div class="icon__container icon-html">
                                <img
                                    src="https://tech-bulb.com/wp-content/uploads/2020/04/html.png?v=1"
                                    alt="Html"
                                    title="Html"
                                />
                            </div>
                        </a>
                        <a href="#projects">
                            <div class="icon__container icon-wordpress">
                                <img
                                    src="https://tech-bulb.com/wp-content/uploads/2020/04/wordpress.png?v=1"
                                    alt="Wordpress"
                                    title="Wordpress"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomepageMainSection;
