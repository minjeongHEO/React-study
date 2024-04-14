import React, { useEffect, useState } from "react";

export default function Products() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(prev => !prev);
    };
    // *1)
    useEffect(() => {
        //상대경로를 적으면 public안에있는 곳으로 접근이 된다.
        fetch(`data/${checked ? "sale_" : ""}products.json`)
            .then(res => res.json())
            .then(data => {
                console.log("🔥데이터를 네트워크에서 받아옴\n(fetch)");
                setProducts(data);
            });
        //*2)
        return () => {
            console.log("🧹unmount 될 때\n(깨끗하게 청소하는 일들을 합니다.)");
        };
    }, [checked]);
    // }, []);

    return (
        <>
            <input id='checkBox' type='checkbox' checked={checked} onChange={handleChange} />
            <label htmlFor='checkBox'>Show Only ⭐ Sale</label>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
            <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
        </>
    );
}

/**
 * *1)
 * fetch부분을 useEffect없이 그냥 넣으면 무한 fetch됨
    컴포넌트가 표시될 때 딱 한번만 실행하게 하려면,
    useEffect의 첫번째 인자에 원하는 콜백함수
    useEffect의 두번째 인자에 dependency(의존) 전달
        텅빈 배열을 전달하면 아무런 dependency가 전달되지 않기 때문에, 처음 한번만 실행이 된다.
        checked 상태를 전달하면 checked가 변할 때 마다 실행이 된다.
 * *2)
 * useEffect에서 함수를 호출했는데, 해당 컴포넌트가 없어질 때(화면에서 사라질 때(unmount될 때)
 *  메모리를 정리한다던지, 소켓 네트워크 통신을 close해야 한다던지,...
 *  그럴 경우에 useEffect에 return 함수를 전달해주면 된다.
 * 
 *  그리고 useEffect이 새로 호출 될 때마다 return 콜백함수 실행됨
 */
