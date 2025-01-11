import { Request, Response } from 'express';
import Thought from '../models/Thought';
import User from '../models/User';

const thoughtController = {
  getAllThoughts: async (req: Request, res: Response) => {
    try {
      const thoughts = await Thought.find({});
      res.status(200).json(thoughts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getThoughtById: async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findById(req.params.id);
      res.status(200).json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createThought: async (req: Request, res: Response) => {
    try {
      const thought = await Thought.create(req.body);
      await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } });
      res.status(200).json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateThought: async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteThought: async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.id);
      res.status(200).json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  addReaction: async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: req.body } },
        { new: true }
      );
      res.status(200).json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteReaction: async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      res.status(200).json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default thoughtController;