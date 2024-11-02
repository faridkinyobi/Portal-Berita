import { Berita } from '../Berita/model';
import { Catagory } from './model';
import { Response, Request } from 'express';

export const create = async (req: Request, res: Response) => {
  try {
    const checkCatagory = await Catagory.findOne({
      where: {
        name: req.body.name,
      },
    });
    if (checkCatagory)
      return res.status(400).json({ msg: 'Catagory Duplicate' });
    const result = await Catagory.create({
      name: req.body.name,
    });
    return res.status(201).json({ msg: 'Creat successfully', data: result });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error', error });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const checkCatagory = await Catagory.findOne({
      where: {
        id: id,
      },
    });
    if (!checkCatagory)
      return res
        .status(400)
        .json({ msg: `Tidak ada caragory dengan id:${id}` });
    const result = await Catagory.update(
      { name: req.body.name },
      {
        where: {
          id: id,
        },
      },
    );
    res.status(200).json({
      msg: 'Update successfully',
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error', error });
  }
};

export const delet = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const checkCatagory = await Catagory.findOne({
      where: {
        id: id,
      },
    });
    if (!checkCatagory)
      return res
        .status(400)
        .json({ msg: `Tidak ada caragory dengan id:${id}` });
    await Catagory.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      msg: 'Delet successfully',
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error', error });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const result = await Catagory.findAll();

    res.status(200).json({ data: result });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error', error });
  }
};
