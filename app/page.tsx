"use client";

import Link from "next/link";
import Particles from "./components/particles";
import React from "react";
import Balancer from "react-wrap-balancer";
import Typewriter from "typewriter-effect";

const navigation = [
	{ name: "LinkedIn", href: "https://www.linkedin.com/in/dy0gu" },
	{ name: "GitHub", href: "https://www.github.com/dy0gu" },
	{ name: "Email", href: "mailto:email@diogo.work" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 mx-16 animate-fade-in">
				<ul className="flex text-sm md:text-md lg:text-xl items-center justify-center gap-4">
					{navigation.map((item, index) => (
						<React.Fragment key={item.href}>
							<Link
								href={item.href}
								className="duration-500 text-zinc-500 hover:text-zinc-300"
							>
								{item.name}
							</Link>
							{index !== navigation.length - 1 && (
								<span className="text-white"> ● </span>
							)}
						</React.Fragment>
					))}
				</ul>
			</nav>
			<div className="hidden mx-16 w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
			/>
			<h1 className="z-10 text-6xl md:text-7xl lg:text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display bg-clip-text ">
				<b>DY0GU</b>
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 mx-16 text-center animate-fade-in">
				<h2 className="text-sm md:text-md lg:text-xl text-zinc-500 ">
					<Balancer>
						<Typewriter
							options={{
								strings: [
									"",
									"",
									"Writing <span style='color: white;'>code</span> since...?",
									"Is making your own website a <span style='color: white;'>developer</span> cliché already?",
									"Watch my all time favorite <a href=https://www.youtube.com/watch?v=xvFZjo5PgG0 style='text-decoration: underline; color: white;'>video</a> on YouTube!",
									"The <span style='color: white;'>cake</span> was, in fact, a lie.",
									"You should also check out <a href=https://www.instagram.com/jtsimoes style='text-decoration: underline; color: white;'>jtsimoes</a>!",
									"Do you think I <span style='color: white;'>overdid</span> it with the font size?",
									"We've got some <span style='color: pink;'>pink</span> text too, if you want it!",
									"01100100 <span style='color: white;'>01111001</span> 00110000 <span style='color: white;'>01100111</span> 01110101",
									"Ireland is just one <span style='color: white;'>sea</span> away from Iceland.",
									"How about another <span style='color: white;'>joke</span>, Murray?",
									"Hotdogs all look the same because they're <span style='color: white;'>in-bread</span>.",
									"Mr. Anderson, we've been <span style='color: white;'>expecting</span> you.",
									"I like <span style='color: white;'>shorts</span>! They're comfy and easy to wear!",
									"Here's <span style='color: white;'>Johnny</span>!",
									"All you had to do was follow the <span style='color: white;'>damn</span> train, CJ!",
									"You're really <span style='color: white;'>still</span> reading these?",
									"Come on get out, there is  <span style='color: white;'>nothing</span> more to see here.",
									"I'm  <span style='color: white;'>serious</span>, there are no more quirky or funny messages.",
									"Okay now you're making me <span style='color: white;'>upset</span>.",
									"<span style='color: white;'>Go</span> away.",
									"You know what? I'm just gonna <span style='color: white;'>loop</span> this text, see if you like that.",
								],
								autoStart: true,
								loop: true,
								deleteSpeed: 25,
								delay: 75,
							}}
						/>
					</Balancer>
				</h2>
			</div>
		</div>
	);
}
