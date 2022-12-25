create database farmstand;

create table stand (
    id serial primary key,
    name varchar(1000),
    description varchar(1000),
    location varchar(1000),
    image varchar(1000)
);