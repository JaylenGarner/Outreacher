// "use client";

// import { useDispatch, useSelector } from "react-redux";
// import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
// import { motion } from "framer-motion";
// import ContactForm from "./ContactForm";
// // import handleEditApplication from "../../lib/application/handleEditApplication";
// import CreateContact from "./CreateContact";
// import { deleteApplication } from "@/redux/reducers/applicationSlice";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

// const handleEditContact = () => {
//   const dispatch = useDispatch();
//   const application = useSelector((state) => state.currentApplicationReducer);

//   const handleUpdate = async (formData) => {
//     const updatedContact = await handleEditContact(formData, application._id);

//     dispatch(createApplication(updatedContact));
//     dispatch(clearCurrentModal());
//   };

//   //   const handleDelete = async () => {
//   //     const response = await fetch(
//   //       `http://localhost:3000/api/applications/${application._id}`,
//   //       {
//   //         method: "DELETE",
//   //       }
//   //     );

//   //     if (response) {
//   //       dispatch(deleteApplication(application));
//   //       dispatch(clearCurrentModal());
//   //     }
//   //   };

//   return (
//     <>
//       <div className="flex flex_center">
//         <h1 className="modal_header pr-4">
//           Last Activity &nbsp;
//           {new Date(application.updatedAt).toLocaleDateString()}
//         </h1>
//         <motion.button
//           transition={{ duration: 0.5 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.8 }}
//           className="pt-4 hover:text-[#E01D48]"
//           onClick={() => handleDelete()}
//         >
//           <FontAwesomeIcon icon={faTrash} />
//         </motion.button>
//       </div>
//       <ContactForm
//         type={"Edit"}
//         contact={contact}
//         handleUpdate={handleUpdate}
//       />
//     </>
//   );
// };

// export default handleEditContact;
