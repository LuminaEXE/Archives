import { Component } from 'solid-js';

import config from '../../pages/Config/config';

import { NavLink, Route, Routes } from 'solid-app-router'
import { appWindow } from '@tauri-apps/api/window'




const Nav: Component = () => {
	return (

		
		<div>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
		
			<nav>
				<div class="NavDiv header">
					<button id="HomeBtn" class="bg-zinc-900 focus:bg-neutral-900 hover:bg-zinc-800 absolute -inset-y-2 left-3 mt-5 rounded-md border-2 border-neutral-800 transition-al">
						<NavLink href="/" class="bg-neutral-800">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 absolute inset-2 left-2" viewBox="0 0 20 20" fill="currentColor">
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
							</svg>
						</NavLink>
					</button>

					<button class="bg-zinc-900 focus:bg-neutral-900 hover:bg-red-700 hover:rounded-lg absolute -inset-y-2 right-3 mt-5 rounded-md border-2 border-neutral-800 transition-all" id="CloseBtn"
					onClick={
						() => appWindow.close()
					}>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 absolute inset-y-2 right-2" viewBox="0 0 20 20" fill="white">
							<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</button>
					
					<NavLink href="/config">
						<button id="HomeBtn" class="bg-zinc-900 focus:bg-neutral-900 hover:bg-zinc-800 absolute -inset-y-2 left-20 mt-5 rounded-md border-2 border-neutral-800 transition-al">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 absolute inset-2 left-2 " viewBox="0 0 20 20" fill="currentColor" id="settingsSVG">
									<path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
							</svg>
						</button>
					</NavLink>		
					<div>
						
					
					
						<NavLink href="config" class="ml-1" id="settingsNV">
						
							<h1 class="text-2xl mb-6">‎ </h1>
					
						</NavLink>
					</div>

					
					
				</div>



				
				
			</nav>
		</div>
	)
}

export default Nav;
