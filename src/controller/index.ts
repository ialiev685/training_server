import { Request, Response } from "express";

class Controller {
  static getLink = async (req: Request, res: Response) => {
    return res.send("возвращаю ссылку по id");
  };

  static addLink = async (req: Request, res: Response) => {
    return res.send("возвращаю id после сохранения");
  };
}

export { Controller };
