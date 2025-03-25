
import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Reservation request received! We will contact you shortly to confirm.');
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setTime('');
      setGuests('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="text-foody-700 font-medium text-sm uppercase tracking-wider">Get in Touch</span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-4">Make a Reservation</h2>
        <p className="text-muted-foreground">
          Reserve your table for an unforgettable dining experience at Foody Zone. 
          For special requests or large parties, please include details in your message.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="font-serif text-2xl font-medium mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-foody-700/10 text-foody-700 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">Koramangala, 5th Block, Bangalore,</p>
                  <p className="text-muted-foreground">Karnataka 560095</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-foody-700/10 text-foody-700 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Reservations</h4>
                  <p className="text-muted-foreground">+91 9019813744</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-foody-700/10 text-foody-700 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">anusha@foodyzone.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-foody-700/10 text-foody-700 mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 5:00 PM - 11:00 PM</p>
                  <p className="text-muted-foreground">Saturday - Sunday: 12:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map placeholder */}
          <div className="h-64 rounded-2xl overflow-hidden bg-foody-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1652813115706!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant location"
            ></iframe>
          </div>
        </div>
        
        {/* Reservation Form */}
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="font-serif text-2xl font-medium mb-6">Reservation Request</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foody-300/50"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foody-300/50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foody-300/50"
                  placeholder="9019813744"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-sm font-medium mb-2">Number of Guests</label>
                <input
                  id="guests"
                  type="number"
                  min="1"
                  max="20"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foody-300/50"
                  placeholder="2"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">Date</label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foody-300/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">Time</label>
                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foody-300/50"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Special Requests</label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foody-300/50"
                placeholder="Any special requests or dietary restrictions..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2",
                isSubmitting 
                  ? "bg-foody-700/70 cursor-not-allowed text-white/80" 
                  : "bg-foody-700 text-white hover:bg-foody-600 hover:shadow-md"
              )}
            >
              {isSubmitting ? 'Submitting...' : 'Make Reservation'}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
