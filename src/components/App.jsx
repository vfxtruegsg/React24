// src/App.jsx
// import Product from "./Product";
// import {
//   Books,
//   RandomText,
//   Panzer,
//   Mailbox,
//   Messages,
//   Cookies,
//   Chease,
// } from "./example";
// import { Alert } from "./Alert";
// import ApiQuery from "./Example";
// import { fetchArticlesWithTopic } from "../articles-api";
// import { useState, useEffect } from "react";
// import { MutatingDots } from "react-loader-spinner";

// export default function App() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         setLoading(true);
//         const response = await fetchArticlesWithTopic("react");

//         setArticles(response);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchArticles();
//   }, []);
//   return (
//     <>
//       {loading && (
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             width: "100vw",
//             height: "100vh",
//           }}
//         >
//           <MutatingDots color="#000" secondaryColor="red" />
//         </div>
//       )}
//       {error && <p>Ooops, sorry, your request went wrong!</p>}
//       {articles.length > 0 && <ApiQuery data={articles} />}
//     </>
//   );
// }
// import { SearchForm } from "./SearchForm";
// import { useState } from "react";
// import { fetchArticlesWithTopic } from "../articles-api";
// import { ApiQuery } from "./Example";

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSearch = async (topic) => {
//     try {
//       setArticles([]);
//       setLoading(true);
//       setError(false);

//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
//     } catch (error) {
//       console.log(error);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       {loading && <p>Wait...</p>}
//       {error && <p>Sorry, bad request</p>}
//       {articles.length > 0 && <ApiQuery data={articles} />}
//     </div>
//   );
// };

// export default App;

import { useEffect, useState, useRef, forwardRef } from "react";
// import { CustomButton } from "./Example";

const CustomButton = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));

const App = () => {
  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
};

export default App;
