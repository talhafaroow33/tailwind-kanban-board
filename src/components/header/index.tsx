import { BellIcon, SearchIcon } from "../../assets/svg";
import Avatar from "../common/avatar";

const Header = () => {
  return (
    <header className="px-6">
      <div className="flex items-center justify-between border-b border-gray-200 py-3">
        <div className="flex-1">
          <div className="relative w-64">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon />
            </span>
            <input
              className="rounded-md border border-gray-400 py-[10px] pl-10 pr-3 text-sm text-gray-900 placeholder-gray-600"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button>
            <BellIcon />
          </button>
          <button>
            <Avatar
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
              alt="avatar"
              height={9}
              width={9}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
