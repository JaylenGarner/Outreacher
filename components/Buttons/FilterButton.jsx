"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setApplicationFeedFilter } from "@/redux/reducers/applications/applicationFeedFilterSlice";
import { motion } from "framer-motion";

const FilterButton = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    dispatch(setApplicationFeedFilter(filter));
  }, [filter]);

  return (
    <motion.select
      value={filter}
      onChange={(e) => {
        setFilter(e.target.value);
      }}
      whileHover={{ opacity: 0.8, scale: 1.1 }}
      className="rounded text-center cursor-pointer"
    >
      <option>All</option>
      <option>Queue</option>
      <option>Applied</option>
      <option>Interview</option>
      <option>No Response</option>
      <option>Rejected</option>
      <option>Offer</option>
      <option>Hired</option>
    </motion.select>
  );
};

export default FilterButton;
