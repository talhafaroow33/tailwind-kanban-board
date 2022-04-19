import { BoardProps } from "../../interfaces";

const Board = ({ children }: BoardProps) => {
  return (
    <div className="mt-3 w-[19.5rem] flex-shrink-0 rounded-md bg-gray-100 p-3">
      <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
      <ul>
        <li>
          <a href="#">{children}</a>
        </li>
      </ul>
    </div>
  );
};

export default Board;
