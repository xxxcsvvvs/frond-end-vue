import axios from "axios";
import qs from "qs";

//회원 가입
function join(member) {
    /*
    member = {
        mid: "blueskii",
        mname: "신용권",
        mpassword: "12345",
        memail:"blueskii@naver.com"
    }
    */
    //POST: raw/json 방식으로 전달
    return axios.post("/member/join", member);
}

//로그인
function login(member) {
    /*
    member = {
        mid: "user",
        mpassword: "12345"
    }
    */
   //POST: QueryString(mid=user&mpassword=12345) 방식으로 전달
   return axios.post("/member/login", qs.stringify(member));
}

export default {
    join,
    login
};