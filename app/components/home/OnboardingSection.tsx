import React, { useState, useEffect } from 'react';
import OnboardingCard from './OnboardingCard';

const OnboardingSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true,
    2: true
  });

  const handleNext = () => {
    setActiveStep(1);
  };

  const handleLearnMore = () => {
    window.open('https://admin.shopify.com/store/checkout-editor', '_blank');
  };

  const handleClose = (cardIndex: number) => {
    setVisibleCards(prev => ({
      ...prev,
      [cardIndex]: false
    }));

    // Store in session storage
    sessionStorage.setItem('onboardingVisibleCards', JSON.stringify({
      ...visibleCards,
      [cardIndex]: false
    }));
  };

  // Load visible cards state from session storage on component mount
  useEffect(() => {
    const storedVisibleCards = sessionStorage.getItem('onboardingVisibleCards');
    if (storedVisibleCards) {
      setVisibleCards(JSON.parse(storedVisibleCards));
    }
  }, []);

  // Filter out any hidden cards
  const visibleCardsCount = Object.values(visibleCards).filter(Boolean).length;

  if (visibleCardsCount === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-800">Onboarding</h2>
        <p className="text-sm text-gray-600">Guiding you through the essential steps to get familiar with the app</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleCards[0] && (
          <OnboardingCard
            title="Welcome to Condi-Ship"
            description="With Condiship, you can easily customize shipping rates based on product type, cart total, customer location, tags, and more."
            ctaText="Next"
            ctaAction={handleNext}
            onClose={() => handleClose(0)}
            active={activeStep === 0}
          />
        )}
        
        {visibleCards[1] && (
          <OnboardingCard
            title="Learn more how it works"
            description="Understand how CondiShip helps you apply conditional shipping logic and enhance your store's checkout experience."
            ctaText="Learn more"
            ctaAction={handleLearnMore}
            onClose={() => handleClose(1)}
            active={activeStep === 1}
          />
        )}
        
        {visibleCards[2] && (
          <OnboardingCard
            title="Create a new rule"
            description="Set up your first condition rules to customize your shipping fee and more. Our intuitive interface makes it easy to create and manage shipping rules."
            ctaText="Create rule"
            ctaAction={() => console.log('Create rule clicked')}
            onClose={() => handleClose(2)}
            active={activeStep === 2}
          />
        )}
      </div>
    </div>
  );
};

export default OnboardingSection;