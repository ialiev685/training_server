import { Request, Response } from "express";
import { prismaQuery } from "../db";

class Controller {
  static getLink = async (req: Request, res: Response) => {
    const result = await prismaQuery.user.findMany({
      include: {
        posts: true,
      },
    });

    await prismaQuery.$disconnect();

    return res.status(200).send(result);
  };

  static addLink = async (req: Request, res: Response) => {
    // const nameQuery = req.query.name;
    const { name } = req.params;

    try {
      const isExist = await prismaQuery.user.findUnique({
        where: {
          email: `${name}@mail.ru`,
        },
      });

      if (isExist) {
        return res
          .status(409)
          .json({ status: "error", message: "Такое имя уже существует" });
      }

      const result = await prismaQuery.user.create({
        data: { name, email: `${name}@mail.ru` },
      });
      await prismaQuery.$disconnect();

      return res.status(201).json(result);
    } catch (error) {
      return res
        .status(500)
        .json({ status: "error", message: "что-то пошло не так" });
    }
  };

  static updateLink = async (req: Request, res: Response) => {
    // const nameQuery = req.query.name;
    const { name } = req.params;

    try {
      const isExist = await prismaQuery.user.findUnique({
        where: {
          email: `${name}@mail.ru`,
        },
      });

      if (!isExist) {
        return res
          .status(409)
          .json({ status: "error", message: "Такого имени не существует" });
      }

      const result = await prismaQuery.user.update({
        where: { email: `${name}@mail.ru` },
        data: {
          posts: {
            create: {
              published: true,
              title: `I am ${name}`,
            },
          },
        },
      });
      await prismaQuery.$disconnect();

      return res.status(201).json(result);
    } catch (error) {
      return res
        .status(500)
        .json({ status: "error", message: "что-то пошло не так" });
    }
  };
}

export { Controller };
