import { CircleIcon } from "../../assets/svg";

const IssueCard = () => {
  const date = new Date();
  return (
    <div className="mt-2 rounded-md bg-white p-5 shadow">
      <div className="flex justify-between">
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <img
          className="h-6 w-6 rounded-full"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
        />
      </div>

      <div className="mt-2 flex items-baseline justify-between">
        <time className="text-sm text-gray-600">Sep 13</time>

        <div className="inline-flex items-center rounded bg-teal-100 px-2 py-[2px]">
          <CircleIcon />
          <p className="ml-2 text-sm font-medium text-teal-900">
            Feature Request
          </p>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
