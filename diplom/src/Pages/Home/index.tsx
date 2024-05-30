import "./home.css";
import Cards from "./Components/Cards";
import Tariffs from "./Components/Tariffs";


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
                <img src="./arrow1.svg" alt="arrow1" className="arrow1" />
                <img src="./arrow2.svg" alt="arrow2" className="arrow2" />
                {/*<div className="infoCards">*/}
                    <Cards />
                {/*</div>*/}
            </div>
            <img src="./HomeImg.svg" alt="HomeImg" className="HomeImg" />
            <h2>наши тарифы</h2>
            <div className="tariffs">
                <Tariffs />
            </div>
        </div>
    )
}
export default HomePage;
