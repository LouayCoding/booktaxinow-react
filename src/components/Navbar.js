import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
        <section data-bs-version="5.1" className="menu popup-btn-cards menu03 photom4_menu03 cid-ttAkBSb5oX" once="menu" id="menu03-10">
            <nav className="navbar navbar-dropdown navbar-expand-lg">
                <div className="mbr-overlay" style={{ opacity: 1 }} />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="left-menu">
                        <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                        <CustomLink to="/">HOME</CustomLink>
                            <CustomLink to="/about">ABOUT</CustomLink>
                            <CustomLink to="/tarieven">TARIEVEN</CustomLink>
                        </ul>
                    </div>
                    <div className="brand-container">
                        <div className="navbar-brand">
                            <span className="navbar-caption-wrap"><a className="navbar-caption text-primary display-5" href="#">BOOKTAXINOW</a></span>
                        </div>
                    </div>
                    <div className="right-menu">
                        <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                            <CustomLink to="/prices">PRICES</CustomLink>
                            <CustomLink to="/book">BOOK</CustomLink>
                            <CustomLink to="/contact">CONTACT</CustomLink>
                        </ul>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="hamburger">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </button>
            </nav>
        </section>

    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={"nav-item"}>
            <Link className={isActive ? 'nav-link link text-primary display-4' : 'nav-link link text-white display-4'} to={to} {...props}>
                {children}
            </Link>

        </li>
    )
}