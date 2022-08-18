import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export function ClientOnlyPortal({ children, selector }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}

export default function Modal({ children, btnLabel }) {
  const [open, setOpen] = useState();

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        {btnLabel}
      </button>
      {open && (
        <ClientOnlyPortal selector="#modal">
          <div className={styles.backdrop} onDoubleClick={() => setOpen(false)}>
            <div className={styles.content}>
              <div className={styles.header}>
                <p>This modal is rendered using .</p>
                <button type="button" onClick={() => setOpen(false)}>
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
}
