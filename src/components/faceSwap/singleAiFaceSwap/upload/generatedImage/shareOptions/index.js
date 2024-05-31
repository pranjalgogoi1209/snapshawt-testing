import React from "react";
import styles from "./shareOptions.module.css";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import UserDB from "@/utils/userdb";

export default function ShareOptions(props) {
  const shareUrl = UserDB.getServerURI() + props.imageURL;

  return (
    <div
      onClick={() => props.setShowShareOptions(false)}
      className={`flex-row-center ${styles.ShareOptions}`}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={`flex-row-center ${styles.share}`}
      >
        <WhatsappShareButton
          url={shareUrl}
          quote={"I love SnapShawt"}
          hashtag={"#snapshawt, #techkilla"}
        >
          <WhatsappIcon round={true} />
        </WhatsappShareButton>

        <FacebookShareButton
          url={shareUrl}
          quote={"I love SnapShawt"}
          hashtag={"#snapshawt, #techkilla"}
        >
          <FacebookIcon round={true} />
        </FacebookShareButton>

        <LinkedinShareButton
          url={shareUrl}
          quote={"I love SnapShawt"}
          hashtag={"#snapshawt, #techkilla"}
        >
          <LinkedinIcon round={true} />
        </LinkedinShareButton>

        <TwitterShareButton
          url={shareUrl}
          quote={"I love SnapShawt"}
          hashtag={"#snapshawt, #techkilla"}
        >
          <TwitterIcon round={true} />
        </TwitterShareButton>
      </div>
    </div>
  );
}
