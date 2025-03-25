
import { Utensils, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-muted py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1770&auto=format&fit=crop" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating stat card */}
            <div className="glass-card absolute -bottom-10 -right-10 p-6 rounded-2xl max-w-[260px] opacity-0 animate-fade-in" style={{"--reveal-delay": "3"} as React.CSSProperties}>
              <div className="text-4xl font-serif text-foody-700 font-bold">15+</div>
              <div className="text-sm text-foreground/80 mt-1">Years of culinary excellence and serving exceptional food experiences</div>
            </div>
          </div>
          
          {/* Content Side */}
          <div>
            <span className="text-foody-700 font-medium text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6">Crafting Exceptional Dining Experiences</h2>
            
            <p className="text-muted-foreground mb-8">
              {/*Founded in 2025, Foody Zone began with a simple vision: to create a dining destination that celebrates the art of food. Our restaurant has evolved from a small local favorite to a culinary landmark known for innovative dishes that honor traditional techniques while embracing modern creativity.*/}
              Foody Zone was founded in 2025 with the straightforward goal of establishing a restaurant that honors the craft of cooking. From a humble neighborhood favorite, our restaurant has developed into a culinary icon renowned for creative dishes that respect traditional methods while embracing modern creativity.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Every ingredient we use is carefully selected from local farmers and premium suppliers, ensuring that only the finest components make it to your plate. Our team of passionate chefs brings decades of combined experience to create memorable meals that engage all the senses.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center text-center p-5 glass-card rounded-xl">
                <div className="p-3 rounded-full bg-foody-700/10 text-foody-700 mb-4">
                  <Utensils size={24} />
                </div>
                <h3 className="font-serif font-medium text-lg mb-2">Premium Ingredients</h3>
                <p className="text-sm text-muted-foreground">Sourced from local farms and premium suppliers</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-5 glass-card rounded-xl">
                <div className="p-3 rounded-full bg-foody-700/10 text-foody-700 mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="font-serif font-medium text-lg mb-2">Crafted with Care</h3>
                <p className="text-sm text-muted-foreground">Each dish prepared with precision and passion</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-5 glass-card rounded-xl">
                <div className="p-3 rounded-full bg-foody-700/10 text-foody-700 mb-4">
                  <Award size={24} />
                </div>
                <h3 className="font-serif font-medium text-lg mb-2">Award Winning</h3>
                <p className="text-sm text-muted-foreground">Recognized for culinary excellence and innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
