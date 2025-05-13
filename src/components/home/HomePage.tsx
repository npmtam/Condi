import React from 'react';
import AppLayout from '../layout/AppLayout';
import WelcomeSection from './WelcomeSection';
import OnboardingSection from './OnboardingSection';
import RulesSection from './RulesSection';
import BlogsSection from './BlogsSection';

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