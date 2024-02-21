create table users (
  user_id serial primary key,
  username text not null unique
);

create table subreddits (
  subreddit_id serial primary key,
  name text not null unique
);

create table posts (
  post_id serial primary key,
  submitter_id int not null references users(user_id),
  inserted_at timestamptz not null default current_timestamp,
  subreddit_id int not null references subreddits(subreddit_id),
  title text not null,
  body text not null
);

create table comments (
  comment_id serial primary key,
  post_id int not null references posts(post_id),
  user_id int not null references users(user_id),
  inserted_at timestamptz not null default current_timestamp,
  parent_comment_id int null references comments(comment_id),
  body text not null
);

create table post_votes (
  post_id int not null references posts(post_id),
  user_id int not null references users(user_id),
  score smallint not null check (score in (-1, 1)),
  
  primary key (post_id, user_id)
);

create table comment_votes (
  comment_id int not null references comments(comment_id),
  user_id int not null references users(user_id),
  score smallint not null check (score in (-1, 1)),
  
  primary key (comment_id, user_id)
);

insert into users (username) values
  ('alice'),
  ('bob'),
  ('frank');
  
insert into subreddits (name) values
  ('database');

--alice creates a post in r/database:
insert into posts values
  (default, 1, default, 1, 'title test', 'body test');
  
-- bob upboats the post:
insert into post_votes values (1, 2, 1);

-- bob adds a comment:
insert into comments values (default, 1, 2, default, null, 'cool post bro');

-- alice upboats bob's comment:

insert into comment_votes values (1, 1, 1);

--alice replies to bob's comment:

insert into comments values (default, 1, 1, default, 1, 'thanks bob');