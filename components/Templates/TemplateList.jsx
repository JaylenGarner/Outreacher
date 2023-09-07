"use client";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import CreateButton from "../Buttons/CreateButton";
import DotSpinnerBlue from "../LoadingSpinners/DotSpinnerBlue";
import TemplateCard from "./TemplateCard";

const TemplateList = () => {
  const templates = useSelector((state) => state.templates);
  const templatesLoaded = useSelector((state) => state.templatesLoaded);
  const currentModal = useSelector((state) => state.currentModal);

  return (
    <div className="flex flex-col items-center overflow-y-scroll h-[500px] no-scrollbar">
      <div className="flex flex_center pt-4 space-x-4">
        <h2 className="modal_header">Your Templates</h2>
        {currentModal === "Template List" && (
          <CreateButton type="Template" color="black" />
        )}
      </div>

      {!templatesLoaded ? (
        <div className="pt-20">
          <DotSpinnerBlue />
        </div>
      ) : templatesLoaded && !Object.values(templates).length ? (
        <span className="text-white text-2xl card text-center">
          Here's to a fresh start. Let's start shaping a better future, one
          opportunity at a time.
        </span>
      ) : (
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
                  contactIsNew={false}
                  className={"contact_card"}
                />
              );
            })}
        </motion.div>
      )}
      <div className="placeholder"></div>
    </div>
  );
};

export default TemplateList;
