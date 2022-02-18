<template>
    <div class="no-result">
        <img src="~@/assets/svg/search.svg" />
        Ничего не найдено
    </div>
</template>

<script>
export default {
    name: 'NoResult'
}
</script>

<style scoped lang="scss">
.no-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 18px;
    font-weight: 600;
    color: grey;
    @media (max-width: 662px){
        font-size: 16px;
    }

    img {
        margin: 40px 0;
        height: 200px;
        @media (max-width: 662px){
            height: 100px;
        }
    }
}
</style>
