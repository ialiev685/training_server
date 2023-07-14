import { Request, Response } from "express";
import * as db from "../db";

class Controller {
  static getLink = async (req: Request, res: Response) => {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [1]);

    console.log(result);

    return res.send("возвращаю ссылку по id");
  };

  static addLink = async (req: Request, res: Response) => {
    return res.send("возвращаю id после сохранения");
  };
}

export { Controller };
