import React, { useState } from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState(initPerson);

    const changeMentor = (e) => {
        const prevName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const currentName = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

        setPerson((prev) => ({
            ...prev,
            mentors: prev.mentors.map((mentor) => (mentor.name === prevName ? { ...mentor, name: currentName } : mentor)),
            // mentors: prev.mentors.map((mentor) => {
            //     if (mentor.name === prevName) return { ...mentor, name: currentName };
            //     return mentor;
            // }),
        }));
    };

    const addMentor = (e) => {
        const addName = prompt(`추가할 멘토의 이름은 무엇인가요?`);
        const addTitle = prompt(`추가할 멘토의 타이틀은 무엇인가요?`);

        setPerson((prev) => ({
            ...prev,
            mentors: [...prev.mentors, { name: addName, title: addTitle }],
        }));
    };

    const deleteMentor = (e) => {
        const deleteName = prompt(`삭제할 멘토의 이름은 무엇인가요?`);

        setPerson((prev) => ({
            ...prev,
            mentors: prev.mentors.filter((mentor) => mentor.name !== deleteName),
        }));
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
