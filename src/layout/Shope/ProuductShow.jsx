// pages/ProductPage.jsx

import CategorySidebar from '../../components/Catagories/Caragories';
import FilterSidebar from '../../components/Prices/FilterPrices';
import NewProductsSidebar from '../../components/Products/NewProducts';
import ProductGrid from '../../components/Products/ProductGrid'

const ProductShow = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
      price: 28.85,
      oldPrice: 32.8,
      image: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834',
      category: 'Snacks',
      brand: 'NeatFood',
      badge: 'Hot',
      badgeColor: 'bg-pink-500'
    },
    {
      id: 2,
      name: 'All Natural Italian-Style Chicken Meatballs',
      price: 52.85,
      oldPrice: 55.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s',
      category: 'Fresh Meat',
      brand: 'Stouffer',
      badge: 'Sale',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 3,
      name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
      price: 48.85,
      oldPrice: 52.8,
      image: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834',
      category: 'Snack',
      brand: 'StarKist',
      badge: 'New',
      badgeColor: 'bg-green-500'
    },
    {
      id: 4,
      name: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
      price: 17.85,
      oldPrice: 19.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFt6Iz3D590bKd1YDJROFYTQz_H57VLft_Q&s',
      category: 'Vegetables',
      brand: 'NeatFood',
      badge: '',
      badgeColor: ''
    },
    {
      id: 5,
      name: 'Blue Diamond Almonds Lightly Salted Vegetables',
      price: 23.85,
      oldPrice: 25.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s',
      category: 'Fruits',
      brand: 'NeatFood',
      badge: 'Hot',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 6,
      name: 'Chobani Complete Vanilla Greek Yogurt',
      price: 54.85,
      oldPrice: 59.8,
      image: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834',
      category: 'Dairy',
      brand: 'NeatFood',
      badge: '',
      badgeColor: ''
    },
    {
      id: 7,
      name: 'Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g',
      price: 32.85,
      oldPrice: 33.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFt6Iz3D590bKd1YDJROFYTQz_H57VLft_Q&s',
      category: 'Coffee & Teas',
      brand: 'NeatFood',
      badge: 'Sale',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 8,
      name: 'Encore Seafoods Stuffed Alaskan Salmon',
      price: 35.85,
      oldPrice: 37.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFt6Iz3D590bKd1YDJROFYTQz_H57VLft_Q&s',
      category: 'Meats',
      brand: 'NeatFood',
      badge: 'Hot',
      badgeColor: 'bg-pink-500'
    },
    {
      id: 9,
      name: "Gorton's Beer Battered Fish Fillets with soft paper",
      price: 23.85,
      oldPrice: 25.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s',
      category: 'Meats',
      brand: 'Old El Paso',
      badge: '',
      badgeColor: ''
    },
    {
      id: 10,
      name: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
      price: 22.85,
      oldPrice: 24.8,
      image: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834',
      category: 'Milks & Dairies',
      brand: 'Tyson',
      badge: '',
      badgeColor: ''
    },
  ];

  // Featured products for the sidebar (showing only 3)
  const featuredProducts = products.slice(0, 3);

  // Handler for filter button click
  const handleFilter = () => {
    console.log("Filtering products...");
    // Implement filter logic here
  };

  // Handler for add to cart button
  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    // Implement add to cart logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Sidebar Column */}
        <div className="md:w-1/4 space-y-6 mb-6 md:mb-0">
          <CategorySidebar />
          <FilterSidebar 
            onFilter={handleFilter}
          />
          <NewProductsSidebar 
            products={featuredProducts}
          />
        </div>
        
        {/* Products Column */}
        <div className="md:w-3/4">
          <ProductGrid 
            products={products}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShow;