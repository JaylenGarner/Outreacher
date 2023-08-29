"use client";

import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

const TemplateCard = ({ template }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      className="contact_card"
      whileHover={{ opacity: 0.8, scale: 0.99 }}
      key={template.id}
      onClick={() => {
        // dispatch(setCurrentContact(contact));
        // dispatch(setCurrentApplication(applications[contact.applicationId]));
        // dispatch(setCurrentModal("Edit Contact"));
      }}
    >
      <div className="card_content_col">
        {/* <span className="text-xl font-bold">Last Outreach</span> */}
        {/* <span className="font-semibold text-md">
          {dayjs(contact?.outreachDate).format("MM/DD/YYYY")}
        </span> */}
      </div>

      <div className="card_content ">
        <p className="card_company">{template.name}</p>
      </div>

      <div className="card_content_col">
        {/* <span className="text-xl font-bold">Status</span> */}
        {/* <span className="font-semibold text-md">{contact.outreachStage}</span> */}
      </div>
    </motion.div>
  );
};

export default TemplateCard;
