import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How accurate is your real-time inventory system?",
    answer: "Our inventory system updates in real-time with 99.9% accuracy. Every sale, return, and stock adjustment is immediately reflected across all three locations, ensuring you see the most current availability."
  },
  {
    question: "Can I check product availability at specific locations?",
    answer: "Yes! Our system shows real-time stock levels at each of our three locations - Downtown Store, North Branch, and South Mall. You can see exactly which location has your desired product in stock."
  },
  {
    question: "Do you offer professional installation services?",
    answer: "Absolutely! All three locations offer professional installation services for most car accessories. Our certified technicians can install everything from seat covers to complex electronic systems. Installation costs vary by product complexity."
  },
  {
    question: "What if an item shows in stock online but isn't available when I arrive?",
    answer: "Our real-time system virtually eliminates this issue, but in the rare case this happens, we'll immediately check our other locations and arrange a same-day transfer if available, or place a priority order with expedited shipping."
  },
  {
    question: "Can I reserve items for pickup?",
    answer: "Yes, you can reserve any in-stock item for up to 24 hours. Simply call the store or use our online reservation system. We'll hold your item and send you a confirmation with your reservation number."
  },
  {
    question: "Do you offer price matching?",
    answer: "We offer competitive pricing and will match verified prices from authorized retailers on identical products. Bring us the competitor's current advertisement or online listing, and we'll match their price."
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day return policy on most items in original condition with receipt. Installation services have a 90-day warranty. Custom-fitted items may have different return terms - please ask at time of purchase."
  },
  {
    question: "Can I transfer items between your locations?",
    answer: "Yes! If an item is available at a different location, we can arrange same-day or next-day transfers between our three stores. Transfer requests can be made online, by phone, or in person."
  }
];

const FAQSection = ({ 
  title = "Frequently Asked Questions", 
  subtitle = "Get answers to common questions about our products, services, and inventory system.",
  faqs = defaultFAQs 
}: FAQSectionProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Help Center
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-left hover:text-primary py-6">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+15551234567" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Call Us: (555) 123-4567
            </a>
            <a 
              href="mailto:info@autozone-motors.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-200"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;