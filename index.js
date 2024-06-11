const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require('./models/product.model')

app.use(express.json());
//url encoded 
app.use(express.urlencoded({extended:false}));


mongoose.connect("mongodb+srv://lahonbhargab:LahonUP01@cluster0.kkdgnl6.mongodb.net/Node-API")
.then(()=>{
    console.log('MongoDB Connected');
})
.catch(()=>{
    console.log('MongoDB Connection Failed');
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})
app.get('/',(req,res)=>{
    res.send('Hello World hkhhkjh')
});

//creating api to add pizza

app.post('/api/products',async(req,res)=>{
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({message:error.message});
  }
});

//creating api to get pizza
app.get('/api/products',async(req,res)=>{
  try{
    const product = await Product.find();
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({message:error.message});
  }
});

//api to get pixxa by id
app.get('/api/products/:id',async(req,res)=>{
  try{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({message:error.message});
  }
});

//api to get by id and update
app.get('/api/products/:id',async(req,res)=>{
  try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body);
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({message:error.message});
  }
});

//api to get by id and update alternate
app.put('/api/products/:id',async(req,res)=>{
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
});

//delete api
app.delete('/api/products/:id',async(req,res)=>{
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
});