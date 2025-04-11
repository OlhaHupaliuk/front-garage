import React from 'react';
import useSearch from '../hooks/useSearch';

type Props = {
    name: string,
    time: string[],
    campus: string,
}

const pairToTime = [
    "8:30 - 9:50",
    "10:10 - 11:30",
    "11:50 - 13:10",
    "13:30 - 14:50",
    "15:05 - 16:20",
    "16:45 - 18:00",
    "18:20 - 19:00",
    "19:20 - 20:00"
]

const getTime = (pair: string) => {
    return pairToTime[parseInt(pair) - 1]
}


const AuditorySearchCard: React.FC<Props> = ({name, time, campus}) => {
    const pairs = time.map(el => getTime(el));
    return(<div className='col-10 search-card'>
        <h2 className='search-card__title'>{name}</h2>
        <span className='search-card__status'></span>
        <span className='search-card__campus'>{campus == "Drago" ? "Драгоманова, 50" : "Тарнавського, 107"}</span>

        <h2 className='search-card__title'>Вільні години:</h2>
        <p>{pairs.map(el => `\n${el}`)}</p>
    </div>)

}

export default AuditorySearchCard;