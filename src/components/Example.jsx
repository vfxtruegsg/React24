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
// import { Formik, Form, Field } from "formik";

// const FeedbackForm = () => {
//   const initialValues = {
//     username: "",
//     email: "",
//     comments: "",
//   };

//   const submitForm = (values, actions) => {
//     console.log(values);

//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={submitForm}>
//       <Form>
//         <Field type="text" name="username" />
//         <Field type="email" name="email" />
//         <Field as="textarea" name="comments" />
//         <button type="submit">Submit Form</button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm;
import css from "./App.module.css";
import { useId, useState } from "react";

const TestInput = () => {
  const inputField = useId();

  const [password, setPassword] = useState("");

  const handleChange = (evt) => {
    setPassword(() => {
      const value = evt.target.value;
      const passwordArray = value.split("");
      for (let i = 0; i <= passwordArray.length - 1; i++) {
        passwordArray[i] = "*";
        console.log(passwordArray);
      }

      return passwordArray.join("");
    });
  };

  return (
    <form className={css["form"]}>
      <div className={css["containerForm"]}>
        <label htmlFor={inputField}>Password</label>
        <input
          value={password}
          onChange={handleChange}
          className={css["input"]}
          type="text"
          placeholder="Enter password"
          id={inputField}
        />
      </div>
    </form>
  );
};

export default TestInput;
