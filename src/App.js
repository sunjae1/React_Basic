import { useState, useEffect } from "react"; //리액트에 있는 내장 함수 하나 쓰겠다.
import axios from "axios";

import logo from './logo.svg';
import './App.css';

// index.html 같은거.

function App() {

  //api 테스트
  const [hello, setHello] = useState('');
  const [postResult, setPostResult] = useState('');

  useEffect(() => {
    axios.get('/api/test')
    .then((res) => {
      setHello(res.data);
    })
  }, []);


  useEffect(() => {
  axios.post('/api/test', {
    name: '홍길동',
    age: 25
  })
    .then((res) => {
      setPostResult(res.data.message); // 예: { message: "성공" }일 경우
    });
}, []);


  //api 테스트

  var [a, b] = [10,100]; //알아서 들어감.

  let [글제목, 글제목변경] =useState('남자 코트 추천');
  let [글제목2, 글제목변경2] =useState(['남자 코트 추천', '강남 우동 맛집']);
  let [글제목3, 글제목변경3] =useState("짜장면 코트 추천");
  
  //array 형식
  //[a,b] a:남자 코트 추천 b:수정 함수가 들어감.


// 데이터는 1. 변수에 넣거나 2. state에 넣거나(변수 대신 쓰는 데이터 저장공간(문자, 숫자, array, object 다 저장 가능))

//state 쓰는 이유 : 웹이 App처럼 동작하게 만들고 싶어서(state는 변경되면(제목을 정렬하든가, 수정하든가 하면) 새로고침 없이 HTML이 자동으로 재렌더링 됨.)

/* 자주 바뀌는, 중요한 데이터는 변수 말고 state로 저장해서 사용. */
  let posts='강남 고기 맛집';

  // let style = { color: 'blue', fontSize :'50px'}
  function 함수() {
    return 100
  }
  return (
    <div className="App">
     <div className="black-nav"> 
      <div>개발 Blog</div>
      </div>

{/* api 테스트 */}

  백엔드 데이터 : {hello}
  POST 응답 : {postResult}

{/* api 테스트 */}


      <div className="list">
      <h4>{ posts }</h4>
      <h4>{ 함수() }</h4>
      <p>2월 17일 발행</p>
      <hr></hr>
    </div>

    <div className="list">
      <h4>{ 글제목 }</h4>
      <h4>{ 함수() }</h4>
      <p>2월 18일 발행</p>
      <hr></hr>
    </div>
    
    
    <div className="list">
      <h4>{ 글제목2[1] }</h4>
      <h4>{ 함수() }</h4>
      <p>2월 19일 발행</p>
      <hr></hr>
    </div>

     <div className="list">
      <h4>{ 글제목3 }</h4>
      <h4>{ 함수() }</h4>
      <p>2월 20일 발행</p>
      <hr></hr>
    </div>


    </div>
    
  );
}

export default App;
