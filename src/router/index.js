import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/home.vue";
import adminHome from "../pages/admin/adminHome.vue";
import customerLogin from "../pages/login.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/admin",
        name: "adminHome",
        component: adminHome,
    },
    {
        path: "/login/customer",
        name: "loginCustomer",
        component: customerLogin,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
