import { FC, useState } from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const ContactPage: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container-custom py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-text-tertiary">
          <a href="/" className="hover:text-black dark:hover:text-dark-text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-black dark:text-dark-text-primary">Contact</span>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-8 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Call To Us Card */}
              <div className="bg-white dark:bg-dark-bg-secondary shadow-lg dark:shadow-card-dark rounded-lg p-8 border border-transparent dark:border-dark-border-primary transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-10 h-10 rounded-full flex items-center justify-center group">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full bg-accent/20 dark:bg-dark-accent-primary/20"></div>
                    {/* Inner circle - solid red */}
                    <div className="absolute inset-1 rounded-full bg-accent dark:bg-dark-accent-primary flex items-center justify-center group-hover:bg-accent-hover dark:group-hover:bg-dark-accent-secondary transition-colors">
                      <PhoneIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text-primary">Call To Us</h3>
                </div>
                
                <div className="space-y-4 text-sm text-gray-700 dark:text-dark-text-secondary">
                  <p>We are available 24/7, 7 days a week.</p>
                  <p className="font-medium text-gray-900 dark:text-dark-text-primary">Phone: +8801611112222</p>
                </div>
              </div>
              
              {/* Write To Us Card */}
              <div className="bg-white dark:bg-dark-bg-secondary shadow-lg dark:shadow-card-dark rounded-lg p-8 border border-transparent dark:border-dark-border-primary transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-10 h-10 rounded-full flex items-center justify-center group">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full bg-accent/20 dark:bg-dark-accent-primary/20"></div>
                    {/* Inner circle - solid red */}
                    <div className="absolute inset-1 rounded-full bg-accent dark:bg-dark-accent-primary flex items-center justify-center group-hover:bg-accent-hover dark:group-hover:bg-dark-accent-secondary transition-colors">
                      <EnvelopeIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text-primary">Write To Us</h3>
                </div>
                
                <div className="space-y-4 text-sm text-gray-700 dark:text-dark-text-secondary">
                  <p>Fill out our form and we will contact you within 24 hours.</p>
                  <p className="font-medium text-gray-900 dark:text-dark-text-primary">Emails: customer@exclusive.com</p>
                  <p className="font-medium text-gray-900 dark:text-dark-text-primary">Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-dark-bg-secondary shadow-lg dark:shadow-card-dark rounded-lg p-8 border border-transparent dark:border-dark-border-primary transition-colors duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name, Email, Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* Message Textarea */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="w-full px-4 py-3 border-2 border-neutral-200 dark:border-dark-border-primary rounded-lg bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-dark-text-primary focus:outline-none focus:border-accent dark:focus:border-dark-accent-primary focus:ring-2 focus:ring-accent/20 dark:focus:ring-dark-accent-primary/20 transition-all duration-300 placeholder:text-neutral-400 dark:placeholder:dark-text-muted hover:border-neutral-300 dark:hover:border-dark-border-secondary resize-none"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <Button type="submit" variant="primary">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

