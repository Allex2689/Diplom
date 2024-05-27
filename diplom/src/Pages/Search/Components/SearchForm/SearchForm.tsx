import { ChangeEvent, FormEvent, useState } from "react";
import {SIGNS, TONALITIES} from './const';
import {Errors} from './types';

const NUMBERS_REGEX = /^\d+$/;

const validateForm = (inn: string) => {
    const errors: Errors = {};

    if (inn.length !== 10 || !NUMBERS_REGEX.test(inn) || !inn.length) {
        errors.inn = 'Введите корректные данные';
    }
    if (inn.length === 0) {
        errors.inn = 'Обязательное поле';
    }
    return errors;
}

const validateForm2 = (docs: string) => {
    const errors: Errors = {};
    const docsNumber = parseInt(docs, 10);

    if (isNaN(docsNumber) || docsNumber < 1 || docsNumber > 1000) {
        errors.docs = 'Введите значение от 1 до 1000';
    }
    if (docs.length === 0) {
        errors.docs = 'Обязательное поле';
    }

    return errors;
}

const SearchForm = () => {
    const [inn, setInn] = useState('');
    const [docs, setDocs] = useState('');
    const [tonality, setTonality] = useState(TONALITIES[0].code);
    const [errors, setErrors] = useState<Errors>({});


    const handleChangeInn = (event: ChangeEvent<HTMLInputElement>) => {
        setInn(event.target.value);
       
        if (errors.inn) {
            setErrors(prevErrors => ({
                ...prevErrors,
                inn: undefined,
            }));
        }
    }
    
    const handleChangeTonality = (event: ChangeEvent<HTMLSelectElement>) => {
        setTonality(event.target.value);
       
        if (errors.tonality) {
            setErrors(prevErrors => ({
                ...prevErrors,
                tonality: undefined,
            }));
        }
    }
    
    const handleChangeDocs = (event: ChangeEvent<HTMLInputElement>) => {
        setDocs(event.target.value);
       
        if (errors.docs) {
            setErrors(prevErrors => ({
                ...prevErrors,
                docs: undefined,
            }));
        }
    }
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const formErrors = {
            ...validateForm(inn),
            ...validateForm2(docs),
        };
    
        if (Object.keys(formErrors).length) {
            setErrors(formErrors);
        }
    };

    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            <div className="startForm">
                <h2>ИНН компании</h2>
                <input type="text" value={inn} onChange={handleChangeInn} placeholder="10 цифр" className={errors.inn ? 'formInputError1' : 'formInput'} />
                {errors.inn && <span className="error1">{errors.inn}</span>}
                <h2>Тональность</h2>
                <select value={tonality} onChange={handleChangeTonality} className="formList">
                    {TONALITIES.map((item) => (
                        <option key={item.code} value={item.code}>{item.title}</option>
                    ))}
                </select>
                <h2>Количество документов в выдаче</h2>
                <input type="text" value={docs} onChange={handleChangeDocs} className={errors.docs ? 'formInputError2' : 'formInput'} placeholder="От 1 до 1000" />
                {errors.docs && <span className="error1">{errors.docs}</span>}
                <h2>Диапазон поиска</h2>
                <div className="twoInput">
                    <input type="text" className="startDate" placeholder="Дата начала" />
                    <input type="text" className="endDate" placeholder="Дата конца" />
                </div>
            </div>
            <div className="endForm">
                <div className="labelList">
                    {SIGNS.map((item) => (
                        <label key={item.code}>
                            <input type="checkbox" value={item.code} />
                            {item.title}
                        </label>
                    ))}
                </div>
                <button type="submit">Поиск</button>
                <p>* Обязательные к заполнению поля</p>
            </div>
        </form>
    );
}

export default SearchForm;
