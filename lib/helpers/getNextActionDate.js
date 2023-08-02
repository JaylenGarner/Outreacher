import dayjs from "dayjs";
import Holidays from "date-holidays";

const getNextActionDate = (outreachStage, outreachDate) => {
  if (outreachStage === "Correspondence" || outreachStage === "Final Follow Up")
    return null;

  const hd = new Holidays("US");

  let actionDate = dayjs(outreachDate).add(2, "day");
  let dayName = actionDate.format("dddd");

  let validOutreachDate = false;

  while (!validOutreachDate) {
    const isHoliday = hd.isHoliday(actionDate.format());

    if (dayName !== "Saturday" && dayName !== "Sunday" && !isHoliday) {
      validOutreachDate = true;
    } else {
      actionDate = actionDate.add(1, "day");
      dayName = actionDate.format("dddd");
    }
  }

  return actionDate.format();
};

export default getNextActionDate;
