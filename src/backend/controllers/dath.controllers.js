const dataHCtrl={


}

const datoHModel=require('../models/datoh')


dataHCtrl.getDatas =async (req,res)=>{
    const datos=await datoHModel.find();
    res.json(datos)
} 

dataHCtrl.postDatas=async (req,res)=>{

    const {_id,val,date}=req.body;

    const newDatos=new datoHModel({
        _id:_id,
        val:val,
        date:date
    });
    await newDatos.save()
    console.log(newDatos)
    res.json({"message":"Dato agregado"})
} 
dataHCtrl.getData =async (req,res)=>{
    const datos=await datoHModel.findById(req.params.id)
    console.log(datos);
    res.json(datos)
} 

module.exports=dataHCtrl;
