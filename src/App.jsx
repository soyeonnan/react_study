import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';
import App2 from './App2';


function App() {
  // const [변수명, 변경함수] = useState(초기값);
  //use~~~ : 이랙트 내장함수 ( 리액트 훅 )
  // let [a,b] = ['a',20] -> 이렇게 만들면 각 각 a,b에 들어감
  const [title, setTitle] = useState('게시판');

  const [board, setBoard] = useState([

    {
      title : 'React',
      date : '2025-07-17',
      like : 0
    },

    {
      title : 'HTML',
      date : '2025-07-16',
      like : 0
    },

    {
      title : 'CSS',
      date : '2025-07-15',
      like : 0
    }

  ]);

  const [boardTitle, setBoardTitle] = useState(['React','HTML','CSS']);
  const [like, setLike] = useState([0,0,0]);

  const [show, setShow] = useState(false);

  const [num,setNum] = useState(0); // 몇 번째 게시글을 클릭한지 저장하는 용도

  const [newTitle,setNewTitle] = useState(''); // input에 작성 한 내용이 저장됨 (글작성 제목)
  
  // let arr = [1,2,3,4,5];

  function change() {
    setLike(like+1);
  }

  return (
    
    <div className="App">
      <App2/>
      {/* {
        arr.map((data)=>{
          // console.log('map 테스트');
          // console.log('12345');   -> 이렇게 두 줄도 가능

          //console.log(data+10);

          //return data+10; -> 태그들도 반복 가능(화면에 나타남)

          return (
          //<div>zzzz</div>
          //<p>zzz</p> -> 이렇게 하면 안 됨. 최상위 태그는 무조건 하나만!
          // 하고 싶으면 빈 태그를 최상위에 만들고 안에 태그들 만들기
          <>
            <div>{data}</div>
            <p>zzz</p>
          </>
          )
        })
      } */}

      <div className="nav">
        <h3 >{title}</h3>
      </div>
      <button onClick={()=>{
        setTitle('상품목록');
      }}>제목바꾸기</button>

    

      

      {
        boardTitle.map((title, i)=>{
          return (
            <div className="list" key={i}> 
              <h4 onClick={()=>{
                setShow(!show);
                setNum(i);
              }}>{title}<button onClick={(e)=> {
                e.stopPropagation();

                let _like = [...like];
                _like[i] = _like[i]+1;
                setLike(_like);
              }}>좋아요</button>{like[i]}</h4>
              <p>2025-07-16</p>
              <button onClick={()=>{
                let _boardTitle = [...boardTitle];
                _boardTitle.splice(i,1);
                setBoardTitle(_boardTitle);

                let _like = [...like];
                _like.splice(i,1);
                setLike(_like);
                
              }}>삭제</button>
            </div>
          )
        })
      }

      {/* 배열.splish( 삭제 할 인덱스 시작번호, 삭제 할 개수 ) */}

      {/* <div className="list">
        <h4 onClick={()=>{
          setShow(!show);
        }}>{boardTitle[0]} <button onClick={change}> 좋아요 </button> {like} </h4>
        <p>2025-07-16</p>
      </div>
      <div className="list">
        <h4>{boardTitle[1]}</h4>
        <p>2025-07-16</p>
      </div>
      <div className="list">
        <h4>{boardTitle[2]}</h4>
        <p>2025-07-16</p>
      </div> */}

      <button onClick={()=>{
        // 배열을 깨는 작업은 ... 붙히는 것 -> 그걸 다시 배열로 감싸서 새로운 변수로 옮김
       let _boardTitle = [...boardTitle];
        _boardTitle[0] = '뾰로롱';

        setBoardTitle(_boardTitle);
        
      }}>첫번째 게시물 제목 바꾸기</button>

      {
        show ? <Detail boardTitle={boardTitle} setBoardTitle={setBoardTitle} num={num}/> : ''
      }
      {/* 삼합 연산자 -> 보이게 할건지 : 안 보이게 할건지 */}
      {/* && 연산자도 가능 -> show && <Detail /> */}
      {/* h4를 클릭하면 보이게 숙제 */}

      {/* oninput은 바로 입력, onchange는 글작성을 눌러야 변경 */}
      <input type="text" value={newTitle} onInput={(e)=>{
        setNewTitle(e.target.value);
      }}/> 
      <button onClick={()=>{
        if ( newTitle ==='' ){
          alert('제목을 입력하셔야 합니다.');
          return;
        }

        let _boardTitle = [...boardTitle]; // 새로 작성 된 제목을 추가
        _boardTitle.push(newTitle);

        setBoardTitle(_boardTitle)

        let _like = [...like]; //뒤에 좋아요를 추가
        _like.push(0);

        setLike(_like)

        setNewTitle('');
      }}>글작성</button>
      
    </div>
  )

}

export default App
