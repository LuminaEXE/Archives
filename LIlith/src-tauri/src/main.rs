#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::process::Command;

fn main() {
  
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler!(issue_custom_aliases))
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn issue_custom_aliases() {
  let _run_node_file = Command::new("node")
    .arg("%APPDATA%/lilith/xyz.js")
    .output()
    .expect("Failed to execute");
}

