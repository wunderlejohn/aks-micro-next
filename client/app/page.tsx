interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

async function getProducts() {
  const response = await fetch(
    `http://localhost:8080/api/products`
    // { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch products');
  }
  return response.json();
}

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <main className='flex min-h-screen justify-center items-center flex-col'>
      <h1 className='text-green-400 text-3xl'>Hi Kroger!</h1>
      <div className='flex m-2 p-2'>
        {products.map((product) => (
          <div
            key={product.id}
            className='rounded shadow-md p-4 m-4 bg-white text-black'
          >
            <h2 className='text-xl font-bold'>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
