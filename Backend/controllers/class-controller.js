const mongoose = require('mongoose')

const Class = require('../models/class');

const getAllClass = async(req, res, next) => {
    let ac;
    try {
        ac = await Class.find();
    } catch (err) {
        const error = new Error("could not find");
        return next(error);
    }
    res.json({ ac });
}
const createClass = async(req, res, next) => {

    const { name, isComplete } = req.body;

    const createdClass = new Class({
        name,
        isComplete,
    });
    try {
        await createdClass.save();
    } catch (err) {
        const error = new Error(
            'Creating Class failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ Class: createdClass.toObject({ getters: true }) });
};
//update name
const updateClass = async(req, res, next) => {
    const { name } = req.body;
    const ClassId = req.params.pid;

    let ClassUpdate;
    try {
        ClassUpdate = await Class.findById(ClassId);
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not find a Class.',
            500
        );
        return next(error);
    }

    ClassUpdate.name = name;
    try {
        await ClassUpdate.save();
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not update Class.',
            500
        );
        return next(error);
    }

    res.status(200).json({ Class: ClassUpdate.toObject({ getters: true }) });
};
//upadate complete true/false
const updateClassIsComplete = async(req, res, next) => {
    const { isComplete } = req.body;
    const ClassId = req.params.pid;

    let ClassUpdate;
    try {
        ClassUpdate = await Class.findById(ClassId);
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not find a Class.',
            500
        );
        return next(error);
    }

    ClassUpdate.isComplete = isComplete;
    try {
        await ClassUpdate.save();
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not update Class.',
            500
        );
        return next(error);
    }

    res.status(200).json({ Class: ClassUpdate.toObject({ getters: true }) });
};
const deleteClass = async(req, res, next) => {
    const ClassId = req.params.pid;

    let ClassDelete;
    try {
        ClassDelete = await Class.findById(ClassId);
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not delete Class.',
            500
        );
        return next(error);
    }

    if (!ClassDelete) {
        const error = new Error('Could not find Class for this id.', 404);
        return next(error);
    }

    try {
        await ClassDelete.remove();
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not delete Class.',
            500
        );
        return next(error);
    }

    res.status(200).json({ message: 'Deleted Class.' });
};

exports.getAllClass = getAllClass;
exports.createClass = createClass;
exports.updateClass = updateClass;
exports.updateClassIsComplete = updateClassIsComplete;
exports.deleteClass = deleteClass;