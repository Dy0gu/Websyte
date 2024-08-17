// Reusable values throughout the app
const info = {
	name: "Dy0gu",
	description: "Just an individual, writing some code on the internet.",
	links: [
		{ name: "Email", href: "mailto:email@diogo.work" },
		{ name: "GitHub", href: "https://www.github.com/dy0gu" },
		{ name: "Stack", href: "https://stackoverflow.com/users/22441488" },
	],
};

// Link tags for the <head> of the root html document
const resources = [
	{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
	{ rel: "sitemap", href: "/sitemap.xml" },
	{ rel: "manifest", href: "/manifest.webmanifest" },
];

export { info, resources };
