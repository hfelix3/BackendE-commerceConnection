const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await User.findAll();
    res.json(categoryData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Product.findByPk(req.params.id, {
      include: [
        { 
          model: Category,
          attributes: ['id', 'category_name'] 
        },
        {
          model: Tag,
          attributes: ['id', 'tag_name']
        }
      ] 
    });

    res.status(200).json(categoryData);

  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await user.create(req.body);
    return res.json(categoryData);
});

router.put('/:id', async(req, res) => {
  //TODO: update a category by its `id` value
  const categoryData = await user.update(
    {
      name: req.body.name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(categoryData);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await user.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(categoryData);
});

module.exports = router;
