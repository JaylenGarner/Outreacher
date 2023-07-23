import prisma from "../../../lib/prisma";

const test = () => {
  let user;

  const getUsers = async () => {
    const users = await prisma.user.findFirst({
      include: {
        applications: true,
      },
    });
    console.log(users);
    setUser();
    user = users;
    return users;
  };

  getUsers();
  return (
    <div>
      <h1>hi</h1>
      {user && <h2>{user.email}</h2>}
    </div>
  );
};

export default test;
