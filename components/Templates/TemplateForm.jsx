"use client";

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import SubmitButton from "../Buttons/SubmitButton";
import TriangleSpinner from "../LoadingSpinners/TriangleSpinner";
import { setTemplateFormLoaded } from "@/redux/reducers/templates/templateFormLoadedSlice";
import TextHover from "../Animations/HoverScaleSmall";

const TemplateForm = ({
  type,
  template,
  handleCreate,
  handleUpdate,
  error,
}) => {
  const dispatch = useDispatch();
  const textareaRef = useRef(null);

  const templateFormLoaded = useSelector((state) => state.templateFormLoaded);

  const [name, setName] = useState(template ? template?.name : "");
  const [body, setBody] = useState(template ? template?.body : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setTemplateFormLoaded(true));

    const formData = {
      e,
      name,
      body,
    };

    type === "Create" ? handleCreate(formData) : handleUpdate(formData);
  };

  const handleVariableInsert = (variable) => {
    const { selectionStart, selectionEnd } = textareaRef.current;
    const newBody =
      body.substring(0, selectionStart) +
      variable +
      body.substring(selectionEnd);

    setBody(newBody);

    const newCursorPos = selectionStart + variable.length;
    textareaRef.current.selectionStart = newCursorPos;
    textareaRef.current.selectionEnd = newCursorPos;
    textareaRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error ? (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pt-1 text-center text-red-500 font-bold"
        >
          {error}
        </motion.span>
      ) : (
        <span className="pt-1"></span>
      )}
      <input
        type="text"
        value={name}
        placeholder="Template Name"
        onChange={(e) => setName(e.target.value)}
        required
        className="input_wide"
      />
      <span className="text-xl font-bold text-center">Insert Variables:</span>

      <div className="sm:space-x-6 flex max-sm:flex-col max-sm:space-y-4">
        <div className="flex space-x-6 justify-center items-center">
          <TextHover>
            <button
              type="button"
              className="border-2 border-black rounded-full w-[110px] h-10"
              onClick={(e) => handleVariableInsert("{Company}")}
            >
              Company
            </button>
          </TextHover>

          <TextHover>
            <button
              type="button"
              className="border-2 border-black rounded-full w-[110px] h-10"
              onClick={(e) => handleVariableInsert("{Position}")}
            >
              Position
            </button>
          </TextHover>
        </div>

        <div className="flex space-x-6 justify-center items-center">
          <TextHover>
            <button
              type="button"
              className="border-2 border-black rounded-full w-[110px] h-10"
              onClick={(e) => handleVariableInsert("{Contact Name}")}
            >
              Contact Name
            </button>
          </TextHover>

          <TextHover>
            <button
              type="button"
              className="border-2 border-black  rounded-full w-[110px] h-10"
              onClick={(e) => handleVariableInsert("{Contact Title}")}
            >
              Contact Title
            </button>
          </TextHover>
        </div>
      </div>

      <textarea
        ref={textareaRef}
        placeholder="Template..."
        cols={30}
        rows={4}
        className="textarea"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      {!templateFormLoaded ? (
        <SubmitButton label={type === "Create" ? type : "Save"} />
      ) : (
        <TriangleSpinner />
      )}
    </form>
  );
};

export default TemplateForm;
