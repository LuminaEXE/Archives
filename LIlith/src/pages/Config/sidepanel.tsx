import fs, { read } from 'fs';
import path from "path";


import { NavLink } from 'solid-app-router';
import { Component } from 'solid-js';

import General from './general'

let __data;

function readJson() {
	document.getElementById('myModal').style.display = 'inline-block';
}

const Sidepanel: Component = () => {
	return (
		<div>
			<div class="absolute inset-y-0 left-0 w-52 mt-20 h-full bg-[#1e1e1e]">



				<NavLink href='/General'>
					<button class="bg-lgray-900 focus:bg-neutral-900 hover:bg-neutral-800 text-white flex items-center px-10 ml-2- py-2 text-xl font-medium rounded-md transition-all text-centere cursor-pointer">

					<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
					</svg>


						<h1 class="focus:bg-gray-900" style="color:white;" id="Login">General</h1>
					</button>
				</NavLink>


					<button class="bg-neutral-800 focus:bg-zinc-900 text-center hover:bg-neutral-800 text-white flex items-center pl-[9.5rem] pr-[0.8rem] pt-2 pb-9 text-xl font-medium rounded-md transition-all cursor-pointer mb-1 mt-[43rem]"
					onClick={
						() => readJson()
					}>

						<img src=""></img>
						<p class="-ml-[4.5rem] text-xl mr-6"id="LoginDiscord">LOG IN</p>

						<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 mr-2 mt-4" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2" id="LoginSVG"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
						</svg>

						

					</button>

					<div id="myModal" class="modal">

					<div class="modal-content">
						<span class="absolute top-0 right-0 text-black" onClick={
							() => document.getElementById('myModal').style.display = 'none'
						}>X</span>
						<p>Login Modal</p>
					</div>

					</div>


				
			</div>
		</div>
	)
}

export default Sidepanel;