const {Router }=require('express');
const {getDatas,postDatas,getData}=require("../controllers/datv.controllers")
const router = Router();



router.route('/')
    .get(getDatas)
    .post(postDatas)



router.route('/:id')
    .get(getData)

module.exports = router;