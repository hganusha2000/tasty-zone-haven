
const chefs = [
  {
    id: 1,
    name: 'Alessandro Romano',
    role: 'Executive Chef',
    bio: 'With 20 years of experience in fine dining, Chef Alessandro brings authentic Italian techniques to every dish.',
    imageUrl: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=1964&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Sophia Martinez',
    role: 'Pastry Chef',
    bio: 'A master of desserts, Sophia combines classical training with innovative flavor combinations.',
    imageUrl: 'https://images.unsplash.com/photo-1588854337236-066c73a41d2d?q=80&w=1964&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'James Chen',
    role: 'Sous Chef',
    bio: 'James specializes in fusion cuisine, blending Asian techniques with Mediterranean flavors.',
    imageUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop',
  }
];

const Chefs = () => {
  return (
    <section id="chefs" className="section-container">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="text-foody-700 font-medium text-sm uppercase tracking-wider">Meet Our Team</span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-4">Culinary Artisans</h2>
        <p className="text-muted-foreground">
          The heart of Foody Zone is our team of dedicated chefs. With diverse backgrounds and expertise,
          they collaborate to create an extraordinary dining experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {chefs.map((chef, index) => (
          <div 
            key={chef.id} 
            className="chef-card opacity-0 animate-fade-in"
            style={{ "--reveal-delay": index + 2 } as React.CSSProperties}
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <img 
                src={chef.imageUrl} 
                alt={chef.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              />
              <div className="chef-card-overlay"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-xl font-medium">{chef.name}</h3>
                <p className="text-sm text-white/80 mb-3">{chef.role}</p>
                <p className="text-sm text-white/90 line-clamp-3">{chef.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chefs;
