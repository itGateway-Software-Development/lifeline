import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-us/:slug",
    name: "About Us",
    component: () => import("@/views/AboutUs.vue"),
    props: true,
  },
  {
    path: "/business/:slug",
    name: "Business",
    component: () => import("@/views/Business.vue"),
    props: true,
  },
  {
    path: "/product-service/:slug",
    name: "Products&Services",
    component: () => import("@/views/ProductService.vue"),
    props: true,
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/views/Products.vue"),
    // props: true,
  },
  {
    path: "/service-promotion/:slug",
    name: "Service & Promotion",
    component: () => import("@/views/Service&Promotion.vue"),
    props: true,
  },
  {
    path: "/partnership/:slug",
    name: "Partnership",
    component: () => import("@/views/Partnership.vue"),
    props: true,
  },
  {
    path: "/hospital/:slug",
    name: "Hospital",
    component: () => import("@/views/HospitalDetail.vue"),
    props: true,
  },
  {
    path: "/news-events/:slug",
    name: "News&Events",
    component: () => import("@/views/News&Events.vue"),
    props: true,
  },
  {
    path: "/news-detail/:id",
    name: "NewsDetail",
    component: () => import("@/views/NewsDetail.vue"),
    props: true,
  },
  {
    path: "/career",
    name: "Career",
    component: () => import("@/views/Career.vue"),
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: () => import("@/views/ContactUs.vue"),
  },
  {
    path: "/coming-soon",
    component: () => import("@/views/ComingSoon.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
