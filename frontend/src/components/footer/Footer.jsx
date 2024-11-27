import React from 'react'
import "./footer.css"
import { Typography } from '@mui/material'
import {Link} from "react-router-dom"
import {BsGithub, BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>Hey, my name is Debapriya Maity. I am a full-stack developer and an undergraduate at <b>IIT BHU</b></Typography>
        <Link to="/contact" className="footerContactBtn">
        <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/MightyDeb" target="blank">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/debapriya-maity-06b0302bb/" target="blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Footer