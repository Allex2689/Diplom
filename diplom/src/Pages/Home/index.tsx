import "./home.css";
import Cards from "./Components/Cards/Cards";
import Tariffs from "./Components/Tariffs/Tariffs";

const HomePage = () => {
    return (
        <div className="homeContainer">
            <div className="homeTitle">
                <div>
                    <h1>сервис по поиску <br />публикаций <br />о компании <br />по его ИНН</h1>
                    <p>Комплексный анализ публикаций, получение данных<br /> в формате PDF на электронную почту.</p>
                    <button>Запросить данные</button>
                </div>
                <img src="./man.png" alt="man" />
            </div>
            <div className="homeInfo">
                <h1>Почему именно мы</h1>
                    <Cards />
            </div>
            <div className="imgContainer">
            <img src="./HomeImg.svg" alt="HomeImg" className="HomeImg" />
            </div>
            <h2>наши тарифы</h2>
            <div className="tariffs">
                <Tariffs />
            </div>
        </div>
    )
}
export default HomePage;
