function Detail({boardTitle, setBoardTitle, num}) {
  
 

  return (
    <div className="detail" >
        <button onClick={()=>{
          let _boardTitle =[...boardTitle];
          _boardTitle[0] = "zzz";
          setBoardTitle(_boardTitle)
          
        }}>제목 바꿔주는 버튼</button>
        <h4>{boardTitle[num]}</h4>
        <p>날짜</p>
        <p>내용</p>
      </div>

  )
}

// 아래처럼 사용해도 됨
// const Detail = () => {
//   return (
//     <>
//     </>
//   )
// }

export default Detail;