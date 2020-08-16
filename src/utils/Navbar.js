import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-xl p-0">
            <div class="navbar-brand">
                <a href="https://tech-bulb.com/">
                    <p>SR</p>
                </a>
                <a href="https://tech-bulb.com/">
                    <img
                        src="https://tech-bulb.com/wp-content/uploads/2019/11/tech-bulb-logo.png"
                        alt="tech-bulb.com"
                    />
                </a>
            </div>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#main-nav"
                aria-controls=""
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                id="main-nav"
                class="collapse navbar-collapse justify-content-end"
            >
                <ul id="menu-menu-main" class="navbar-nav">
                    <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-18"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18 nav-item"
                    >
                        <a
                            title="Blog"
                            href="https://tech-bulb.com/blog/"
                            class="nav-link"
                        >
                            Blog
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
