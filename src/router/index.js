//Routing Rules//

import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import SkillsView from "../views/SkillsView.vue";
import PracticeView from "../views/PracticeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/skills",
            name: "skill",
            component: SkillsView
        },
        {
            path: "/practice",
            name: "practice",
            component: PracticeView
        }

    ]
})

export default router