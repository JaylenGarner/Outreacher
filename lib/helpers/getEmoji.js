const getEmoji = (status) => {
  if (status === "Queue") return "⏳";
  if (status === "Applied") return "✅";
  if (status === "Interview") return "💼";
  if (status === "No Response") return "🙃";
  if (status === "Rejected") return "🥲";
  if (status === "Offer") return "🤩";
  if (status === "Hired") return "🏆";
};

export default getEmoji;
