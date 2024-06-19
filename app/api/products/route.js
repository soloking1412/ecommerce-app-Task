import connectDB from '../../../utils/db';
import Product from '../../../models/Product';

export const GET = async () => {
  await connectDB();
  try {
    const products = await Product.find();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
  }
};

export const POST = async (req) => {
  await connectDB();
  const { name, description, price, imageUrl } = await req.json();
  try {
    const product = new Product({ name, description, price, imageUrl });
    await product.save();
    return new Response(JSON.stringify(product), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
  }
};
