/*
    action 객체를 맂드는 액션 생성 함수들을 선언합니다
    (action creators).
    여기서 () => ({})은 function() { return { } }와
    동일한 의미입니다.

    index.js로 생성하면 import시에 폴더 명까지만 적어도 자동으로 import됨.
*/
import * as types from './ActionTypes';

//ACTION 생성함수
export const increment = () => ({
    type: types.INCREMENT
});
export const decrement = () => ({
    type: types.DECREMENT
});
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color  // 왼쪽오른쪽 key:value 가 동일하면 한번만 써도 됨 생략가능 == color:color
});