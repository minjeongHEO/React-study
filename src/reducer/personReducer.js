export default function personReducer(person, action) {
    switch (action.type) {
        case 'updated':
            const { prev, current } = action;
            return {
                ...person,
                mentors: person.mentors.map((mentor) => (mentor.name === prev ? { ...mentor, name: current } : mentor)),
            };
            break;

        case 'added':
            const { name, title } = action;
            return {
                ...person,
                mentors: [...person.mentors, { name, title }],
            };
            break;

        case 'deleted':
            return {
                ...person,
                mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
            };
            break;

        default:
            {
                throw Error(`알 수 없는 액션 타입입니다: ${action.type}`);
            }
            break;
    }
}
