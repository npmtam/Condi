import React from 'react';
import AppLayout from '../layout/AppLayout';
import BlogsSection from './BlogsSection';
import OnboardingSection from './OnboardingSection';
import RulesSection from './RulesSection';
import WelcomeSection from './WelcomeSection';

const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <WelcomeSection />
      <OnboardingSection />
      <RulesSection />
      <BlogsSection />
    </AppLayout>
  );
};

export default HomePage;