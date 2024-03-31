import React, {useEffect} from 'react';
import cl from './MyModal.module.scss'
import {ModalProps} from "../../../@types/typesComponents";

const MyModal: React.FC<ModalProps> = ({active, setActive, children}) => {
    const rootClass = [cl.modal]
    if (active) {
        rootClass.push(cl.active)
    }

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActive(false);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, [setActive])

    return (
        <div onClick={() => setActive(false)} className={rootClass.join(' ')}>
            <div onClick={e => e.stopPropagation()} className={cl.modal__content}>
                <span onClick={() => setActive(false)} className={cl.close}>
                    X
                </span>
                {children}
            </div>
        </div>
    );
};

export default MyModal;