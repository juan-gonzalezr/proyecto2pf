const {Router }=require('express');
const {getDatas,postDatas,getData}=require("../controllers/data.controllers")
const router = Router();



router.route('/')
    .get(getDatas)
    .post(postDatas)



router.route('/:id')
    .get(getData)

module.exports = router;