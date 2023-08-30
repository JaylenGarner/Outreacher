"use client";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import CreateButton from "../Buttons/CreateButton";
import TemplateCard from "./TemplateCard";

const TemplateList = () => {
  const templates = useSelector((state) => state.templates);

  return (
    <div className="flex flex-col overflow-y-scroll h-[500px] no-scrollbar">
      <div className="flex flex_center pt-4 space-x-4">
        <h2 className="modal_header">Your Templates</h2>
        <div className="pt-1">
          <CreateButton type="Template" color="black" />
        </div>
      </div>

      <motion.div
        className="overflow-y-scroll overflow-x-hidden no-scrollbar pr-6 pl-6 mt-4 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {templates &&
          Object.values(templates).map((template) => {
            return (
              <TemplateCard
                key={template.id}
                template={template}
                className={"contact_card"}
              />
            );
          })}
        <div className="placeholder"></div>
      </motion.div>
    </div>
  );
};

export default TemplateList;
