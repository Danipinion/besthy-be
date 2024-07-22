import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getMessages = async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      select: {
        text: true,
        date: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const createMessage = async (req, res) => {
  const { text } = req.body;
  try {
    await prisma.message.create({
      data: {
        text,
        user: {
          connect: {
            id: req.session.userId,
          },
        },
      },
    });
    res.status(201).json({ msg: "Message created successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
