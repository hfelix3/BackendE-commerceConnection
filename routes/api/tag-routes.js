const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const productData = await Product.findAll({ 
      include: [
        { 
          model: ProductTag,
          attributes: ['id', 'product_id', 'tag_id'] 
        },
        {
          model: Tag,
          attributes: ['id', 'tag_name']
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
    const productData = await Product.findByPk({ 
      include: [
        {
          model: Tag,
          attributes: ['id']
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
  const productData = await user.create(req.body);
    return res.json(productData);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
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
  // delete on tag by its `id` value
  const categoryData = await user.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(categoryData);
});

module.exports = router;
