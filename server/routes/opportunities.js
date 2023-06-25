const express=require('express');
const router=express.Router();

const {getAllOpportunities,updateOpportunity,deleteOpportunity}=require('../controllers/opportunities');
const {verifyUser,verifyAdmin}=require('../middleware/verifyUser');

router.route('/admin/:id').patch(verifyAdmin, updateOpportunity).delete(verifyAdmin, deleteOpportunity);
router.route('/:category').get(getAllOpportunities);


module.exports=router;