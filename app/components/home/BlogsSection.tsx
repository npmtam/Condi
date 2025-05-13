import React from 'react';
import BlogCard from './BlogCard';

const BlogsSection: React.FC = () => {
  const blogs = [
    {
      id: 1,
      image: 'https://cdn.shopify.com/s/files/1/0070/7032/articles/international_20shipping_8addcba4-b852-47f5-933e-10b77d3cf2a0.webp?v=1744388094&originalWidth=1848&originalHeight=782',
      title: 'Navigating Tariffs: Your Guide to International Shipping on Shopify',
      description: "Navigating tariffs, which impose duties and import taxes, means making strategic decisions that affect your business. You may choose to absorb these costs, which could impact profit, or pass them to customers.",
      link: 'https://www.shopify.com/blog/international-import-shipping'
    },
    {
      id: 2,
      image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/flat_20rate_20shipping.png?v=1718453799&originalWidth=1848&originalHeight=782',
      title: 'DDP Shipping: Pros and Cons for Buyers and Sellers',
      description: 'There’s something so satisfying about ordering dinner for delivery. True, it costs more than picking it up yourself, but sometimes you’re willing to pay for convenience and avoid kitchen cleanup.',
      link: 'https://www.shopify.com/blog/ddp-shipping'
    },
    {
      id: 3,
      image: 'https://cdn.shopify.com/s/files/1/0070/7032/articles/Shipping_Delays_and_the_Holiday_Rush.jpg?v=1729254584&originalWidth=1848&originalHeight=782',
      title: 'Shipping Delays and the Holiday Rush: How To Set Your Business Up for Success',
      description: 'Peak shopping season is here, and while 2022 hasn’t been a banner year for online retailers, Adobe is still predicting a 2.5% increase on online sales. With more consumers shopping online than ever, that could mean ecommerce shipping delays.',
      link: 'https://www.shopify.com/blog/seasonal-shipping-delays-challenges'
    }
  ];

  return (
    <div className="mb-8">
      <div className="mb-4">
        <h2 className="text-lg font-medium text-gray-800">Shopify Useful Blogs</h2>
        <p className="text-sm text-gray-600">Get the latest commerce news, trends, and strategies to grow your business</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            description={blog.description}
            link={blog.link}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;