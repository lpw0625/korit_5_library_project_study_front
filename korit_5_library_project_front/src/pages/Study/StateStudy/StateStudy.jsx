import { useEffect, useState } from "react"
import Box from "../Box/Box";
import Box2 from "../Box2/Box2";


 function StateStudy() {
    const inputState = useState("");
    const inputState2 = useState("");

    console.log("랜더링")

    useEffect(() => {
        console.log({inputA : inputState});
        return () => {
            console.log("inputA 마운트 해제")
        } 
    }, [inputState[0]]);

    useEffect(() => {
        console.log({inputB : inputState2});
        return () => {
            console.log("inputB 마운트 해제")
        } 
    }, [inputState2[0]]);

    console.log("랜더링2")

    // ['', f]
    // 첫번째값은 key값
    // 두번째값은 function(setter)값

    // 한번 비동기 상태로 찍혔다가 상태가 변화 되었음을 감지 했을때 찍힌다.

    const handleTextInputOnChange = (event) => { // event라는 매개변수를 통해서 두 개를 구분지을수 있다.
        if(event.target.name === "inputA") {
            const [ value, setValue] = inputState;
            setValue(event.target.value);

        }                                           // inputstate[0]  : value
        if(event.target.name === "inputB") {
            const [ value, setValue] = inputState;
            setValue(event.target.value);
        }
                                              
    }
  return (


    <div>

    <input 
        type="text"
        name="inputA"
        onChange={handleTextInputOnChange} // target안에 들어가 있음.
    />

     <input 
        type="text"
        name="inputB" // 함수호출이 각자의 객체에서 일어난다.
        onChange={handleTextInputOnChange}       
    />
         <Box value={inputState[0]}/>
         <Box2 value={inputState2[0]}/>
    </div>
  )
}

export default StateStudy

 // console.log(inputState); // 이상태로는 안찍힌다 왜? 비동기라서
                                                    // inputstate[1]  : setter   
                                                    //event 대상은 event.t                                                         
                                                    // 객체 자체가 나온다 이게 요소라는 개념.