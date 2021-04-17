import React from "react";

import Modal from "../Modal";

function StreamDelete() {
  return (
    <Modal
      header="Delete Stream"
      content="Are you sure you want to delete the stream?"
      actionOne="Delete"
      actionTwo="Cancel"
    />
  );
}

export default StreamDelete;
