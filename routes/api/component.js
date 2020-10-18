const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const Component = require("../../models/Component");

// @route   Get api/component
// @desc    Get all components
// @access  Public
router.get("/", async (req, res) => {
  try {
    const components = await Component.find().sort();
    res.json(components);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Put api/component
// @desc    Add component
// @access  Public
router.put(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("cost", "Cost is required").not().isEmpty(),
    check("fixedCost", "Fixed cost option is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newComponent = new Component({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        fixedCost: req.body.fixedCost,
      });

      const component = await newComponent.save();

      res.json(component);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
