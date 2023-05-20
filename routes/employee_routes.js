const express = require('express');
const employee=require("../models/employee")
const router=new express.Router();

router.get("/getemployee",async(req,res)=>{
    try {
        const employeeObject= await employee.find();
        //console.log(employeeObject)
        res.json(employeeObject);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
})

router.put("/updateEmployeeDetails/:_id",async(req,res)=>{
    
    try {
        console.log(req.body)
         //console.log(req.params._id)
        let data=await employee.findByIdAndUpdate({_id:req.params._id},req.body);
         //console.log(data);
         res.json(data);
    } catch (error) {
        console.log(error)
    }
 })

router.get("/getDistinctValue",async (req,res)=>{
    try {
        const DistinctContractObject= await employee.distinct("contract");
        const DistinctWorkStyleObject= await employee.distinct("workStyle");
        const DistinctTypeObject= await employee.distinct("type");
        const distinct={contract:DistinctContractObject,workStyle:DistinctWorkStyleObject,type:DistinctTypeObject,};
        res.json(distinct);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
    
})

router.post("/getPieData",async (req,res)=>{
    try {
        let obj="$"+req.body.name;
        console.log(obj);
        const FilteredDataCount= await (await employee.aggregate([{"$group": {"_id":obj, "count":{"$sum": 1}}}])).sort((a,b)=>b.count-a.count).filter(a=>a._id!=="")
        console.log(FilteredDataCount)
        res.json(FilteredDataCount);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
    
})

router.post("/getCount",async (req,res)=>{
    try {
        let obj=req.body
        const FilteredDataCount= await employee.find(obj).count();
       // console.log(FilteredDataCount)
        res.json(FilteredDataCount);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
    
})

router.get("/findbyEmployee/:_id",async(req,res)=>{
    try {
       let _id=req.params._id
      // console.log(_id);
       const employeeObject= await employee.findById(_id);
      //console.log(employeeObject)
       res.json(employeeObject);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
})

router.post("/addEmployee",async(req,res)=>{
    try {   
        console.log(req.body);
        const employeeInfo=req.body;
        const newemployee=new employee(employeeInfo);
        await newemployee.save();
        res.json(newemployee);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    } 
})

module.exports=router