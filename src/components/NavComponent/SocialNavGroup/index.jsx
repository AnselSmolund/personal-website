import React from "react";
import { Nav } from "react-bootstrap";
import SocialNav from "../SocialNav";
import styled from "styled-components";
import {
  TWITTER_LINK,
  INSTAGRAM_LINK,
  YOUTUBE_LINK,
  STRAVA_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
} from "../../../util/constants";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaStrava,
} from "react-icons/fa";

export const SocialNavs = styled(Nav)``;
function SocialNavGroup(props) {
  const { color, size, centered } = props;
  return (
    <SocialNavs className={centered && "justify-content-center"}>
      <SocialNav link={INSTAGRAM_LINK} color={color}>
        <FaInstagram style={{ fontSize: size }}></FaInstagram>
      </SocialNav>
      <SocialNav link={TWITTER_LINK} color={color}>
        <FaTwitter style={{ fontSize: size }}></FaTwitter>
      </SocialNav>
      <SocialNav link={YOUTUBE_LINK} color={color}>
        <FaYoutube style={{ fontSize: size }}></FaYoutube>
      </SocialNav>
      <SocialNav link={GITHUB_LINK} color={color}>
        <FaGithub style={{ fontSize: size }}></FaGithub>
      </SocialNav>
      <SocialNav link={STRAVA_LINK} color={color}>
        <FaStrava style={{ fontSize: size }}></FaStrava>
      </SocialNav>
      <SocialNav link={LINKEDIN_LINK} color={color}>
        <FaLinkedin style={{ fontSize: size }}></FaLinkedin>
      </SocialNav>
    </SocialNavs>
  );
}

export default SocialNavGroup;
