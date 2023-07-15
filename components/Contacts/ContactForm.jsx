"use client";

import "react-tooltip/dist/react-tooltip.css";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import dayjs from "dayjs";

const ContactForm = ({ type, contact, handleCreate, handleUpdate, error }) => {
  const { data: session } = useSession();
  const application = useSelector((state) => state.currentApplicationReducer);

  const [name, setName] = useState(contact ? contact?.name : "");
  const [title, setTitle] = useState(contact ? contact?.title : "");
  const [email, setEmail] = useState(contact ? contact?.email : "");
  const [number, setNumber] = useState(contact ? contact?.number : "");
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

    const formData = {
      e,
      userId: session.user?._id,
      applicationId: application?._id,
      name,
      title,
      email,
      linkedIn,
      number,
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

      <div className="flex justify-around w-full">
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
          className="input"
        />

        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          required
        />
      </div>

      <div className="flex justify-around w-full">
        <input
          type="text"
          value={linkedIn}
          placeholder="LinkedIn Profile URL"
          onChange={(e) => setLinkedIn(e.target.value)}
          className="input"
        />

        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
      </div>

      <div className="flex justify-around w-full">
        <Tooltip id="outreach-tooltip" place="bottom" />

        <select
          value={outreachStage}
          onChange={(e) => setOutreachStage(e.target.value)}
          className="input"
          data-tooltip-id="date-tooltip"
          data-tooltip-content={`What stage of the outreach process are you at${
            name ? " with " + name + "?" : "?"
          }`}
        >
          <option>Initial Outreach</option>
          <option>Follow Up</option>
          <option>Final Follow Up</option>
          <option>Correspondence</option>
        </select>

        <Tooltip id="date-tooltip" place="bottom" />

        <input
          type="date"
          value={outreachDate}
          onChange={(e) => setOutreachDate(e.target.value)}
          className="input"
          data-tooltip-id="date-tooltip"
          data-tooltip-content="When did you reach out?"
        />
      </div>

      <textarea
        placeholder="Notes..."
        cols={30}
        rows={4}
        className=" input textarea"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>

      <motion.button
        transition={{ duration: 0.7 }}
        initial={{
          background: "linear-gradient(to bottom left, #D846EE, #4E45E4)",
        }}
        whileHover={{
          scale: 1.02,
          opacity: 0.95,
          background: "linear-gradient(to bottom left, #E01D48 , #7B39ED)",
        }}
        whileTap={{ scale: 0.8 }}
        type="submit"
        className="button "
      >
        {type === "Create" ? "Create" : "Save"}
      </motion.button>
    </form>
  );
};

export default ContactForm;
