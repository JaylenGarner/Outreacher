"use client";

import { useDispatch, useSelector } from "react-redux";
import CreateContactButton from "../Buttons/CreateContactButton";

const ContactList = () => {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.currentApplicationReducer);

  return (
    <>
      <div className="flex justify-center items-center pt-4">
        <h1 className="modal_header pr-4  max-w-[600px] overflow-hidden text-ellipsis whitespace-nowrap">
          Contacts for {application.company}
        </h1>
        <CreateContactButton application={application} />
      </div>
    </>
  );
};

export default ContactList;
