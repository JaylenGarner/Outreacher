"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { handleOutreach } from "../../lib/handlers/contact/handleOutreach";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentApplication } from "@/redux/reducers/applications/currentApplicationSlice";
import { clearCurrentContact } from "@/redux/reducers/contacts/currentContactSlice";
import { clearCurrentTemplate } from "@/redux/reducers/templates/currentTemplateSlice";
import { clearCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { createContact } from "@/redux/reducers/contacts/contactSlice";
import { setContactIsNew } from "@/redux/reducers/contacts/contactIsNewSlice";
import { ChaoticOrbit } from "@uiball/loaders";
import { Tooltip } from "@nextui-org/tooltip";

const CheckmarkButton = ({ contact }) => {
  const dispatch = useDispatch();
  const contactIsNew = useSelector((state) => state.contactIsNew);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (contactIsNew) {
      dispatch(clearCurrentModal());
      dispatch(setContactIsNew(false));
      return;
    } else {
      setIsLoading(true);
      const updatedContact = await handleOutreach(contact);

      if (updatedContact) {
        dispatch(createContact(updatedContact));
        dispatch(clearCurrentModal());
        dispatch(clearCurrentContact());
        dispatch(clearCurrentTemplate());
        dispatch(clearCurrentApplication());
        setIsLoading(false);
      }
    }
  };

  return (
    <Tooltip
      content="Confirm Outreach"
      className="tooltip"
      placement="top"
      closeDelay={50}
    >
      <motion.div
        whileHover={{ scale: 1.3 }}
        initial={{ rotate: 90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1,
        }}
      >
        {isLoading === false ? (
          <FontAwesomeIcon
            icon={faCheck}
            className="fa-xl text-green-500 cursor-pointer"
            onClick={handleSubmit}
          />
        ) : (
          <ChaoticOrbit color="#21C55D" size={20} />
        )}
      </motion.div>
    </Tooltip>
  );
};

export default CheckmarkButton;
