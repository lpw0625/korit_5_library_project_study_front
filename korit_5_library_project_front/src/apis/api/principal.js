import instance from "../utils/instance"; // "../utils/instance" 파일에서 정의된 axios 인스턴스를 임포트합니다.

// getPrincipalRequest 함수를 선언합니다.
export const getPrincipalRequest = async () => {
    // axios 인스턴스를 사용하여 "/account/principal" 경로로 GET 요청을 보냅니다.
    return await instance.get("/account/principal");
};

    //로그인 성공하면 로그인 정보를 뜨는것
    // 로그인상태와 비로그인 상태를 구분하기 위해서.

