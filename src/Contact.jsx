import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./App.css";
const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [done, setDone] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		db.collection("contact-form")
			.add({
				name: name,
				email: email,
				message: message,
			})
			.then(() => {
				setDone(true);
				// alert("form submitted!🥨");
			})
			.catch((e) => console.log(e.message));
		console.log(name + "🍕🍕🍕🍟" + email + "🍔🍔🍔" + message);
		setName("");
		setEmail("");
		setMessage("");
	};
	return (
		<>
			{!done ? (
				<div className='container'>
					<h1 className='header'>Contact form</h1>
					<form onSubmit={handleSubmit} className='contact'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							id='name'
							value={name}
							autoComplete='off'
							onChange={(e) => setName(e.target.value)}
						/>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							autoComplete='off'
						/>
						<label htmlFor='message'>Message</label>
						<input
							type='text'
							name='message'
							id='message'
							value={message}
							autoComplete='off'
							onChange={(e) => setMessage(e.target.value)}
						/>
						<button type='submit'>Submit</button>
					</form>
				</div>
			) : (
				<>
					<div className='done'>Thanks for response 😍</div>
					{/* <a href='/contact.js'>contact</a> */}
				</>
			)}
		</>
	);
};

export default Contact;
