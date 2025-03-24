
import { cn } from '@/lib/utils';

interface FoodCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category?: string;
  isPopular?: boolean;
  className?: string;
}

const FoodCard = ({ 
  name, 
  description, 
  price, 
  imageUrl, 
  category, 
  isPopular = false,
  className
}: FoodCardProps) => {
  return (
    <div 
      className={cn(
        'menu-item group h-full flex flex-col overflow-hidden', 
        className
      )}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        {isPopular && (
          <div className="absolute top-4 right-4 bg-foody-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </div>
        )}
        {category && (
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-foody-700 text-xs font-medium px-3 py-1 rounded-full">
            {category}
          </div>
        )}
      </div>
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-medium text-lg">{name}</h3>
          <span className="font-serif text-foody-700 font-medium">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="mt-auto">
          <button className="w-full py-2 border border-foody-300 text-foody-700 rounded-full text-sm font-medium transition-all duration-300 hover:bg-foody-300 hover:text-white hover:border-foody-300">
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
