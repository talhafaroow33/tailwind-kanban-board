import { useEffect } from "react";
import { CloseIcon } from "../../assets/svg";
import { dialogProps } from "../../interfaces";

const Dialog = ({ isOpen, setIsOpen }: dialogProps) => {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <dialog className="modal" id="modal" open={isOpen}>
        <div className="modal-main">
          <span className="icon-btn" onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </span>
          <h1>Your Section will expire soon</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse
            nisi, laboriosam illum temporibus ipsam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.
          </p>
        </div>

        <div className="flex">
          <button className="button close-button">are you sure?</button>
        </div>
      </dialog>
      <div
        className={`modal-overlay ${isOpen && "state-show"}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default Dialog;
