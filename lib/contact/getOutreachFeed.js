import dayjs from "dayjs";

const getOutreachFeed = (contacts) => {
  const today = dayjs().format("YYYY-MM-DD");

  const outreachFeed = Object.values(contacts).filter((contact) => {
    const nextActionDate = dayjs(contact?.nextActionDate).format("YYYY-MM-DD");
    return nextActionDate === today;
  });

  return outreachFeed;
};

export default getOutreachFeed;
