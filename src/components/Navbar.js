import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
<section
  data-bs-version="5.1"
  className="menu popup-btn-cards menu03 photom4_menu03 cid-tvtm5MCIED"
  once="menu"
  id="menu03-2d"
>
  <nav className="navbar navbar-dropdown navbar-expand-lg">
    <div className="mbr-overlay" style={{ opacity: 1 }} />
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="left-menu">
        <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
        <CustomLink to="/">HOME</CustomLink>
        <CustomLink to="/about">OVER</CustomLink>
        <CustomLink to="/fixed-prices">FIXED PRICES</CustomLink>
        </ul>
      </div>
      <div className="brand-container">
        <div className="navbar-brand">
          <span className="navbar-caption-wrap">
            <a className="navbar-caption text-primary display-5" href="#">
              BOOKTAXINOW
            </a>
          </span>
        </div>
      </div>
      <div className="right-menu">
        <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
          <li className="nav-item dropdown">
            <a
              className="nav-link link text-white dropdown-toggle show display-4"
              href="#"
              data-toggle="dropdown-submenu"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              INFORMATIE
            </a>
            <div
              className="dropdown-menu show"
              aria-labelledby="dropdown-396"
              data-bs-popper="none"
            >
                   <CustomSubLink to="/luchthavens">LUCHTHAVENS</CustomSubLink>
                   <CustomSubLink to="/evenementen">EVENEMENTEN</CustomSubLink>
                   <CustomSubLink to="/populaire-plekken">POUPULAIRE PLEKKEN</CustomSubLink>
                   <CustomSubLink to="/spoed-en-reserveren">SPOED EN RESERVEREN</CustomSubLink>
                   <CustomSubLink to="/horeca">HORECA</CustomSubLink>
             
            </div>
          </li>
          <CustomLink to="/">BOEKEN</CustomLink>
          <CustomLink to="/contact">CONTACT</CustomLink>
        </ul>
      </div>
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-bs-toggle="collapse"
      data-target="#navbarSupportedContent"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
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

function CustomSubLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        // <a className="text-white dropdown-item display-4" href="#">
        //         LUCHTHAVENS
        //       </a>
            <Link className={isActive ? 'text-primary dropdown-item display-4' : 'text-white dropdown-item display-4'} to={to} {...props}>
                {children}
            </Link>
    )
}