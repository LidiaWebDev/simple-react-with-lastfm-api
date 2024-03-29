import React, { Component } from "react";
import YouTube from "react-youtube";

class Youtube extends Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters NO API HERE, only a straight page from youtube
        autoplay: 1
      }
    };

    return (
      <div>
        {" "}
        Sublme Music wins the horizons!!!
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lKSOAKFaVrg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube;
