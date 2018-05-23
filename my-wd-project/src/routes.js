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
    exact: false,
    main: () => <OurStoryPage />
  },
  {
    path: '/bride',
    exact: false,
    main: () => <BridePage />
  },
  {
    path: '/blog',
    exact: false,
    main: () => <BlogPage />
  },
  {
    path: '/search',
    exact: false,
    main: () => <SearchPage />
  },
  {
    path: '/other',
    exact: false,
    main: () => <OtherPage />
  },
  {
    path: '/contact-us',
    exact: false,
    main: () => <ContactUsPage />
  },
  {
    path: '',
    exact: false,
    main: () => <HomePage notFound={true} />
  },
]

export default routes;
