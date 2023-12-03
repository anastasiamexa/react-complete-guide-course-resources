import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    const dialog = useRef();

    // useImperativeHandle() is a hook that allows you to expose certain functions to the parent component
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal(); // showModal() is a native method
            }
        };
    });

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;