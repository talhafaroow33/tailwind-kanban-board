import { useState } from "react";
import { AddIcon, ColumnStackIcon, RowStackIcon } from "../../../assets/svg";
import Dialog from "../../dialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between border-b-2 border-gray-200 px-6 py-2">
        <div className="flex items-center">
          <h2 className="mb-[5px] text-2xl font-semibold leading-tight text-gray-900">
            All Issues
          </h2>

          <div className="ml-6 flex items-center">
            <span className="rounded-full border-2 border-white">
              <img
                className="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                alt="avatar"
                loading="lazy"
              />
            </span>
            <span className="-ml-2 rounded-full border-2 border-white">
              <img
                className="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                alt="avatar"
                loading="lazy"
              />
            </span>
            <span className="-ml-2 rounded-full border-2 border-white">
              <img
                className="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                alt="avatar"
                loading="lazy"
              />
            </span>
            <span className="-ml-2 rounded-full border-2 border-white">
              <img
                className="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                alt="avatar"
                loading="lazy"
              />
            </span>
          </div>
        </div>
        <div className="flex gap-5">
          <span className="inline-flex rounded-md border bg-gray-200 p-1">
            <button className="rounded px-3 py-1 ">
              <RowStackIcon />
            </button>

            <button className="rounded bg-white px-3 py-1 shadow">
              <ColumnStackIcon />
            </button>
          </span>

          <button
            className="flex items-center rounded-md bg-gray-800 py-2 pl-2 pr-4 text-sm font-medium text-white"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <AddIcon />
            <span className="ml-1">New Issues</span>
          </button>
        </div>
      </div>

      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
