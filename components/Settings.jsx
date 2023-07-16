"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { setUser } from "@/redux/reducers/userSlice";
import { useEffect } from "react";
import handleEditSettings from "../lib/user/handleEditSettings";
import { useSession } from "next-auth/react";

const Settings = () => {
  const { data: session, update } = useSession();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [tooltipsEnabled, setTooltipsEnabled] = useState(user?.tooltipsEnabled);

  const handleUpdate = async () => {
    const formData = {};
    const userId = user._id;

    if (tooltipsEnabled !== user.tooltipsEnabled) {
      formData.tooltipsEnabled = tooltipsEnabled;
    }

    if (Object.keys(formData).length > 0) {
      const updatedUser = await handleEditSettings(formData, userId);
      dispatch(setUser(updatedUser));
      await update({
        ...session,
        user: {
          ...session?.user,
          tooltipsEnabled: tooltipsEnabled,
        },
      });
    }
  };

  useEffect(() => {
    handleUpdate();
  }, [tooltipsEnabled]);

  console.log("SESSION", session);

  return (
    <>
      <div className="flex flex_center pt-4 space-x-4">
        <h1 className="modal_header mb-8">Settings</h1>
      </div>

      <form className="form">
        <div className="flex justify-between items-center w-[500px]">
          <span className="text-2xl font-semibold">Show Tooltips</span>
          <input
            type="checkbox"
            className="h-6 w-6 mr-3 accent-violet-600"
            checked={tooltipsEnabled}
            onChange={async () => setTooltipsEnabled(!tooltipsEnabled)}
          />
        </div>

        {/* <div className="flex justify-between items-center w-[500px]">
            <span className="text-2xl font-semibold">
              Enable outreach on weekends
            </span>
            <input
              type="checkbox"
              className="h-6 w-6 mr-3 accent-violet-600"
              checked
            />
          </div>

          <div className="flex justify-between items-center w-[500px]">
            <span className="text-2xl font-semibold">
              Enable outreach on holidays
            </span>
            <input
              type="checkbox"
              className="h-6 w-6 mr-3 accent-violet-600"
              checked
            />
          </div>

          <div className="flex justify-between items-center w-[500px]">
            <span className="text-2xl font-semibold">
              Days between outreach attempts
            </span>

            <select
              // value={status}
              // onChange={(e) => setStatus(e.target.value)}
              className="settings_input"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
          </div> */}
      </form>

      {/* <button>Delete Account</button> */}
    </>
  );
};

export default Settings;
