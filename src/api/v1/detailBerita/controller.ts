import { Op } from 'sequelize';
import { Berita } from '../Berita/model';
import { DetailBerita } from './model';
import { Response, Request } from 'express';

export const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Berita.findOne({
      where: { id },
      include: [{ model: DetailBerita, as: 'detail' }],
    });

    if (!result) {
      return res.status(404).json({ msg: 'Berita tidak ditemukan' });
    }

    return res.status(200).json({
      msg: 'Berhasil mendapatkan detail berita',
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error', error });
  }
};

export const searchBerita = async (req: Request, res: Response) => {
  const { keyboard } = req.query;
  try {
    const result = await Berita.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${keyboard}%` } },
          { desc: { [Op.like]: `%${keyboard}%` } },
        ],
      },
      include: [{ model: DetailBerita, as: 'detail' }],
    });

    if (result.length === 0) {
      return res.status(404).json({ msg: 'Berita tidak ditemukan' });
    }

    return res.status(200).json({
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error', error });
  }
};
