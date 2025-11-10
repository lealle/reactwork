import { useState } from 'react';

const Light_on_off = () => {
    const [light, setLight] = useState(true);
    return (
        // div,Fragment -> Fragment 는 생략가능 
        <>
            {light ? <h2 style={{ color: 'red' }}>전구on</h2> : <h2 style={{ color: 'gray' }}>전구off</h2>}
            {/* 스타일 중괄호로 정의 / 객체형태로 넣어줌 */}
            <button onClick={() => { setLight(!light) }}>
                {light ? "끄기" : "켜기"}
            </button>
        </>
    )

    // 한줄일떄는 생략가능 
}
export default Light_on_off;