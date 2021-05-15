const { trim } = require('lodash');
const Boys = require('./boysModel');
const Girls = require('./girlsModels');

const Controller = {
    // Boys

    async postBoyName(req, res) {
        try {
            let name = new Boys(req.body);
            name = await user.save();
            return res.status(201).json({ success: true, message: 'Thank you for contributing to Igbo' })
        } catch (error) {
            return res.status(500).json({ success: false, error })
        }
    },

    async getBoyName(req, res) {
        try {
            let query = req.params.name.trim();
            query = query[0].toUpperCase() + query.substring(1);
            console.log(query)
            const name = await Boys.findOne({ name: query }, { _id: 0, __v: 0 });
            if (!name) {
                return res.status(404).json({ success: false, message: `${query} not found, feel free to contribute` });
            } return res.status(200).json({ success: true, data: name })
        } catch (error) { return res.status(500).json({ success: false, error }) }

    },

    async getAllBoys(req, res) {
        try {
            const names = await Boys.find({}, { _id: 0, __v: 0 });
            return res.status(200).json({ success: true, data: names })
        } catch (error) { return res.status(500).json({ success: false, error }) }
    },

    // Girls

    async getGirlName(req, res) {
        try {
            let query = req.params.name.trim();
            query = query[0].toUpperCase() + query.substring(1);
            console.log(query)
            const name = await Girls.findOne({ name: query }, { _id: 0, __v: 0 });
            if (!name) {
                return res.status(404).json({ success: false, message: `${query} not found, feel free to contribute` })
            } return res.status(200).json({ success: true, data: name })
        } catch (error) { return res.status(500).json({ success: false, error }) }
    },

    async getAllGirls(req, res) {
        try {
            const names = await Girls.find({}, { _id: 0, __v: 0 });
            return res.status(200).json({ success: true, data: names })
        } catch (error) { return res.status(500).json({ success: false, error }) }
    },
}

module.exports = Controller;