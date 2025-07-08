import logo from './logo.svg';
import './App.css';

// index.html 같은거.

function App() {


  let posts='강남 고기 맛집';

  let style = { color: 'blue', fontSize :'50px'}
  function 함수() {
    return 100
  }
  return (
    // 장점 : 리액트는 데이터 바인딩이 쉽다.
    <div className="App">
     <div className="black-nav"> 
      {/* className={ posts} 가능. 대부분에 중괄호를 사용해서 쓰면 된다. 
      style = "font-size:16px " 에러 걸림. 
      {{color: 'blue'}} 이런식으로 오브젝트 자료형으로 만든 스타일을 사용해야 한다.

       - font-size 이런거. 자바스크립트 - : 마이너스 이기 때문에 
       카멜 변수명으로 fontSize 이런식으로 작성해야함.
      */}
      <div style={ style }>개발 Blog</div>

      </div>
      <h4>{ posts }</h4>
      <h4>{ 함수() }</h4>
      {/* 이미지는 import 한 후에 img src={logo} 이런식으로 바인딩 가능. */}
      <img src={logo} />
    </div>
  );
}

export default App;
