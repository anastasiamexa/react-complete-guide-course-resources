import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children, open, className = '' }) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;
        if (open) {
            modal.showModal();
        }

        // Clean up function
        return () => modal.close();
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,
        document.getElementById('modal')
    );
}

export default Modal;