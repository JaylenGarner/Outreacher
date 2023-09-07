"use client";

import { useDispatch, useSelector } from "react-redux";
import { fillTemplate } from "../../lib/helpers/fillTemplate";
import { useState } from "react";
import Checkmark from "../Checkmark";
import CopyButton from "../Buttons/CopyButton";

const FillTemplate = () => {
  const application = useSelector((state) => state.currentApplication);
  const contact = useSelector((state) => state.currentContact);
  const template = useSelector((state) => state.currentTemplate);
  const [showCheck, setShowcheck] = useState(false);

  const [filledTemplate, setFilledTemplate] = useState(
    fillTemplate(application, contact, template)
  );

  const handleShowCheck = () => {
    setShowcheck(true);
    setTimeout(() => {
      setShowcheck(false);
    }, 2000);
  };

  return (
    <div className="pt-4 pb-4 pr-10 pl-10 flex_center flex-col space-y-2">
      <div className="flex flex_center space-x-4 mb-2">
        <h1 className="modal_header">Ready To Send</h1>
        <div className="w-10 flex space-x-6">
          <CopyButton
            handleShowCheck={handleShowCheck}
            content={filledTemplate}
          />
          {showCheck && <Checkmark />}
        </div>
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
