const handleDeleteContact = async (contactId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/contacts/${contactId}`,
      {
        method: "DELETE",
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default handleDeleteContact;
