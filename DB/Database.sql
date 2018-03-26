create database Mazii;
go

use Mazii;
go

create table Kanas(
	id int identity(1,1) not null primary key,
	example ntext,
	hira nvarchar(6),
	kata nvarchar(6),
	romaji nvarchar(10), 
)

create table Lessons(
	id int identity(1,1) not null primary key,
	link ntext,
)

create table Kotobas(
	id int identity(1,1) not null primary key,
	cn_mean ntext,
	hiragana nvarchar(30),
	kanji nvarchar(30),
	mean ntext,
	mean_unsigned ntext,
	roumaji ntext,
	lesson_id int not null foreign key references Lessons(id)
)

create table Kanjies(
	id int identity(1,1) not null primary key,
	cn_mean ntext,
	image ntext,
	kunjomi nvarchar(50),
	note ntext,
	onjomi ntext,
	remember ntext,
	rkunjomi nvarchar(100),
	ronjomi nvarchar(100),
	ucn_mean nvarchar(100),
	uvi_mean nvarchar(100),
	vi_mean nvarchar(100),
	word nvarchar(10),
	write nvarchar(5),
	lesson int,
)

create table Phrases(
	id int identity(1,1) not null primary key,
	category_id int,
	japanese ntext,
	pinyin nvarchar(200),
	vietnamese ntext,
	vietnamese_un ntext,
	voice nvarchar(200)
)

create table Users(
	id int identity(1,1) not null primary key,
	username nvarchar(20),
	password nvarchar(250),
	avatarUrl nvarchar(250),
	bio nvarchar(250),
	email nvarchar(200),
	phone nvarchar(200),
)

create table Historicals(
	id int identity(1,1) not null primary key,
	user_id int not null foreign key references Users(id),
	history ntext,
)