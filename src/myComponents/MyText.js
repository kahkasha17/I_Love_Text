import React, { useState } from "react";

export default function MyText(props) {
    
    const [text,setText]=useState("Enter Your Text Here");
    // setText('I Love You');
    const funcOnchanged =(event)=>
    {
        console.log("Onchanged function Working ")
        setText(event.target.value);
    }
    const toUpperCase =()=>
    {
        console.log("toUpperCase function Working ");
        let newText=text.toUpperCase();
       setText(newText);
    }
    const toLowerCase =()=>
    {
        console.log("toLowerCase function Working ");
        let newText=text.toLowerCase()
       setText(newText);
    }
    // const toPerfectCase =()=>
    // {
    //     console.log("toUpperCase function Working ");
    //    // const words = text.split(" ");

    //     const words =text.charAt(0).toUpperCase()+ text.slice(1)
    //         setText(words);
    // }
    const totalCharCount =()=>
    {
        console.log("total word count function Working ");
        let newText=text.split(" ").join("").length;
       // let wordc=newText.length();
       setText(newText);
    }
    const totalWordCount =()=>
    {
        console.log("total word count function Working ");
        let newText=text.split(" ").length;
       // let wordc=newText.length();
       setText(newText);
    }
    const funcClear =()=>
    {
        console.log("total word count function Working ");
        let newText=" ";
       // let wordc=newText.length();
       setText(newText);
    }

  return (

    <div>
      <h1>{props.Heading}</h1>
      <textarea className="form-control" id="floatingTextarea2" rows="10" onChange={funcOnchanged} value={text} ></textarea>
      <button type="button" className="btn btn-secondary mt-5"onClick={toUpperCase}>
        To Upper-Case
      </button>
      <button type="button" className="btn btn-secondary mt-5 mx-2"onClick={toLowerCase}>
        To Lower-Case
      </button>
      {/* <button type="button" className="btn btn-secondary mt-5 mx-2"onClick={toPerfectCase}>
        To Perfect-Case
      </button> */}
      <button type="button" className="btn btn-secondary mt-5 mx-2"onClick={totalWordCount}>
        Total Word Count
      </button>
      <button type="button" className="btn btn-secondary mt-5 mx-2"onClick={totalCharCount}>
        Total Character Count
      </button>
      <button type="button" className="btn btn-secondary mt-5 mx-2" onClick={funcClear}>
        Clear
      </button>

      {/* <button type="button" className="btn btn-primary mt-5 mx-2">
        Click Here To See Preview
      </button>
      <p>heelo</p> */}
    </div>
  );
}
