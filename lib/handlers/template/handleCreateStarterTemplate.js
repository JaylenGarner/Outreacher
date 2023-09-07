import handleCreateTemplate from "./handleCreateTemplate";

export const handleCreateStarterTemplate = () => {
  const formData = {
    name: "Outreach Example",
    body: `Dear {Contact Name},

I noticed your role as {Contact Title} at {Company}, and I've applied for the {Position} position. I believe I possess the skills and expertise required to excel in this role.

I have attached my resume for your reference.

Thank you for taking the time to consider my application. I'm excited about the opportunity to work with {Company} and contribute to its ongoing success.

Best regards,`,
  };
  handleCreateTemplate(formData);
};
