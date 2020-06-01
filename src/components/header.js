import { Link, graphql, useStaticQuery } from 'gatsby'
import React from "react"
import headerStyles from '../styles/header.module.scss'
import logo from "../images/favicons/favicon-32x32.png"

const Header = () => {
  const data = useStaticQuery(graphql`
  query{
      site {
        siteMetadata{
          title
        }
      }
    }
  `)

  return (
    <nav className={headerStyles.nav}>
      <div className={headerStyles.logo}>
        <Link to="/"><img className={headerStyles.brand} src={logo} alt="Logo"></img></Link>
      </div>
      <div id="mainListDiv" className={headerStyles.main_list}>
        <ul className={headerStyles.unorderlist}>
          <li className={headerStyles.orderedlist}>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  )


  return (
    <nav className={headerStyles.nav}>
      <div class="container">
        <div className={headerStyles.logo}>
          <a href="#"><img className={headerStyles.brand} src={logo} alt="Logo"></img></a>
        </div>
        <div id="mainListDiv" className={headerStyles.main_list}>
          <ul className={headerStyles.navLinks}>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <span className={headerStyles.navTrigger}>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  )

}

export default Header