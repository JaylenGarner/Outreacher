"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setContactFormLoaded } from "@/redux/reducers/contactFormLoadedSlice";
import { motion } from "framer-motion";
import SubmitButton from "../Buttons/SubmitButton";
import TriangleSpinner from "../LoadingSpinners/TriangleSpinner";
import dayjs from "dayjs";

const ContactForm = ({ type, contact, handleCreate, handleUpdate, error }) => {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.currentApplication);
  const contactFormLoaded = useSelector((state) => state.contactFormLoaded);

  const [name, setName] = useState(contact ? contact?.name : "");
  const [title, setTitle] = useState(contact ? contact?.title : "");
  const [email, setEmail] = useState(contact ? contact?.email : "");
  const [linkedIn, setLinkedIn] = useState(contact ? contact?.linkedIn : "");
  const [outreachStage, setOutreachStage] = useState(
    contact ? contact?.outreachStage : "Initial Outreach"
  );

  const [outreachDate, setOutreachDate] = useState(
    contact
      ? dayjs(contact?.outreachDate).format("YYYY-MM-DD")
      : dayjs().format("YYYY-MM-DD")
  );
  const [notes, setNotes] = useState(contact ? contact?.notes : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setContactFormLoaded(true));

    const formData = {
      e,
      applicationId: application?.id,
      name,
      title,
      email,
      linkedIn,
      outreachStage,
      outreachDate: dayjs(outreachDate).format(),
      notes,
    };

    type === "Create" ? handleCreate(formData) : handleUpdate(formData);
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

      <div className="input_container">
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
          className="input_two"
        />

        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="input_two"
          required
        />
      </div>

      <div className="input_container">
        <input
          type="text"
          value={linkedIn}
          placeholder="LinkedIn Profile URL"
          onChange={(e) => setLinkedIn(e.target.value)}
          className="input_two"
        />

        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="input_two"
        />
      </div>

      <div className="input_container">
        <select
          value={outreachStage}
          onChange={(e) => setOutreachStage(e.target.value)}
          className="input_two"
        >
          <option>Initial Outreach</option>
          <option>Follow Up</option>
          <option>Final Follow Up</option>
          <option>Correspondence</option>
        </select>

        <input
          type="date"
          value={outreachDate}
          onChange={(e) => setOutreachDate(e.target.value)}
          className="input_two"
        />
      </div>

      <textarea
        placeholder="Notes..."
        cols={30}
        rows={4}
        className="textarea"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>

      {!contactFormLoaded ? (
        <SubmitButton label={type === "Create" ? type : "Save"} />
      ) : (
        <TriangleSpinner />
      )}
    </form>
  );
};

export default ContactForm;
