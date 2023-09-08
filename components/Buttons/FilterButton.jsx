"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setApplicationFeedFilter } from "@/redux/reducers/applications/applicationFeedFilterSlice";

const FilterButton = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("All");
  const [selectionOpen, setSelectionOpen] = useState(false);

  useEffect(() => {
    dispatch(setApplicationFeedFilter(filter));
  }, [filter]);

  return (
    <>
      <HoverScaleMedium>
        <button onClick={() => setSelectionOpen(!selectionOpen)}>
          <FontAwesomeIcon icon={faFilter} className="fa-2xl text-white" />
        </button>
      </HoverScaleMedium>

      {selectionOpen && (
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded text-center"
        >
          <option>All</option>
          <option>Queue</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>No Response</option>
          <option>Rejected</option>
          <option>Offer</option>
          <option>Hired</option>
        </select>
      )}
    </>
  );
};

export default FilterButton;
