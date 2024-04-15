import React, { useReducer, useState } from 'react';
import personReducer from './reducer/personReducer.js';

export default function AppMentor() {
    // const [person, setPerson] = useState(initPerson);
    const [person, dispatch] = useReducer(personReducer, initPerson);

    const changeMentor = (e) => {
        const prevName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const currentName = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

        dispatch({ type: 'updated', prev: prevName, current: currentName });
    };

    const addMentor = (e) => {
        const addName = prompt(`추가할 멘토의 이름은 무엇인가요?`);
        const addTitle = prompt(`추가할 멘토의 타이틀은 무엇인가요?`);

        dispatch({ type: 'added', name: addName, title: addTitle });
    };

    const deleteMentor = (e) => {
        const deleteName = prompt(`삭제할 멘토의 이름은 무엇인가요?`);

        dispatch({ type: 'deleted', name: deleteName });
    };

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는:</p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={changeMentor}>멘토의 이름을 바꾸기</button>
            <button onClick={addMentor}>멘토 추가하기</button>
            <button onClick={deleteMentor}>멘토 삭제하기</button>
        </div>
    );
}

const initPerson = {
    name: '우디',
    title: '개발자',
    mentors: [
        {
            name: '슈니',
            title: '시니어개발자',
        },
        {
            name: '멜리사',
            title: '시니어개발자',
        },
    ],
};
