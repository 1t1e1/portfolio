import { Homepage, Notes, Projects } from "./container";

const projectName = "/portfolio";
const routes = [
	{
		path: projectName + "/",
		exact: true,
		component: Homepage,
		name: "Portfolio",
	},
	{
		path: projectName + "/notes",
		exact: true,
		component: Notes,
		name: "Notlar",
	},
	{
		path: projectName + "/projects",
		exact: true,
		component: Projects,
		name: "Projeler",
	},
];

export default routes;
