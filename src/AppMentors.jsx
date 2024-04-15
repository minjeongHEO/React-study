import React, { useState } from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState({
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
    });
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
            <button
                onClick={() => {
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
                }}
            >
                멘토의 이름을 바꾸기
            </button>
        </div>
    );
}
