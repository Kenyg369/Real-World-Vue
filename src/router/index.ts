import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import EventDetails from "../views/EventDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "EventList",
      component: EventList,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/event/:id",
      name: "EventDetails",
      props: route => ({id: Number(route.params.id)}),
      component: EventDetails,
    },
  ],
});

export default router;
