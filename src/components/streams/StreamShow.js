import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchStream } from "../../actions";

function StreamShow() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStream(id));
  }, []);
  const stream = useSelector((state) => state.streams[id]);
  return (
    <div>
      <p>{stream ? stream.title : null}</p>
      <p>{stream ? stream.description : null}</p>
    </div>
  );
}

export default StreamShow;
