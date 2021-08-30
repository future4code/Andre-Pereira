import React from "react";
import "./BotaoSwipe.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

const BotaoSwipe = () => {
  return (
    <div className="botaoSwipe">
      <IconButton className="botaoSwipe__replay">
        <ReplayIcon font="large" />
      </IconButton>
      <IconButton className="botaoSwipe__close">
        <CloseIcon font="large" />
      </IconButton>
      <IconButton className="botaoSwipe__replay">
        <StarIcon font="large" />
      </IconButton>
      <IconButton className="botaoSwipe__replay">
        <FavoriteIcon font="large" />
      </IconButton>
      <IconButton className="botaoSwipe__replay">
        <FlashOnIcon font="large" />
      </IconButton>
    </div>
  );
};

export default BotaoSwipe;
