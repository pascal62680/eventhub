CREATE TABLE users (
    us_id int not null auto_increment primary key,
    us_username varchar(255) not null unique,
    us_password text not null,
    us_email varchar(255) not null unique
);

create table events (
    ev_id int not null auto_increment primary key,
    ev_title varchar(255) not null,
    ev_description text,
    ev_date date,
    ev_location varchar(255),
    ev_owner int not null,
    constraint ev_owner foreign key (ev_owner) references users(us_id)
);

create table comments (
    co_id int not null unique auto_increment primary key,
    co_comments text not null,
    co_user int not null,
    co_event int not null,
    constraint co_user foreign key (co_user) references users(us_id),
    constraint co_event foreign key (co_event) references events(ev_id)
);

create table participants (
    pa_user int not null,
    pa_event int not null,
    primary key (pa_user,pa_event),
    constraint pa_user foreign key (pa_user) references users(us_id),
    constraint pa_event foreign key (pa_event) references events(ev_id)
);