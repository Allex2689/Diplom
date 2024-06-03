import "../SearchResult/searchResult.css";
import Histograms from "./Components/Histograms/Histograms";
import AllNews from "./Components/News/News";
import {useLocation} from "react-router-dom";

const SearchResult = () => {
    const { state } = useLocation();

    console.log(state);

    return (
        <main className="main">
        <div className="title1">
            <div className="titleText">
            <h1>Ищем. Скоро <br />будут результаты</h1>
            <p>Поиск может занять некоторое время,<br /> просим сохранять терпение.</p>
            </div>
            <img src="./girl.svg" alt="girl" />
        </div>
        <div className="summary">
        <h2>Общая сводка</h2>
        <p className="underTitle">Найдено 4 221 вариантов</p>
        <div className="summaryContainer">
            <img src="./arrow1.svg" alt="arrow1" />
           {/* <div className="summaryInfo"> */}
            <div className="summaryInfoTitle">
            <p>Период</p>
            <p>Всего</p>
            <p>Риски</p>
            </div>
            <Histograms/>
           {/* </div> */}
            <img src="./arrow2.svg" alt="arrow2" />
        </div>
        </div>
        <h3>Список документов</h3>
        <div className="newsContainer">
            <AllNews/>
        </div>
        <button className="bottomButton">Показать больше</button>
        </main>
    )
}

export default SearchResult;
