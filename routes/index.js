const express=require('express');
const router=express.Router();
const MsgController= require('../controllers/message_controller');

router.get('/messages', MsgController.find_All);
router.post('/message', MsgController.create);

module.exports=router;