import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  MessageSquare, 
  Filter,
  CheckCircle,
  User
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  customerName: string;
  avatar?: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  productName: string;
  helpful: number;
  notHelpful: number;
  images?: string[];
}

const CustomerReviews = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(0);
  const { toast } = useToast();

  // Mock review data
  const reviews: Review[] = [
    {
      id: '1',
      customerName: 'Sarah Johnson',
      avatar: '/placeholder.svg',
      rating: 5,
      title: 'Excellent Quality Seat Covers!',
      content: 'These leather seat covers exceeded my expectations. Perfect fit for my 2022 Honda Civic, and the installation was straightforward. The quality feels premium and they look amazing in my car.',
      date: '2024-01-15',
      verified: true,
      productName: 'Premium Leather Seat Covers',
      helpful: 12,
      notHelpful: 1
    },
    {
      id: '2',
      customerName: 'Mike Rodriguez',
      avatar: '/placeholder.svg',
      rating: 4,
      title: 'Great LED upgrade',
      content: 'The LED fog lights are much brighter than stock. Installation took about 30 minutes. Only reason for 4 stars instead of 5 is that the instructions could be clearer.',
      date: '2024-01-12',
      verified: true,
      productName: 'LED Fog Light Kit',
      helpful: 8,
      notHelpful: 0
    },
    {
      id: '3',
      customerName: 'Jennifer Chen',
      avatar: '/placeholder.svg',
      rating: 5,
      title: 'Perfect for my Tesla',
      content: 'These floor mats fit my Model 3 perfectly. They\'ve saved my carpets from mud and snow this winter. Easy to clean and they stay in place.',
      date: '2024-01-10',
      verified: true,
      productName: 'All-Weather Floor Mats',
      helpful: 15,
      notHelpful: 0
    },
    {
      id: '4',
      customerName: 'David Thompson',
      avatar: '/placeholder.svg',
      rating: 3,
      title: 'Decent product, average quality',
      content: 'The dashboard cover does its job protecting from UV rays. The material feels a bit cheap for the price though. Installation was easy.',
      date: '2024-01-08',
      verified: false,
      productName: 'Dashboard Cover',
      helpful: 3,
      notHelpful: 2
    },
    {
      id: '5',
      customerName: 'Lisa Williams',
      avatar: '/placeholder.svg',
      rating: 5,
      title: 'Outstanding customer service!',
      content: 'Not only are the products great, but the staff at the Downtown location helped me find exactly what I needed for my vintage Mustang. Highly recommend!',
      date: '2024-01-05',
      verified: true,
      productName: 'Custom Steering Wheel Cover',
      helpful: 20,
      notHelpful: 0
    }
  ];

  const filteredReviews = selectedRating 
    ? reviews.filter(review => review.rating === selectedRating)
    : reviews;

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / reviews.length) * 100
  }));

  const handleSubmitReview = () => {
    if (!newReview.trim() || newRating === 0) {
      toast({
        title: "Incomplete Review",
        description: "Please provide a rating and review text.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback! Your review will be published after moderation."
    });

    setNewReview('');
    setNewRating(0);
  };

  const renderStars = (rating: number, size: 'sm' | 'lg' = 'sm') => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`${size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const renderInteractiveStars = (currentRating: number, onRatingChange: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-6 h-6 cursor-pointer transition-colors ${
          index < currentRating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300 hover:text-yellow-300'
        }`}
        onClick={() => onRatingChange(index + 1)}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Customer Feedback
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real reviews from verified customers who've experienced our products and service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Rating Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Overall Rating */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex justify-center space-x-1 mb-2">
                    {renderStars(Math.round(averageRating), 'lg')}
                  </div>
                  <p className="text-muted-foreground">
                    Based on {reviews.length} reviews
                  </p>
                </div>

                {/* Rating Breakdown */}
                <div className="space-y-3">
                  {ratingCounts.map(({ rating, count, percentage }) => (
                    <div key={rating} className="flex items-center space-x-3">
                      <button
                        onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                        className={`flex items-center space-x-2 text-sm hover:bg-muted/50 p-2 rounded-md transition-colors ${
                          selectedRating === rating ? 'bg-muted' : ''
                        }`}
                      >
                        <span>{rating}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </button>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Filter Controls */}
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedRating(null)}
                      className="flex items-center space-x-1"
                    >
                      <Filter className="w-4 h-4" />
                      <span>All Reviews</span>
                    </Button>
                    {selectedRating && (
                      <Badge variant="secondary">
                        {selectedRating} star{selectedRating !== 1 ? 's' : ''}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Write Review Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Write a Review</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">
                    Your Rating
                  </Label>
                  <div className="flex space-x-1">
                    {renderInteractiveStars(newRating, setNewRating)}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="review" className="text-sm font-medium mb-2 block">
                    Your Review
                  </Label>
                  <Textarea
                    id="review"
                    placeholder="Share your experience with our products or service..."
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button onClick={handleSubmitReview} className="w-full">
                  Submit Review
                </Button>
              </CardContent>
            </Card>

            {/* Reviews */}
            {filteredReviews.map((review) => (
              <Card key={review.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={review.avatar} alt={review.customerName} />
                      <AvatarFallback>
                        <User className="w-6 h-6" />
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 space-y-3">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-foreground">
                              {review.customerName}
                            </h4>
                            {review.verified && (
                              <Badge variant="outline" className="text-green-600 border-green-200">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>

                      {/* Product */}
                      <Badge variant="secondary" className="text-xs">
                        {review.productName}
                      </Badge>

                      {/* Review Content */}
                      <div>
                        <h5 className="font-medium text-foreground mb-2">
                          {review.title}
                        </h5>
                        <p className="text-muted-foreground leading-relaxed">
                          {review.content}
                        </p>
                      </div>

                      {/* Helpful Actions */}
                      <div className="flex items-center space-x-4 pt-2">
                        <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                        <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                          <ThumbsDown className="w-4 h-4" />
                          <span>Not helpful ({review.notHelpful})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;