import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';


function App() {
  // const [변수명, 변경함수] = useState(초기값);
  //use~~~ : 이랙트 내장함수 ( 리액트 훅 )
  // let [a,b] = ['a',20] -> 이렇게 만들면 각 각 a,b에 들어감
  const [title, setTitle] = useState('게시판');
  const [boardTitle, setBoardTitle] = useState(['React','HTML','CSS']);
  const [like, setLike] = useState(0);

  const [show, setShow] = useState(false);

  function change() {
    setLike(like+1);
  }

  return (
    
    <div className="App">
      <div className="nav">
        <h3 >{title}</h3>
      </div>
      <button onClick={()=>{
        setTitle('상품목록');
      }}>제목바꾸기</button>
      <div className="list">
        <h4>{boardTitle[0]} <button onClick={change}> 좋아요 </button> {like} </h4>
        <p>2025-07-16</p>
      </div>
      <div className="list">
        <h4>{boardTitle[1]}</h4>
        <p>2025-07-16</p>
      </div>
      <div className="list">
        <h4>{boardTitle[2]}</h4>
        <p>2025-07-16</p>
      </div>

      <button onClick={()=>{
        // 배열을 깨는 작업은 ... 붙히는 것 -> 그걸 다시 배열로 감싸서 새로운 변수로 옮김
       let _boardTitle = [...boardTitle];
        _boardTitle[0] = '뾰로롱';

        setBoardTitle(_boardTitle);
        
      }}>첫번째 게시물 제목 바꾸기</button>

      {
        show ? <Detail /> : ''
      }
      {/* 삼합 연산자 -> 보이게 할건지 : 안 보이게 할건지 */}
      {/* && 연산자도 가능 -> show && <Detail /> */}
      {/* h4를 클릭하면 보이게 숙제 */}

      
    </div>
  )

  

}

export default App
