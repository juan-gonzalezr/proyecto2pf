const datasCtrl={


}

const datosModel=require('../models/datos')


datasCtrl.getDatas =async (req,res)=>{
    const datos=await datosModel.find();
    res.json(datos)
} 

datasCtrl.postDatas=async (req,res)=>{

    const {_id,val,date}=req.body;

    const newDatos=new datosModel({
        _id:_id,
        val:val,
        date:date
    });
    await newDatos.save()
    console.log(newDatos)
    res.json({"message":"Dato agregado"})
} 
datasCtrl.getData =async (req,res)=>{
    const datos=await datosModel.findById(req.params.id)
    console.log(datos);
    res.json(datos)
} 

module.exports=datasCtrl;
