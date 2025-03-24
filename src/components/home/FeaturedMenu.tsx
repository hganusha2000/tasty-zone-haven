
import { useState } from 'react';
import FoodCard from '../ui/FoodCard';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'main', name: 'Main Course' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' },
];

const menuItems = [
  {
    id: 1,
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with wild mushrooms and truffle oil',
    price: '$26',
    category: 'main',
    imageUrl: 'https://images.unsplash.com/photo-1673852487736-841d31e6ad0a?q=80&w=1964&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 2,
    name: 'Caprese Salad',
    description: 'Fresh tomatoes, mozzarella, basil, and balsamic glaze',
    price: '$14',
    category: 'appetizers',
    imageUrl: 'https://images.unsplash.com/photo-1615887509566-01322cfaf302?q=80&w=1974&auto=format&fit=crop',
    isPopular: false,
  },
  {
    id: 3,
    name: 'Pan-Seared Salmon',
    description: 'Atlantic salmon with lemon butter sauce and seasonal vegetables',
    price: '$32',
    category: 'main',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 4,
    name: 'Chocolate Soufflé',
    description: 'Warm chocolate soufflé with vanilla ice cream',
    price: '$12',
    category: 'desserts',
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 5,
    name: 'Signature Cocktail',
    description: 'House-made gin infusion with fresh berries and herbs',
    price: '$16',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1972&auto=format&fit=crop',
    isPopular: false,
  },
  {
    id: 6,
    name: 'Beef Wellington',
    description: 'Tenderloin wrapped in mushroom duxelles and puff pastry',
    price: '$42',
    category: 'main',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop',
    isPopular: false,
  },
  {
    id: 7,
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
    price: '$10',
    category: 'desserts',
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974&auto=format&fit=crop',
    isPopular: false,
  },
  {
    id: 8,
    name: 'Bruschetta',
    description: 'Toasted baguette with tomatoes, garlic, and fresh basil',
    price: '$12',
    category: 'appetizers',
    imageUrl: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=1974&auto=format&fit=crop',
    isPopular: false,
  },
];

const FeaturedMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="section-container">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="text-foody-700 font-medium text-sm uppercase tracking-wider">Taste Our Creations</span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-4">Our Featured Menu</h2>
        <p className="text-muted-foreground">
          Explore our carefully crafted menu featuring seasonal ingredients and chef's specialties. 
          Each dish is prepared with precision and passion to deliver exceptional flavors.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
              selectedCategory === category.id
                ? 'bg-foody-700 text-white'
                : 'bg-muted hover:bg-foody-700/10 text-foreground'
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <div 
            key={item.id}
            className="opacity-0 animate-fade-in"
            style={{ "--reveal-delay": index + 1 } as React.CSSProperties}
          >
            <FoodCard
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
              category={item.category}
              isPopular={item.isPopular}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 px-8 py-3 border border-foody-300 text-foody-700 rounded-full text-sm font-medium transition-all duration-300 hover:bg-foody-300 hover:text-white hover:border-foody-300"
        >
          Make a Reservation
        </a>
      </div>
    </section>
  );
};

export default FeaturedMenu;
