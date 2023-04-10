import { useContext } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { ModalContextProvider, ModalContext } from "@/context/ModalContext";

export function ClientOnlyPortal({ children }) {
  return createPortal(children, document.querySelector("#modal"));
}

export default function Modal({ children, btnLabel, tittleModal = "This modal is rendered using ." }) {
  return (
    <ModalContextProvider>
      <ModalContent children={children} btnLabel={btnLabel} tittleModal={tittleModal}/>
    </ModalContextProvider>
  );
}

const ModalContent = ({ children, btnLabel, tittleModal }) => {
  const { open, setOpen } = useContext(ModalContext);

  return (
    <>
      <button
        className={styles.button}
        type="button"
        onClick={() => setOpen(true)}
      >
        {btnLabel}
      </button>
      {open && (
        <ClientOnlyPortal>
          <div className={styles.backdrop}>
            <div className={styles.content}>
              <div className={styles.header}>
                <p>{tittleModal}</p>
                <button
                  className={styles.button}
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  Close Modal
                </button>
              </div>
              <div className={styles.body}>{children}</div>
              <div className={styles.footer}></div>
            </div>
            <style jsx>{`
              :global(body) {
                overflow: hidden;
              }
            `}</style>
          </div>
        </ClientOnlyPortal>
      )}
    </>
  );
};
