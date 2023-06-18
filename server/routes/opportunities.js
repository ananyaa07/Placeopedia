const express=require('express');
const router=express.Router();

const {createOpportunity,getAllOpportunities,updateOpportunity,deleteOpportunity}=require('../controllers/opportunities');

router.route('/').post(createOpportunity);
router.route('/:category').get(getAllOpportunities);
router.route('/:id').patch(updateOpportunity).delete(deleteOpportunity);


module.exports=router;