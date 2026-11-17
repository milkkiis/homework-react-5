import React, { useState } from "react";

const OpenClosePage = () => {
    // Адрес, который пользователь вводит в поле
    const [url, setUrl] = useState("");

    // Открываем введенный адрес в новой вкладке
    const handleOpenPage = () => {
        const trimmed = url.trim();

        // Если поле пустое, просим ввести адрес
        if (!trimmed) {
            alert("Введите URL!");
            return;
        }

        // Если нет http:// или https://, добавляем https://
        const fullUrl = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

        window.open(fullUrl, "_blank");
    };

    // Закрыть можно только окно, открытое скриптом
    const handleClosePage = () => {
        window.close();
    };

    return (
        <div className="page">
            <h1>Открыть/Закрыть страницу</h1>

            <div className="row">
                <input
                    className="input"
                    type="text"
                    placeholder="Введите URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button className="btn" onClick={handleOpenPage}>
                    Открыть страницу
                </button>
            </div>

            <button className="btn btn-danger" onClick={handleClosePage}>
                Закрыть страницу
            </button>
        </div>
    );
};

export default OpenClosePage;