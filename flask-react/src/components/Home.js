// import { useEffect, useState } from "react";
// import { Routes, Route, useParams } from "react-router-dom";

// import axios from "../config/axiosConfig"; // Import your custom Axios instance

// function Home() {
//   console.log("reloaded app.tsx");
//   let { page } = useParams();
//   page ??= null;
//   console.log(page);
//   const [questions, setQuestions] = useState();

//   function getQuestions(page) {
//     axios({
//       method: "GET",
//       url: `/questions?page=${page}`,
//     })
//       .then((response) => {
//         const res = response.data;
//         console.log(res);
//         setQuestions(res);
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log(error.response);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//         }
//       });
//   }

//   useEffect(() => {
//     if (page) {
//       getQuestions(page);
//     }
//   }, [page]);

//   return (
//     <div className="App">
//       <h1>You have landed on page: {page}</h1>
//     </div>
//   );
// }

// export default Home;

import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "../config/axiosConfig";

function Home() {
  console.log("reloaded app.tsx");
  let { page } = useParams();
  page ??= null;
  console.log(page);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function getQuestions(page) {
    axios({
      method: "GET",
      url: `/questions?page=${page}`,
    })
      .then((response) => {
        const res = response.data;
        console.log(res);
        setQuestions(res.questions);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  useEffect(() => {
    if (page) {
      getQuestions(page);
    }
  }, [page]);

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1
    );
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === questions.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="App">
      <h1>You have landed on page: {page}</h1>
      {questions.length > 0 && (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <h3>{questions[currentQuestionIndex].title}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <button onClick={handlePrevQuestion}>Previous</button>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
}

export default Home;
