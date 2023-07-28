const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedUser() {
  const user = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      firstName: "Test",
      email: "test@test.com",
      password: `$2y$12$GBfcgD6XwaMferSOdYGiduw3Awuo95QAPhxFE0oNJ.Ds8qj3pzEZy`,
    },
  });
  return user;
}

async function seedApplication(userId) {
  const application = await prisma.application.create({
    data: {
      company: "Example Company",
      position: "Software Engineer",
      status: "Applied",
      userId: userId,
    },
  });
  return application;
}

async function seedContact(applicationId, userId) {
  const contact = await prisma.contact.create({
    data: {
      name: "John Doe",
      title: "HR Manager",
      email: "john.doe@example.com",
      outreachStage: "Initial Contact",
      applicationId: applicationId,
      userId: userId,
      outreachDate: new Date(),
      nextActionDate: new Date(),
    },
  });
  return contact;
}

async function main() {
  try {
    const user = await seedUser();
    console.log({ user });

    const application = await seedApplication(user.id);
    console.log({ application });

    const contact = await seedContact(application.id, user.id);
    console.log({ contact });
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
