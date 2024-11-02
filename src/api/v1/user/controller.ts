import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from './model';
import { Request, Response } from 'express';
import { config } from '../../../config';

export const signUp = async (req: Request, res: Response) => {
  const { email, role, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ msg: 'Password dan confirmPassword tidak cocok' });
    const checkEmail = await User.findOne({
      where: {
        email: email,
      },
    });
   
    if (checkEmail) return res.status(400).json({ msg: 'email Duplicate' });

    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      email,
      role,
      password: hashPassword,
    });
    return res.status(201).json({ msg: 'registered successfully' });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error', error });
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res
        .status(400)
        .json({ msg: 'Silakan berikan email dan kata sandi' });

    const result = await User.findOne({ where: { email: email } });
    // console.log(result);
    if (!result) return res.status(403).json({ msg: 'Kredensial Tidak Valid' });

    const comparePassword = await bcrypt.compare(password, result.password);
    if (!comparePassword)
      return res.status(403).json({ msg: 'Kredensial Tidak Valid' });

    const payload = {
      email: result.email,
      role: result.role,
    };

    const token = jwt.sign(payload, config.jwtSecret, {
      expiresIn: config.jwtExpiration,
    });

    return res.status(200).json({
      msg: 'Login successfully',
      token: token,
      email: result.email,
      role: result.role,
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error', error });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const result = await User.findAll();
    res.status(200).json({ data: result });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error', error });
  }
};
