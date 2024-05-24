<template>
    <div class="card">
        <div class="card-header">Exam04ComputedFunBinding</div>
        <div class="card-body">
            <p>이름: {{ name }}</p>
            <p>주민번호: {{ getSsn() }}</p>
            <p>주민번호: {{ computedSsn }}</p>
            <hr/>
            <button class="btn btn-danger btn-sm me-2" @click="changeName">이름 수정</button>
            <button class="btn btn-danger btn-sm" @click="changeSsn">주민번호 수정</button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";

//상태 선언
const name = ref("홍길동");
const ssn1 = ref("123456");
const ssn2 = ref("1234567");

//일반 함수 -> 리렌더링 할때마다 값이 바뀌지 않더라도 호출된다.
function getSsn() {
    console.log("getSsn() 실행");
    const ssn = ssn1.value + "-" + ssn2.value.charAt(0) + "******";
    return ssn;
}

//계산된 함수 computed는 리렌더링 되더라도 자신의 값이 바뀌지 않으면 실행되지 않음
//computed를 활용한 바인딩을 성능향상시킴 > 일반 함수로 호출하지말고 computed를 이용하자\
//computed 함수안에 상태값들이 존재하고 상태값들이 바뀌었을때 함수를 실행시킨다.
const computedSsn = computed(() => {
    console.log("computedSsn() 실행");
    const ssn = ssn1.value + "-" + ssn2.value.charAt(0) + "******";
    return ssn;
});

//상태 변경 함수
function changeName(){
    name.value += "동";
}

function changeSsn() {
    ssn2.value = (parseInt(Math.random()*10) + 1) + "234567";
}
</script>



<style scoped>
</style>