const express = require("express");
const inputData = require("../models/data.model");
const router = express.Router();

//to post a input
router.post("/data", (req, res) => {
  try {
    const nums = req.body.nums;
    nums.sort((a, b) => a - b);
    let n = nums.length / 2;
    let minAbsDiff = Number.MAX_VALUE;

    for (let i = 0; i < n; i++) {
      let array1 = nums.slice(0, n);
      let array2 = nums.slice(n);
      let sum1 = array1.reduce((a, b) => a + b, 0);
      let sum2 = array2.reduce((a, b) => a + b, 0);
      let absDiff = Math.abs(sum1 - sum2);
      minAbsDiff = Math.min(minAbsDiff, absDiff);
      nums.push(nums.shift());
    }

    const obj = {
      nums: nums,
      result: minAbsDiff,
    };
    const arr = new inputData(obj);
    arr.save().then((data) => {
      res
        .status(201)
        .json({
          id: data._id,
          result: data.result,
          message: "data created successfully",
        });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

//to get a output
router.get("/data", (req, res) => {
  try {
    inputData.find((err, data) => {
      if (err) {
        return res.status(400).send({ message: "Error while getting output" });
      }
      return res.status(200).send(data);
    });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});
module.exports = router;
