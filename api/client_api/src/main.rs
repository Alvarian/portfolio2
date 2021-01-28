#![feature(proc_macro_hygiene, decl_macro)]

mod config;
mod routes;
mod controllers;
mod models;


fn main() {
    routes::build().launch();
}