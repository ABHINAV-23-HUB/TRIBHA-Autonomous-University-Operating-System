const Building = require("../models/Building");

// Create Building
const createBuilding = async (req, res) => {
    try {

        const building = await Building.create(req.body);

        res.status(201).json({
            success: true,
            message: "Building Created Successfully",
            building
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get All Buildings
const getBuildings = async (req, res) => {

    try {

        const buildings = await Building.find();

        res.json({
            success: true,
            buildings
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get Single Building
const getBuilding = async (req, res) => {

    try {

        const building = await Building.findById(req.params.id);

        if (!building) {

            return res.status(404).json({
                success: false,
                message: "Building Not Found"
            });

        }

        res.json({
            success: true,
            building
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update Building
const updateBuilding = async (req, res) => {

    try {

        const building = await Building.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            message: "Building Updated",
            building
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Building
const deleteBuilding = async (req, res) => {

    try {

        await Building.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Building Deleted"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createBuilding,
    getBuildings,
    getBuilding,
    updateBuilding,
    deleteBuilding
};