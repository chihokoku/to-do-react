import React, { useState } from "react";

export const InputForm = ({ taskList, setTaskList }) => {

  const [inputText, setInputText] = useState("")

  const handleSubmit = (e) => {
    // フォームはボタンを押すと再レンダリングされて入力値が消えてしまう
    e.preventDefault();


    // タスクを追加する
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false
      }
    ]);

    // 入力した文字を消す
    setInputText("")

  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  )
}