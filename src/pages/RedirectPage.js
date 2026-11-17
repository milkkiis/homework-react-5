import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Компонент модального окна. Получает данные через пропсы:
// title и text это тексты, onConfirm вызывается по "Да", onCancel по "Нет"
const ConfirmModal = ({ title, text, onConfirm, onCancel }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onCancel();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onCancel]);

    return (
        // Тёмный фон на весь экран. Клик по нему закрывает окно
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <p>{text}</p>

                <div className="modal-buttons">
                    <button className="btn" onClick={onConfirm}>
                        Да
                    </button>
                    <button className="btn btn-gray" onClick={onCancel}>
                        Нет
                    </button>
                </div>
            </div>
        </div>
    );
};

const RedirectPage = () => {
    const navigate = useNavigate();
    // Показано ли модальное окно (true или false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Открываем окно по клику на кнопку
    const handleOpenModal = () => setIsModalOpen(true);
    // Закрываем окно без перехода
    const handleCancel = () => setIsModalOpen(false);
    // Подтверждение: закрываем окно и переходим на главную страницу
    const handleConfirm = () => {
        setIsModalOpen(false);
        navigate("/");
    };

    return (
        <div className="page">
            <h1>Страница Redirect</h1>
            <button className="btn" onClick={handleOpenModal}>
                Вернуться на главную
            </button>
            {isModalOpen && (
                <ConfirmModal
                    title="Подтверждение"
                    text="Вы точно хотите вернуться на главную страницу?"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default RedirectPage;