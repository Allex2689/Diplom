import {ChangeEvent, FormEvent, useState} from "react";

const NUMBERS_REGEX = /^\d+$/;

const TONALITIES = [
    {
        code: 'any',
        title: 'Любая',
    },
    {
        code: 'positive',
        title: 'Позитивная',
    },
    {
        code: 'negative',
        title: 'Негативная'
    }
];

type Errors = {
    inn?: string;
}

const validateForm = (inn: string) => {
    const errors: Errors = {};

    if (inn.length !== 10 || !NUMBERS_REGEX.test(inn) || !inn.length) {
        errors.inn = 'Введите корректные данные';
    }

    return errors;
}
// ПРИЗНАКИ
// [{
//    code: 'excludeTechNews',
//    value: false,
//    title: 'Включать сводки новостей',
// }]

const SearchForm = () => {
    const [inn, setInn] = useState('');
    const [tonality, setTonality] = useState(TONALITIES[0].code);
    const [errors, setErrors] = useState<Errors>({});
    const handleChangeInn = (event: ChangeEvent<HTMLInputElement>) => {
        setInn(event.target.value);
    }

    const handleChangeTonality = (event: ChangeEvent<HTMLSelectElement>) => {
        setTonality(event.target.value);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const formErrors = validateForm(inn);

        if (Object.keys(formErrors).length) {
            setErrors(formErrors);
        }
    }

    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            <div className="startForm">
            <h2>ИНН компании</h2>
            <input type="text" value={inn} onChange={handleChangeInn} placeholder="10 цифр" className="formInput"/>
            {errors.inn && <span className="error">{errors.inn}</span>}
            <h2>Тональность</h2>
            <select value={tonality} onChange={handleChangeTonality} className="formList">
                {TONALITIES.map((item ) => (
                    <option key={item.code} value={item.code}>{item.title}</option>
                ))}
            </select>
            <h2>Количество документов в выдаче</h2>
            <input type="text" className="formInput" placeholder="От 1 до 1000"/>
            <h2>Диапазон поиска</h2>
            <div className="twoInput">
            <input type="text" className="startDate" placeholder="Дата начала"/>
            <input type="text" className="endDate" placeholder="Дата конца"/>
            </div>
            </div>
            <div className="endForm">
                <div className="labelList">
            <label>
                <input type="checkbox" />
                Признак максимальной полноты
            </label>
            <label>
                <input type="checkbox" />
                Упоминания в бизнес-контексте
            </label>
            <label>
                <input type="checkbox" />
                Главная роль в публикации
            </label>
            <label>
                <input type="checkbox" />
                Публикации только с риск-факторами
            </label>
            <label>
                <input type="checkbox" />
                Включать технические новости рынков
            </label>
            <label>
                <input type="checkbox" />
                Включать анонсы и календари
            </label>
            <label>
                <input type="checkbox" />
                Включать сводки новостей
            </label>
            </div>
            <button type="submit">Поиск</button>
            <p>* Обязательные к заполнению поля</p>
            </div>
        </form>
    )
}

export default SearchForm;
