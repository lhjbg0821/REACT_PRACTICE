import { useState } from "react";
import axios from "axios";

const CreateToDo = () => {
  const [title, setTitle] = useState("");

  const onSubmitCreateToDo = async (e) => {
    try {
      e.preventDefault();

      if (!title) {
        alert("타이틀을 입력해주세요");
        return;
      }

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/todo`,
        {
          title,
          desc: `${title} 아자아자 화이팅`,
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex mt-2" onSubmit={onSubmitCreateToDo}>
      {/* grow : 자기 공간 차지 */}
      <input
        className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        className="ml-4 px-2 py-1 bg-pink-200 hover:bg-pink-400 rounded-lg text-gray-50"
        type="submit"
        value="새 투두 생성"
      />
      {/* 두번째 input : 버튼 */}
    </form>
  );
};

export default CreateToDo;
