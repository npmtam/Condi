import React from 'react';
import Card from '../ui/Card';

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  link
}) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-1">{description}</p>
        <div className="mt-auto pt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener norefferer"
            className="text-sm font-medium text-[#5C6AC4] hover:text-[#3D4785] transition-colors">
            Read more
          </a>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;