// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category,{
  foreignKey:'category_id',
});
Category.belongsTo(Product,{
  foreignKey:'category_id',
});
// Categories have many Products
Category.hasMany(Product,{
  foreignKey:'category_id'
});
Category.belongsTo(Product,{
  foreignKey:'category_id',
});
// Products belongToMany Tags (through ProductTag)
Product.hasMany(Tag,{
  foreignKey:'product_id'
});
Tag.belongsTo(Product,{
  foreignKey:'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.hasMany(Product,{
  foreignKey:'tag_id'
});

Product.belongsTo(Tag,{
  foreignKey:'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
