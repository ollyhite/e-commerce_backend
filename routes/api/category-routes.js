const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findByPk } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoriesData = await Category.findAll({
      include: [{model:Product}]
    })
    res.status(200).json(categoriesData);
  }catch(err){
    res.status(400).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categorieData = await Category.findByPk(req.params.id,{
      include: [{model:Product}]
    })
    res.status(200).json(categorieData);
  }catch(err){
    res.status(400).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const newCategoryData = await Category.create(req.body)
    res.status(200).json(newCategoryData);
  }catch(err){
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const updateCategoryData = await Category.update(req.body, {
      Where:{
        id:req.params.id
      }
    })
    res.status(200).json(updateCategoryData);
  }catch(err){
    res.status(400).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deteCategory = Category.destroy({ 
      Where:{
        id:req.params.id
      }
    })
    res.status(200).json(deteCategory);
  }catch(err){
    res.status(400).json(err)
  }
});

module.exports = router;
