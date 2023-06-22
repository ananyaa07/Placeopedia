const express=require('express');
const router=express.Router();

const {getAllOpportunities,updateOpportunity,deleteOpportunity}=require('../controllers/opportunities');
const {verifyUser,verifyAdmin}=require('../middleware/verifyUser');

router.route('/:category').get(verifyUser, getAllOpportunities);
router.route('/:id').patch(verifyAdmin, updateOpportunity).delete(verifyAdmin, deleteOpportunity);


module.exports=router;