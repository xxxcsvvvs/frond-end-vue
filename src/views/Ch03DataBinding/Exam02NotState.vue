<template>
    <div class="card">
        <div class="card-header">Exam02NotState</div>
        <div class="card-body">
            <p>번호: {{ no }} </p>
            <p>이름: {{ name + "-" + company}} </p>
            <p>설명: {{ detail.info }} </p>
            <p>판매상태: {{ detail.sale ? "판매" : "품절" }} </p>
            <p>가격: {{ getPrice() }} </p>

            <button @click="changeData()" class="btn btn-danger btn-sm">일반 변수값 변경</button>
            

        </div>
    </div>
</template>

<script setup>

let no = 1;
let name = "미니백";
let company = "클레인";
let detail = {
    info: "시그너츠 Ceycle Lock 마그네틱 클로저가 특징입니다.",
    sale: false
};

let price = 300000;
function getPrice(){
    return price;
}

function changeData(){
    no = 2;
    name = "빨간 미니백";
    company = "구찌";
    price = 500000;
}

</script>

<style scoped>
</style>