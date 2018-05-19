import React from 'react';
import HomePage from  './pages/HomePage/HomePage';
import OurStoryPage from  './pages/OurStoryPage/OurStoryPage';
import BridePage from  './pages/BridePage/BridePage';
import BlogPage from  './pages/BlogPage/BlogPage';
import SearchPage from  './pages/SearchPage/SearchPage';
import OtherPage from  './pages/OtherPage/OtherPage';
import ContactUsPage from  './pages/ContactUsPage/ContactUsPage';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />
  },
  {
    path: '/our-story',
    exact: true,
    main: () => <OurStoryPage />
  },
  {
    path: '/bride',
    exact: true,
    main: () => <BridePage />
  },
  {
    path: '/blog',
    exact: true,
    main: () => <BlogPage />
  },
  {
    path: '/search',
    exact: true,
    main: () => <SearchPage />
  },
  {
    path: '/other',
    exact: true,
    main: () => <OtherPage />
  },
  {
    path: '/contact-us',
    exact: true,
    main: () => <ContactUsPage />
  }
]

export default routes;
