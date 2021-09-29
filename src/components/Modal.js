import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function Modal(props) {
    const closeModal = () => {
        props.onCloseModal();
    };

    return (
        <section className="Modal" data-testid="modalGuide">
            {props.canClose ? 
                <div className="ModalCloseButton">
                    <Button onClick={closeModal} size="large" variant="text" data-testid="closeButton">
                        <CloseIcon></CloseIcon>
                    </Button>
                </div> : ''}
            {props.children}
        </section>
    );
};