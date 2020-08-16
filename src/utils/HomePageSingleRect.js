import React from "react";

const HomePageSingleRect = ({
    mainImgPath,
    sectionTitle,
    sectionDescription,
    isProjectSection,
    projectGithubUrl,
    projectLiveUrl,
    blogPostUrl,
}) => {
    return (
        <>
            <img
                class="section__container--logo"
                src={mainImgPath}
                alt={sectionTitle}
                title={sectionTitle}
            />
            <div class="section__container--content">
                <p class="section__title">{sectionTitle}</p>
                <p class="section__technologies">{sectionDescription}</p>
                <div class="project_btns">
                    {isProjectSection ? (
                        <>
                            <a
                                href={projectGithubUrl}
                                target="_blank"
                                title={sectionTitle}
                            >
                                <div class="section__icon--container section__icon--github">
                                    <img
                                        src="https://tech-bulb.com/wp-content/uploads/2020/04/github.png?v=1"
                                        alt="Open project"
                                        title="Open project"
                                    />
                                </div>
                            </a>
                            <a
                                href={projectLiveUrl}
                                target="_blank"
                                title={sectionTitle}
                            >
                                <div class="section__icon--container">
                                    <p>Live</p>
                                </div>
                            </a>
                        </>
                    ) : (
                        <a href={blogPostUrl} title={sectionTitle}>
                            <div class="section__icon--container section__icon--live">
                                <p>Read More</p>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </>
    );
};

export default HomePageSingleRect;
