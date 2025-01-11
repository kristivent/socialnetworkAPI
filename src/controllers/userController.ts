import { Request, Response } from 'express';
import Thought from '../models/Thought';
import User from '../models/User';

const userController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await User.find({}).populate('thoughts').populate('friends');
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getUserById: async (req: Request, res: Response) => {
    try {
      const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createUser: async (req: Request, res: Response) => {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateUser: async (req: Request, res: Response) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteUser: async (req: Request, res: Response) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  addFriend: async (req: Request, res: Response) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $push: { friends: req.params.friendId } },
        { new: true }
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteFriend: async (req: Request, res: Response) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default userController;