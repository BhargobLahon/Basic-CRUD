const express = require("express");
const Product = require("../models/product.model");

const getProducts = async(req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
const orderProducts = async(req,res)=>{
    try{
      const product = await Product.create(req.body);
      res.status(200).json(product);
    }catch(error){
      res.status(500).json({message:error.message});
    }
  }
const getidProducts = async(req,res)=>{
    try{
      const {id} = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    }catch(error){
      res.status(500).json({message:error.message});
    }
  }
  const getupdateProducts =async(req,res)=>{
    try{
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id,req.body);
      //if product doesnt exist 
      if(!product){
        res.status(404).json("product not found");
      }
  
      const updtproduct = await Product.findById(id)
      res.status(200).json(updtproduct);
    }catch(error){
      res.status(500).json({message:error.message});
    }
  }
  const deleteProducts = async(req,res)=>{
    try{
          const {id} = req.params;
  
          const product = await Product.findByIdAndDelete(id);
  
          if(!product){
            res.status(404).json("product not found");
          }else{
            res.status(200).json("product deleted");
          }
  
    }catch(error){
          res.status(500).json({message:error.message});
    }
}


module.exports={
    getProducts,
    orderProducts,
    getidProducts,
    getupdateProducts,
    deleteProducts
}