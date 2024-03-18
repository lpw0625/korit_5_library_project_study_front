
import React, { useCallback, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getPrincipalRequest } from '../apis/api/principal';
import HomePage from '../pages/HomePage/HomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import { principalStatus } from '../atoms/principalAtom';

 function AuthRoute(props) {
    const [ principal, setPrincipal] = useRecoilState(principalStatus)
    
    useEffect(() => {
        // 컴포넌트가 마운트될 때 한 번만 실행되는 getPrincipal 함수를 호출합니다.
        getPrincipal();
    }, []);
    
    // getPrincipal 함수를 useCallback 훅을 사용하여 선언합니다.
    const getPrincipal = useCallback(() => {
        // getPrincipalRequest 함수를 호출하여 사용자 정보를 요청합니다.
        getPrincipalRequest()
        .then(response => {
            // 요청이 성공한 경우, 응답을 로그에 출력합니다.
            setPrincipal(() => response.data);
        }).catch(error => {
            // 요청이 실패한 경우, 에러를 로그에 출력합니다.
            console.log(error);
        });
    }, []);

  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthPage /> } />
        <Route path="/" element={ <HomePage /> } />
    </Routes>

  );
}

export default AuthRoute;