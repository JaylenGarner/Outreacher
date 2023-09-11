import Link from "next/link";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <div className="pt-4 pb-4 pr-10 pl-10 flex_center flex-col space-y-2">
      <h2 className="modal_header">Information</h2>
      <p className="max-w-[550px] text-lg text-center">
        The Outreach Algorithm streamlines follow-up management by considering
        the outreach stage and date, resulting in a daily contact list. It
        maintains a consistent two-day interval for balanced engagement and
        accommodates weekends and US holidays by rescheduling follow-ups to the
        next available business day.
      </p>

      <span className="text-lg text-center">
        A full feature breakdown is available{" "}
        <motion.a
          whileHover={{ color: "#FF0066" }}
          href="https://github.com/JaylenGarner/Outreacher/blob/main/README.md"
          className="font-bold"
          target="_blank"
        >
          here
        </motion.a>
      </span>

      <span className="text-lg text-center">
        Your input is valuable! Share feedback or feature suggestions:
        <br></br>
        <motion.a
          whileHover={{ color: "#FF0066" }}
          href="mailto:jaylen@moonraydevelopment.com"
          className="font-bold"
        >
          jaylen@moonraydevelopment.com
        </motion.a>
      </span>

      <div className="flex space-x-4 flex_center pt-4">
        <Link href="https://moonraydevelopment.com" target="_blank">
          <motion.img
            src="/moonray-logo.svg"
            className="w-[80px]"
            whileHover={{ opacity: 0.6 }}
          ></motion.img>
        </Link>
        <Link href="https://www.linkedin.com/in/jaylen-garner/" target="_blank">
          <motion.img
            src="/linkedin-logo.png"
            className="w-[65px]"
            whileHover={{ opacity: 0.6 }}
          ></motion.img>
        </Link>
        <Link href="https://github.com/JaylenGarner/Outreacher" target="_blank">
          <motion.img
            src="/github-logo.png"
            className="w-[76px] mb-1"
            whileHover={{ opacity: 0.6 }}
          ></motion.img>
        </Link>
      </div>
    </div>
  );
};

export default Info;
