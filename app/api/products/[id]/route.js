import Product from '@/models/Products'; // Ensure the import is correct for your model

export async function DELETE(req, { params }) {
  const { id } = params; // Extract the product ID from params

  try {
    // Find the product by ID and delete it
    const deletedProduct = await Product.findByIdAndDelete(id); // Use 'Product', not 'Products'

    if (!deletedProduct) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify({ success: true, data: deletedProduct }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error('Error deleting product:', error); // Log the error for debugging
    return new Response(JSON.stringify({ error: "Error deleting product" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
