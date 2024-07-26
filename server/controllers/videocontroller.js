import { createError } from "../error.js";
import Video from "../models/Video.js";
import mongoose from "mongoose"; 

export const addVideo = async (req, res, next) => {
    const newVideo = new Video({userId:req.user.id, ...req.body});
    try{
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo);
    } catch(err){
        next(err);
     }
};

export const updateVideo = async (req, res, next) => {
    try{
        const video = await Video.findById(req.params.id)
        if(!video) return next(createError(404, "Video not Found!"))
        if(req.user.id === video.userId){
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
                $set:req.body
            },
        { new: true });
        res.status(200).json(updatedVideo)
        } else {
            return next (createError(403, "You can update only your video!"))
        }
    } catch(err) {
        next(err);
    }
};

export const deleteVideo = async (req, res, next) => {
    try{
        const video = await Video.findById(req.params.id);
        if(!video) return next(createError(404, "Video not Found!"));
        if (req.user.id === video.userId){
            await Video.findByIdAndDelete(
                req.params.id,
            );
            res.status(200).json("Video Deleted Successfully");
        } else {
            return next(createError(403, "You can delete only you Video!"))
        }

    } catch(err) {
        next(err);
    }
};

export const getVideo = async (req, res, next) => {
    try{
        const video = await Video.findById(req.params.id)
        req.status(200).json(video)
    } catch(err) {
        next(err);
    }
};

export const addView = async (req, res, next) => {
    try{
        await Video.findByIdAndUpdate(req.params.id,{
            $inc:{views:}
        })
        res.status(200).json(video)
    } catch (err) {
        next(err);
    }
};

export const random = async (req, res, next) => {
    try{
        const video = Video.findById(req.params.id)
        res.status(200).json(video)
    } catch (err) {
        next(err);
    }
};

export const trend = async (req, res, next) => {
    try{
        const video = Video.findById(req.params.id)
        res.status(200).json(video)
    } catch(err) {
        next(err);
    }
};

export const sub = async (req, res, next) => {
    try{
        const video = Video.findById(req.params.id)
        res.status(200).json(video)
    } catch(err) {
        next(err);
    }
};
