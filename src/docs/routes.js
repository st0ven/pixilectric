import ContentPage from "@templates/content-page";

export default [ 
  { 
    path: '/', 
    name: 'overview', 
    component: ContentPage
  },
  { 
    path: '/herbology', 
    name: 'herbology', 
    component: ContentPage, 
    props: true 
  },
  { path: '/metallurgy', 
    name: 'metallurgy', 
    component: ContentPage,
    children: [
      {
        path: ":topic",
        name: 'mining',
        component: ContentPage
      },
      {
        path: ":topic",
        name: "smelting",
        component: ContentPage
      }
    ]        
  },
  { 
    path: '/smithing', 
    name: 'smithing', 
    component: ContentPage, 
  },
];
