// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// A function  should always return only ONE HTML
// element nested with x amount of elements as required
//  but only ONE MAIN CONTAINER

// function Greeting() {
// 	return (
// 		<React.Fragment>
// 			<div>
// 				<h1>Hello World</h1>
// 			</div>
// 			<div className="">
// 				<h2>Bye</h2>
// 			</div>
// 		</React.Fragment>
// 	);
// }

// const Greeting = () => {
// 	return React.createElement(
// 		"div",
// 		{},
// 		React.createElement("h1", {}, "HelloWorld")
// 	);
// };
import React from "react";

import ReactDOM from "react-dom";

import "./index.css";

function Booklist() {
	return (
		<React.Fragment className="audibleClone">
			<header className="pageHeader">
				<Logo />
				<Browse />
				<UserInteract />
			</header>
			<section className="bookList">
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
				<Book />
			</section>
		</React.Fragment>
	);
}

const Logo = () => (
	<img
		className="logoImg"
		src="https://www.rsvp.co.uk/wp-content/uploads/2021/12/Audible-New-DB.png"
		alt=""
	/>
);

const Browse = () => {
	return (
		<div className="navBar">
			<a href="#">Browse</a>
		</div>
	);
};

const UserInteract = () => {
	return (
		<div className="interactContainer">
			<div className="searchBar">
				<input
					type="search"
					name=""
					id="globalSearch"
					placeholder="Search our collection..."
				/>
				<input type="submit" id="searchInput" value="Search" />
			</div>
		</div>
	);
};

const Book = () => {
	return (
		<article className="book">
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/71BKJ0eJ+nL.jpg"
				alt="image"
			/>
			<div className="bookDescription">
				<h1>The Flames of Hope (Wings of Fire, Book 15)</h1>
				<h4> Tui T. Sutherland (Author) </h4>
			</div>
		</article>
	);
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
