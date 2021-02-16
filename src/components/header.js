import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"
import linkedInIcon from "../images/svg/linkedin.svg"
import mailIcon from "../images/svg/envelope.svg"
import githubIcon from "../images/svg/github-sign.svg"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

const NavLink = styled(Link)`
  align-content: center;
  justify-content: center;
  color: #c8d1d7;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(98, 15, 46, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const Icon = styled.img`
  width: 20px;
  position: relative;
`

const GitHubLink = styled.a`
  align-content: center;
  justify-content: center;
  color: #c8d1d7;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(98, 15, 46, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const SocialLink = styled.a`
  align-content: right !important;
  justify-content: right !important;
  text-align: right !important;
  color: #c8d1d7;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(98, 15, 46, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const HomeLink = styled(NavLink)`
  align-content: center;
  justify-content: center;
  margin-left: 0;
`

const SiteHeader = styled.header`
  align-content: center;
  justify-content: center;
  background: transparent;
  display: flex;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/">Home</HomeLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/stripes">Stripes</NavLink>
        <NavLink to="/xp">XP</NavLink>
        <GitHubLink href="https://github.com/nishshukla1212" target="_blank">
        <Icon src={githubIcon} alt="github" />
        </GitHubLink>
        <SocialLink href="https://www.linkedin.com/in/nish-shukla/" target="_blank">
          <Icon src={linkedInIcon} alt="linkedIn" />
        </SocialLink>
        <SocialLink href="mailto:contact@nishshukla.dev" target="_blank">
          <Icon src={mailIcon} alt="email" />
        </SocialLink>
      </p>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
