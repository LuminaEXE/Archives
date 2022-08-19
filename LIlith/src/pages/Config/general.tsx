import { Component } from "solid-js";



import Sidepanel from "./sidepanel";

const General: Component = () => {
	return (
		<div>
			<Sidepanel />

			<div class="w-10/12 bg-[#1e1e1e] mt-8 py-8 rounded-lg ml-12">
				<button class="bg-zinc-800 w-[13rem] py-2 ml-8 px-2 rounded-md active:bg-neutral-900 hover:bg-neutral-800">
					<h1 class="ml-[2.2rem] text-white text-xl mr-1 font-medium">
						Change Aliases
					</h1>
				</button>
			</div>
		</div>
	);
};

export default General;
