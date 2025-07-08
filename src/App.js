import logo from './logo.svg';
import './App.css';

// index.html 같은거.

function App() {


  let posts='강남 고기 맛집';
  document.getElementById().innerHTML=''; //전통적인 자바스크립트 데이터 바인딩
  return (
    //리액트 에서는 html이 아닌 좀 이상한 jsx 문법을 사용.(일종의 js라서)
    // class--> className
    // 장점 : 리액트는 데이터 바인딩이 쉽다.
    <div className="App">
     <div className="black-nav"> 개발 Blog

      <h4>블로그 글</h4>

     </div>
    </div>
  );
}

export default App;
