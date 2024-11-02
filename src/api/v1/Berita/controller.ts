import { Berita } from './model';
import { Catagory } from '../categoryBerita/model';
import { Response, Request } from 'express';
import { DetailBerita } from '../detailBerita/model';
import fs, { existsSync, unlinkSync } from 'fs';
import path from 'path';

export const create = async (req: Request, res: Response) => {
  const { title, desc, catagoryId, detail } = req.body;
  const file = req.file;
  try {
    // Cek apakah kategori ada
    const checkCatagory = await Catagory.findOne({
      where: { id: catagoryId },
    });
    if (!checkCatagory)
      return res
        .status(400)
        .json({ msg: `Tidak ada Catagory dengan id:${catagoryId}` });

    const FileName = file
      ? `upload/img/${file.filename}`
      : 'uploads/avatar/user.png';

    const result = await Berita.create(
      {
        FileName,
        title,
        desc,
        catagoryId,
        detail: {
          isiBerita: detail.isiBerita,
          author: detail.author,
          editor: detail.editor,
        },
      },
      {
        include: [{ model: DetailBerita, as: 'detail' }],
      },
    );

    return res.status(201).json({
      msg: 'Create successfully',
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error', error });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, desc, catagoryId, detail } = req.body;
  const file = req.file;

  try {
    const checkBerita = await Berita.findOne({
      where: { id: id },
      include: [{ model: DetailBerita, as: 'detail' }],
    });

    if (!checkBerita)
      return res.status(400).json({ msg: `Tidak ada berita dengan id:${id}` });

    const FileName = file ? `upload/${file.filename}` : checkBerita.FileName;

    await deletImg(checkBerita);

    await Berita.update(
      {
        FileName,
        title,
        desc,
        catagoryId,
      },
      {
        where: { id: id },
      },
    );

    // memperbarui detail berita
    if (checkBerita) {
      await DetailBerita.update(
        {
          isiBerita: detail?.isiBerita,
          author: detail?.author,
          editor: detail?.editor,
        },
        {
          where: { beritaId: id },
        },
      );
    }
    return res.status(200).json({ msg: 'Berita berhasil diperbarui' });
  } catch (error) {
    console.log(error);
  }
};

export const delet = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const checkBerita = await Berita.findOne({
      where: { id },
      include: [{ model: DetailBerita, as: 'detail' }],
    });
    if (!checkBerita) {
      return res.status(404).json({ msg: `Tidak ada berita dengan id:${id}` });
    }
    await deletImg(checkBerita);

    await Berita.destroy({ where: { id: id } });

    res.status(200).json({ msg: 'Delet successfully' });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error', error });
  }
};

export const getData = async (req: Request, res: Response) => {
  try {
    
    const berita = await Berita.findAll({
      include: [{ model: Catagory, as: 'Catagory', attributes: ['name'] }],
    });

    return res.status(200).json({
      data: berita,
    });

  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error', error });
  }
};

interface CheckBerita {
  FileName: string;
}

const deletImg = (checkBerita: CheckBerita) => {
  if (
    checkBerita.FileName &&
    checkBerita.FileName !== 'uploads/avatar/user.png'
  ) {
    const oldFilepaths = path.join(
      __dirname,
      '../../../../public/',
      checkBerita.FileName,
    );
    if (fs.existsSync(oldFilepaths)) {
      fs.unlinkSync(oldFilepaths);
    }
  }
};
