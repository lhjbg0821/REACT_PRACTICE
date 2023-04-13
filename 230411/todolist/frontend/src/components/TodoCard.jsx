import { FiTrash2 } from "react-icons/fi";
import axios from "axios";

const TodoCard = ({ title, index, getToDoList, isDone }) => {
  // 곧 없어질 친구
  //   const [isDone, setIsDone] = useState(false);

  // isDone 값을 뒤집는 역할
  const onClickIsDone = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/todo/done/${index}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  const onClickDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/todo/${index}`
      );

      if (response.status !== 200) {
        alert("에러 발생!");
        return;
      }
      getToDoList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex my-4">
      {isDone ? (
        <>
          {/* div 태그를 button으로 바꾸고 onClickIsDone 함수를 붙임 */}
          <button className="relative" onClick={onClickIsDone}>
            <div className="border-4 border-pink-400 w-8 h-8 rounded-xl bg-pink-400 p-2"></div>
            <div className="absolute border-4 border-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 scale-75 rounded-xl bg-pink-400 p-2"></div>
          </button>
          <div className="text-2xl ml-4">{title}</div>
        </>
      ) : (
        <>
          <button
            className="border-4 border-pink-400 w-8 h-8 rounded-xl"
            onClick={onClickIsDone}
          ></button>
          <div className="text-2xl ml-4">{title}</div>
        </>
      )}
      <button
        className="ml-4 hover:text-pink-400 hover:scale-150 ease-in duration-300"
        onClick={onClickDelete}
      >
        <FiTrash2 size={24} />
      </button>
    </div>
  );
};

export default TodoCard;
