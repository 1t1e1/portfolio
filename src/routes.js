import { Homepage, Notes } from "./container";

const routes = [
	{
		path: "/",
		exact: true,
		component: Homepage,
	},
	{
		path: "/notes",
		exact: true,
		component: Notes,
	},
];

export default routes;
