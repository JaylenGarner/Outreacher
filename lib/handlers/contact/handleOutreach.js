import dayjs from "dayjs";
import handleEditContact from "./handleEditContact";

export const handleOutreach = async (contact) => {
  const getNextOutreachStage = (outreachStage) => {
    if (outreachStage === "Initial Outreach") {
      return "Follow Up";
    } else if (outreachStage === "Follow Up") {
      return "Final Follow Up";
    }
  };

  const formData = {
    applicationId: contact.applicationId,
    name: contact.name,
    title: contact.title,
    email: contact.email,
    linkedIn: contact.linkedIn,
    outreachStage: getNextOutreachStage(contact.outreachStage),
    outreachDate: dayjs().format(),
    notes: contact.notes,
  };

  const response = await handleEditContact(formData, contact.id);
  return response;
};
