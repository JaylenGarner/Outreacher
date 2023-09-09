"use client";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentTemplate } from "@/redux/reducers/templates/currentTemplateSlice";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { motion } from "framer-motion";

const TemplateCard = ({ template }) => {
  const dispatch = useDispatch();
  const currentModal = useSelector((state) => state.currentModal);

  return (
    <motion.div
      className="contact_card"
      whileHover={{ opacity: 0.8, scale: 0.99 }}
      key={template.id}
      onClick={() => {
        dispatch(setCurrentTemplate(template));

        if (currentModal === "Template List") {
          dispatch(setCurrentModal("Edit Template"));
        } else {
          dispatch(setCurrentModal("Fill Template"));
        }
      }}
    >
      <div className="card_content">
        <p className="card_company">{template.name}</p>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
