const dataVCtrl={


}

const datoVModel=require('../models/datov')


dataVCtrl.getDatas =async (req,res)=>{
    const datos=await datoVModel.find();
    res.json(datos)
} 

dataVCtrl.postDatas=async (req,res)=>{

    const {_id,val,date}=req.body;

    const newDatos=new datoVModel({
        _id:_id,
        val:val,
        date:date
    });
    await newDatos.save()
    console.log(newDatos)
    res.json({"message":"Dato agregado"})
} 
dataVCtrl.getData =async (req,res)=>{
    const datos=await datoVModel.findById(req.params.id)
    console.log(datos);
    res.json(datos)
} 

module.exports=dataVCtrl;
