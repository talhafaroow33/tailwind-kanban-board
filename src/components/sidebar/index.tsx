import { AddIcon, Logo } from "../../assets/svg";
import { ISSUES_NAV, TAGS_NAV } from "../../constants";

const Sidebar = () => {
  return (
    <aside className="w-64 overflow-auto border-r bg-[#f7fafc] px-8 py-3">
      <Logo />

      <nav className="mt-8">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
          Issues
        </h3>

        <section className="-mx-3 mt-2">
          {ISSUES_NAV.map((item, index) => {
            const { title, count } = item;

            return (
              <a
                key={index}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-900 ${
                  title === "All" && "bg-gray-200"
                }`}
                href="#"
              >
                <span className="text-sm font-medium text-gray-900">
                  {title}
                </span>
                <span className="text-xs font-semibold text-gray-700">
                  {count > 0 && count}
                </span>
              </a>
            );
          })}
        </section>

        <h3 className="mt-8 text-xs font-semibold uppercase tracking-wide text-gray-600">
          Tags
        </h3>

        <section className="-mx-3 mt-2">
          {TAGS_NAV.map((tag, index) => {
            const { title } = tag;

            return (
              <a
                key={index}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-900"
                href="#"
              >
                <span className="text-sm font-medium text-gray-700">
                  {title}
                </span>
              </a>
            );
          })}
        </section>

        <button className="mt-2 -ml-1 flex items-center text-sm font-medium text-gray-600">
          <AddIcon />
          <span className="ml-1">New Project</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
