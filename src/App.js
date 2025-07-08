/* eslint-disable */

import { useState } from "react"; //리액트에 있는 내장 함수 하나 쓰겠다.
import axios from "axios";

import logo from './logo.svg';
import './App.css';

// index.html 같은거.

function App() {
//function() { } ==> () => {}
  addEventListener('click', () => {

  })


  var [a, b] = [10,100]; //알아서 들어감.

  let[글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집','짜장면 코트 추천'])

  let [따봉, 따봉변경] = useState(0);
  // 따봉변경('ㄱㄴㄷ'); 아예 대체해버리는 함수.


 
  let posts='강남 고기 맛집';

  function 함수() {
    return 100
  }

  function 제목변경 () {
    // var newArray = 글제목; //복사본 만듬. (복사가 아닌 값 공유 -reference data type 검색)
    var newArray = [...글제목]; //deep copy : 새로운 복사본 생성.
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);

  }

  return (
    <div className="App">
     <div className="black-nav"> 
      <div>개발 Blog</div>
      </div>

      <button onClick={제목변경}> 버튼 </button>

      <div className="list">
        {/* onClick ={함수() } */}
      <h4>{ posts }<span onClick={ () => {따봉변경(따봉+1)}}>👍</span> {따봉}</h4>
      {/* state 변경함수로 변경하셔야 재렌더링이 잘 일어남. */}
      <h4>{ 함수() }</h4>
      <p>2월 17일 발행</p>
      <hr></hr>
    </div>

    <div className="list">
      <h4>{ 글제목[0] }</h4>
      <h4>{ 함수() }</h4>
      <p>2월 18일 발행</p>
      <hr></hr>
    </div>
    
    
    <div className="list">
      <h4>{ 글제목[1] }</h4>
      <h4>{ 함수() }</h4>
      <p>2월 19일 발행</p>
      <hr></hr>
    </div>

     <div className="list">
      <h4>{ 글제목[2] }</h4>
      <h4>{ 함수() }</h4>
      <p>2월 20일 발행</p>
      <hr></hr>
    </div>


    </div>
    
  );
}

export default App;
