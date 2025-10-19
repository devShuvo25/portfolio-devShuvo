import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import SSC from "../Pages/SSC";
import HSC from "../Pages/HSC";
import UGSection from "../Pages/BURP";
import SkillsSection from "../Pages/Skiils";
import ProjectsSection from "../Pages/Projects";
import Aim from "../Pages/Aim";
import HobbiesSection from "../Pages/Hobbies";
import InterestsSection from "../Pages/Intrests";
import ErrorPage from "../Pages/Eroor";
import AchievementsSection from "../Pages/Achivments";
import AwardsSection from "../Pages/Award";


 const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        children: [
            {
                index:true,
                Component:Home
            },
            {
               path:'/home',
                Component:Home
            },
            {
                path:'/about-me',
                Component:About
            },
            {
                path:'education-ssc',
                Component: SSC
            },
            {
                path:'education-hsc',
                Component: HSC
            },
            {
                path:'education-burp',
                Component: UGSection
            },
            {
                path:'skills',
                Component: SkillsSection
            },
            {
                path:'projects',
                Component: ProjectsSection
            },
            {
                path:'aim',
                Component: Aim
            },
            {
                path:'hobbies',
                Component: HobbiesSection
            },
            {
                path:'intrests',
                Component: InterestsSection
            },
            {
                path:"*",
                Component: ErrorPage
            },
            {
                path:"scholarship",
                Component: AchievementsSection
            },
            {
                path:"award",
                Component: AwardsSection
            }
        ]
    }
])

export default router