// import PropTypes from "prop-types";

// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
// ];

// const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map((item) => {
//         return (
//           <li key={item.id}>
//             Book-name {item.name} with id {item.id}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export function RandomText({ children }) {
//   return <div>{children}</div>;
// }

// export function Chease({ children }) {
//   return <div>{children}</div>;
// }

// export function Panzer() {
//   const panzer = "Panther aufs. D";
//   const year = 1943;
//   return (
//     <>
//       <h2>{panzer}</h2>
//       <p>Year: {year}</p>
//     </>
//   );
// }

// export const Mailbox = ({ username, messages }) => {
//   const msgL = 0;
//   return (
//     <div>
//       <p>Hello {username}</p>
//       {msgL > 0 ? (
//         <div>
//           <p>{messages}</p>
//         </div>
//       ) : (
//         <p>No unread messages</p>
//       )}{" "}
//     </div>
//   );
// };

// export const Messages = () => {
//   const messages = "Hello, how are you?";
//   const msgL = 0;
//   return (
//     <div>
//       <p>
//         {msgL > 0 ? { messages } : "You don`t have a messages in your mailbox("}
//       </p>
//     </div>
//   );
// };

// const myBooks = [
//   { id: "id-1", name: "JS for beginners", text: "text-1" },
//   { id: "id-2", name: "React basics", text: "text-2" },
//   { id: "id-3", name: "React Router overview", text: "text-3" },
//   { id: "id-4", name: "Redux in action", text: "text-4" },
//   { id: "id-5", name: "React Native", text: "text-5" },
//   { id: "id-6", name: "Node.js", text: "text-6" },
// ];

// export function Books() {
//   return (
//     <div>
//       <h2 className="title-books">My favourite BOOKS</h2>
//       <ul>
//         {myBooks.map((book) => {
//           return (
//             <li key={book.id}>
//               <h2>{book.name}</h2>
//               <p>{book.text}</p>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// const headerStyle = {
//   color: "red",
//   fontSize: 20,
//   textTransform: "uppercase",
// };

// const imgStyle = {
//   height: 150,
//   width: 150,
// };

// export function Cookies({ name, imgURL, price }) {
//   return (
//     <div>
//       <img style={imgStyle} src={imgURL} alt={name} width="480" />
//       <h2 style={headerStyle}>{name}</h2>
//       <p>Price: {price} credits</p>
//     </div>
//   );
// }

// Cookies.propTypes = {
//   name: PropTypes.string.isRequired,
//   imgURL: PropTypes.string,
//   price: PropTypes.number.isRequired,
// };

// export function ButtonAlert() {
//   const handleClick = (evt) => {
//     evt.preventDefault();
//     alert("Button was clicked!");
//   };

//   return (
//     <>
//       <button
//         style={{
//           display: "block",
//           marginBottom: 24,
//         }}
//         onClick={handleClick}
//       >
//         Click me!!!
//       </button>
//     </>
//   );
// }

// export function CustomButton({ message }) {
//   const handleClick = (evt) => {
//     evt.preventDefault();
//     alert(message);
//   };

//   return (
//     <div>
//       <button
//         style={{
//           display: "block",
//           marginBottom: 24,
//         }}
//         onClick={handleClick}
//       >
//         Click me MSG!!!
//       </button>
//     </div>
//   );
// }

// export const CountButton = () => {
//   const [click, countClick] = useState(0);

//   const handleClick = () => {
//     countClick(click + 1);
//   };

//   return <button onClick={handleClick}>Current: {click}</button>;
// };

// export const CountButtonSecond = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       <p>{isOpen ? "lalalalala" : "tototototo"}</p>
//     </>
//   );
// };

// export const Btn = () => {
//   const counterClick = () => {
//     alert("Today I want go for a walk!)");
//   };

//   return <button onClick={counterClick}>Click me: </button>;
// };

// const FormData = ({ onLogin }) => {
//   const submitButton = (evt) => {
//     evt.preventDefault();

//     const { login, password } = evt.target.elements;

//     onLogin({
//       login: login.value,
//       password: password.value,
//     });

//     const dataJSON = JSON.stringify({
//       login: login.value,
//       password: password.value,
//     });
//     console.log(dataJSON);

//     evt.target.reset();
//   };

//   const loginId = useId();
//   const passwordId = useId();

//   return (
//     <form onSubmit={submitButton} action="">
//       <label htmlFor={loginId}>Login</label>
//       <input type="text" name="login" id={loginId} />
//       <label htmlFor={passwordId}>Password</label>
//       <input type="password" name="password" id={passwordId} />
//       <button type="submit">Submit Form</button>
//     </form>
//   );
// };

// export FormData;

// const SearchBar = () => {
//   const [inputValue, setInputValue] = useState(() => {
//     const savedData = JSON.parse(localStorage.getItem("inputValue"));

//     if (savedData) {
//       return savedData;
//     }

//     return "";
//   });

//   const handleChange = (evt) => {
//     setInputValue(evt.target.value);
//   };

//   useEffect(() => {
//     localStorage.setItem("inputValue", JSON.stringify(inputValue));
//   });

//   const submitForm = (evt) => {
//     evt.preventDefault();

//     console.log(evt.target.elements.sentences.value);

//     evt.target.elements.sentences.value = "";
//     setInputValue("");
//   };

//   const sentencesId = useId();
//   return (
//     <form onSubmit={submitForm}>
//       <input
//         name="sentences"
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//         id={sentencesId}
//       />
//       <p>{inputValue}</p>
//       <button type="submit">Submit Form</button>
//     </form>
//   );
// };

// export default SearchBar;

// const LangSwitcher = ({ value, onSelect }) => {
//   const selectId = useId();
//   return (
//     <div>
//       <label htmlFor={selectId}></label>
//       <select
//         value={value}
//         name="languages"
//         id={selectId}
//         onChange={(evt) => onSelect(evt.target.value)}
//       >
//         <option value="en">English</option>
//         <option value="uk" selected>
//           Ukraine
//         </option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

// export default LangSwitcher;

// const LangSwitcher = ({ value, onSelect }) => {
//   const selectId = useId();

//   return (
//     <div>
//       <label htmlFor={selectId}>{value}</label>
//       <select
//         id={selectId}
//         value={value}
//         onChange={(evt) => onSelect(evt.target.value)}
//       >
//         <option value="uk">Ukraine</option>
//         <option value="pl">Polish</option>
//         <option value="gr">Germany</option>
//       </select>
//     </div>
//   );
// };

// export default LangSwitcher;

// const RadioBtn = ({ value, selectedSize }) => {
//   return (
//     <>
//       <h1>Select coffe size: {value}</h1>
//       <label htmlFor="">
//         <input
//           type="radio"
//           name="cofeeSize"
//           value="sm"
//           checked={value === "sm"}
//           onChange={selectedSize}
//         />
//         Small
//       </label>
//       <label htmlFor="">
//         <input
//           type="radio"
//           name="cofeeSize"
//           value="md"
//           checked={value === "md"}
//           onChange={selectedSize}
//         />
//         Medium
//       </label>
//       <label htmlFor="">
//         <input
//           type="radio"
//           name="cofeeSize"
//           value="lr"
//           checked={value === "lr"}
//           onChange={selectedSize}
//         />
//         Large
//       </label>
//     </>
//   );
// };

// export default RadioBtn;

// const Checkbox = ({ accepted, setAccepted }) => {
//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="terms"
//           checked={accepted}
//           onChange={setAccepted}
//         />
//         I accept terms and conditions
//       </label>
//       <button type="button" disabled={!accepted}>
//         Proceed
//       </button>
//     </div>
//   );
// };

// export default Checkbox;

// const Checkbox = ({ value, onAgree }) => {
//   const checkbox = useId();
//   return (
//     <div>
//       <label htmlFor={checkbox}>
//         <input
//           id={checkbox}
//           type="checkbox"
//           name="terms"
//           checked={value}
//           value={value}
//           onChange={onAgree}
//         />
//         I accept terms and conditions
//       </label>
//       <button type="buttonc" disabled={!value}>
//         Proceed
//       </button>
//     </div>
//   );
// };

// export default Checkbox;

// const ControlForm = () => {
//   const [values, setValues] = useState({
//     login: "",
//     password: "",
//   });

//   const handleChange = (evt) => {
//     setValues({
//       ...values,
//       [evt.target.name]: evt.target.value,
//     });
//   };

//   const submitForm = (evt) => {
//     evt.preventDefault();

//     console.log(values);

//     setValues({
//       login: "",
//       password: "",
//     });
//   };

//   return (
//     <form onSubmit={submitForm}>
//       <input
//         type="text"
//         value={values.login}
//         name="login"
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         value={values.password}
//         name="password"
//         onChange={handleChange}
//       />
//       <button type="submit">Submit Form</button>
//     </form>
//   );
// };

// export default ControlForm;

// const RadioChecked = ({ value, onSize }) => {
//   return (
//     <>
//       <h1>Select coffee size: {value}</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           onChange={onSize}
//           checked={value === "sm"}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           onChange={onSize}
//           checked={value === "md"}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           onChange={onSize}
//           checked={value === "lg"}
//         />
//         Large
//       </label>
//       <button type="button" disabled={!value === "lg"}>
//         Click me
//       </button>
//     </>
//   );
// };

// export default RadioChecked;

// import { useId } from "react";

// const CheckboxChecked = ({ agree, onAgree, submitForm }) => {
//   const inpId = useId();
//   return (
//     <form onSubmit={submitForm}>
//       <label htmlFor={inpId}>
//         <input
//           id={inpId}
//           type="checkbox"
//           name="agree"
//           checked={agree}
//           onChange={onAgree}
//         />
//         You are agree with it?
//       </label>
//       <button type="submit" disabled={!agree}>
//         Click me
//       </button>
//     </form>
//   );
// };

// export default CheckboxChecked;

// import { useId, useState, useEffect } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Must be a valid email!").required("Required"),
//   message: Yup.string()
//     .min(3, "Too short")
//     .max(256, "Too long")
//     .required("Required"),
//   level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
//   picked: Yup.string().oneOf(["One", "Two"]).required("Required"),
//   cash: Yup.string()
//     .matches()
//     .min(2, "Not correct")
//     .max(10, "So many")
//     .required("Required"),
// });

// const initialValues = {
//   username: "",
//   email: "",
//   message: "",
//   level: "good",
//   picked: "",
//   cash: "",
// };

// const FeedbackForm = () => {
//   const nameFieldId = useId();
//   const emailFieldId = useId();
//   const msgFieldId = useId();
//   const levelFieldId = useId();

//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={FeedbackSchema}
//     >
//       <Form>
//         <div>
//           <label htmlFor={nameFieldId}>Username</label>
//           <Field type="text" name="username" id={nameFieldId} />
//           <ErrorMessage name="username" component="span" />
//         </div>

//         <div>
//           <label htmlFor={emailFieldId}>Email</label>
//           <Field type="email" name="email" id={emailFieldId} />
//           <ErrorMessage name="email" component="span" />
//         </div>

//         <div>
//           <label htmlFor={msgFieldId}>Message</label>
//           <Field as="textarea" name="message" id={msgFieldId} rows="5" />
//           <ErrorMessage name="message" component="span" />
//         </div>

//         <div>
//           <label htmlFor={levelFieldId}>Service satisfaction level</label>
//           <Field as="select" name="level" id={levelFieldId}>
//             <option value="good">Good</option>
//             <option value="neutral">Neutral</option>
//             <option value="bad">Bad</option>
//           </Field>

//           <ErrorMessage name="level" component="span" />
//         </div>

//         <div>
//           <label>
//             <Field type="radio" name="picked" value="One" />
//             One
//           </label>

//           <label>
//             <Field type="radio" name="picked" value="Two" />
//             Two
//           </label>

//           <ErrorMessage
//             name="picked"
//             component="span"
//             style={{ color: "red", textDecoration: "uppercase" }}
//           />
//         </div>

//         <div>
//           <Field type="number" name="cash" />
//           <ErrorMessage name="cash" component="div" />
//         </div>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm;

// import { useEffect } from "react";
// import axios from "axios";

// export const ApiQuery = ({ data }) => {
//   return (
//     <div>
//       <ul>
//         {data.map(({ objectID, url, title }) => (
//           <li key={objectID}>
//             <a href={url} target="_blank" rel="noreferrer noopener">
//               {title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// import { useRef } from "react";

// export const Player = ({ source }) => {
//   const playerRef = useRef();

//   const play = () => playerRef.current.play();
//   const pause = () => playerRef.current.pause();
//   return (
//     <div>
//       <video ref={playerRef} src={source}>
//         Sorry, your browser does not support embedded videos.
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };

// import { useState, useMemo, useEffect } from "react";

// import { useToggle } from "../useToggle";

// export const ModalWindow = () => {
//   const { isOpen, open, close } = useToggle();
//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       {isOpen && (
//         <div>
//           <p>lalalalalalalalalalalalala</p>
//           <button onClick={close}>Close Modal</button>
//         </div>
//       )}
//     </>
//   );
// };
