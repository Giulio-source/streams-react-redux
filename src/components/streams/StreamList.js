import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStreams } from "../../actions";

function StreamList() {
  const dispatch = useDispatch();
  const streams = Object.values(useSelector((state) => state.streams));
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchStreams());
  }, []);

  const renderedButtons = (streamId) => {
    if (auth.userId === streamId && auth.userId !== null) {
      return (
        <div className="stream-buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      );
    } else {
      return;
    }
  };

  const renderedStreams = streams.map((stream) => (
    <div className="stream-item" key={stream.id}>
      <div className="stream-content">
        <p className="stream-title">{stream.title}</p>
        <p className="stream-description">{stream.description}</p>
      </div>
      {renderedButtons(stream.userId)}
    </div>
  ));

  return (
    <div className="streams-list">{renderedStreams ? renderedStreams : ""}</div>
  );
}

export default StreamList;
