import { useEffect, useRef, type ReactNode } from "react"
import CloseBtn from "../CloseBtn/CloseBtn"
import styles from "./Modal.module.css"

interface modalProps{
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    closeButton?: boolean;
}

const Modal = ({
    title, 
    children, 
    isOpen, 
    onClose, 
    closeButton = true
}: modalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal(); 
        } else {
            dialog.close();
        }
    }, [isOpen]);

    return (
        <dialog 
        ref={dialogRef} 
        onClose={onClose}
        className={styles.modalDialog}
        >
        <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
            <p>{title}</p>
            {closeButton && <CloseBtn onClick={onClose} />}
            </div>
            <div className={styles.modalBody}>
            {children}
            </div>
        </div>
        </dialog>
    );
}

export default Modal