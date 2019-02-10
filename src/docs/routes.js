import ContentPage from "@templates/content-page";

export default [ 
  { path: '/', name: 'overview', component: ContentPage, props: true },
  { path: '/:pageName', name: 'herbology', component: ContentPage, props: true },
  { path: '/:pageName', name: 'metallurgy', component: ContentPage, props: true },
  { path: '/:pageName', name: 'smithing', component: ContentPage, props: true },
];
