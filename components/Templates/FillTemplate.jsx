"use client";

import { useDispatch, useSelector } from "react-redux";
import { fillTemplate } from "../../lib/helpers/fillTemplate";
import { useState } from "react";
import CopyButton from "../Buttons/CopyButton";

const FillTemplate = () => {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.currentApplication);
  const contact = useSelector((state) => state.currentContact);
  const template = useSelector((state) => state.currentTemplate);

  const [filledTemplate, setFilledTemplate] = useState(
    fillTemplate(application, contact, template)
  );

  return (
    <div className="pt-4 pb-4 pr-10 pl-10 flex_center flex-col space-y-2">
      <div className="flex flex_center space-x-4 mb-2">
        <h1 className="modal_header">Ready To Send</h1>
        <CopyButton content={filledTemplate} />
      </div>

      <textarea
        placeholder="Template..."
        cols={30}
        rows={4}
        className="textarea_lg mb-4"
        value={filledTemplate}
        onChange={(e) => setFilledTemplate(e.target.value)}
      ></textarea>
      <br></br>
    </div>
  );
};

export default FillTemplate;
