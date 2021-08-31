import React from "react";
import "./BotaoSwipe.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";

const BotaoSwipe = (props) => {
  return (
    <div className="botaoSwipe">
      <IconButton className="botaoSwipe__replay">
        <ReplayIcon font="large" />
      </IconButton>
      <IconButton className="botaoSwipe__close">
        <CloseIcon font="large" />
      </IconButton>
      <IconButton className="botaoSwipe__fav">
        <FavoriteIcon font="large" />
      </IconButton>
    </div>
  );
};

export default BotaoSwipe;
