
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emma Thompson',
    role: 'Food Blogger',
    quote: 'The truffle risotto is a revelation! The balance of flavors and textures is absolutely perfect. This is easily my favorite restaurant in the city.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Business Executive',
    quote: 'Every business dinner I host here impresses my clients. The service is exceptional, and the seasonal menu never disappoints. A true gem!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Sarah Chen',
    role: 'Local Resident',
    quote: 'As someone who dines out frequently, I can confidently say that Foody Zone stands out for its attention to detail and consistently excellent food.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((current + 1) % testimonials.length);
    }
  };

  const prev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((current - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 7000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section id="testimonials" className="py-20 bg-foody-700 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-foody-300 font-medium text-sm uppercase tracking-wider">What People Say</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-4">Guest Experiences</h2>
          </div>

          <div className="relative">
            <div className="flex justify-center mb-8">
              <Quote size={48} className="text-foody-300/50" />
            </div>

            <div className="relative overflow-hidden">
              <div 
                className="transition-all duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${current * 100}%)`,
                  display: 'flex'
                }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="min-w-full px-4 text-center"
                  >
                    <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-foody-300">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-serif font-medium text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-foody-100/70">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-10 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-foody-300 w-6' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <button 
              onClick={prev}
              className="absolute top-1/2 left-0 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={next}
              className="absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
