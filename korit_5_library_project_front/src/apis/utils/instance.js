import axios from "axios"; // axios 라이브러리를 임포트합니다.

// axios 인스턴스를 생성합니다.
const instance = axios.create({
    baseURL: "http://localhost:8080", // 요청의 기본 URL을 설정합니다.
    headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken") // 인증 토큰을 헤더에 추가합니다.
    }
});

// axios 인스턴스를 내보냅니다.
export default instance;