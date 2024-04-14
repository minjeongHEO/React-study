import "./App.css";
import Avatar from "./components/Avatar.jsx";
import Profile from "./components/Profile.jsx";

function AppProfile() {
    const handleClick = e => {
        console.log(e);
        alert("버튼이 클릭됨!!");
    };
    return (
        <>
            <button onClick={handleClick}>버튼</button>
            <Profile
                image='https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='Woody Heo'
                title='Frontend Developer'
                isNoob={true}
            />
            <Profile
                image='https://images.unsplash.com/photo-1712174766230-cb7304feaafe?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='Anna Young'
                title='Frontend Developer'
            />
            <Profile
                image='https://images.unsplash.com/photo-1712939706455-aa727970e5d5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='Jihwan Choi'
                title='Backend Developer'
            />
        </>
    );
}

export default AppProfile;
