const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const productData = await Tag.findAll({ 
      include: [
        {
          model: Product,
          through: ProductTag,
        }
      ] 
    });

    res.status(200).json(productData);

  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const productData = await Tag.findByPk({ 
      include: [
        {
          model: Product,
          through: ProductTag,
        }
      ] 
    });

    res.status(200).json(productData);

  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  const productData = await Tag.create(req.body);
    return res.json(productData);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const categoryData = await Tag.update(
    req.body,
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(categoryData);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const categoryData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(categoryData);
});

module.exports = router;
