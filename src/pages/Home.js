import React, { useState, useEffect } from "react";

const Home = () => {
    // Текущее время, обновляется каждую секунду
    const [time, setTime] = useState(new Date());
    // Координаты курсора относительно окна браузера
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    // Размер окна
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // Раз в секунду обновляем время
        const interval = setInterval(() => setTime(new Date()), 1000);

        // Запоминаем позицию курсора при каждом движении мыши
        const handleMouseMove = (event) => {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        // Обновляем размер окна при его изменении
        const handleResize = () => {
            setViewport({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        // При уходе со страницы убираем таймер и подписки
        return () => {
            clearInterval(interval);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Смещение часового пояса в часах
    const utcOffset = -time.getTimezoneOffset() / 60;
    const offsetText = utcOffset >= 0 ? `+${utcOffset}` : `${utcOffset}`;

    // Название часового пояса
    const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
        <div className="page">
            <h1>Добро пожаловать!</h1>

            <p className="info">
                <span>Дата</span>
                <br />
                {time.toLocaleDateString()}
            </p>

            <p className="info">
                <span>Время</span>
                <br />
                {time.toLocaleTimeString()} (UTC {offsetText}, {timeZoneName})
            </p>

            <p className="info">
                <span>UserAgent</span>
                <br />
                {navigator.userAgent}
            </p>

            <p className="info">
                <span>ViewPort и плотность пикселей</span>
                <br />
                {viewport.width}x{viewport.height}, {window.devicePixelRatio}
            </p>

            <p className="info">
                <span>Координаты курсора</span>
                <br />X: {cursorPosition.x}, Y: {cursorPosition.y}
            </p>
        </div>
    );
};

export default Home;