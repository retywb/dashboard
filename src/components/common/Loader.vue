<template>
    <div class="loader">
        <img src="@/assets/img/loader.png" alt="Загрузка...">
    </div>
</template>

<script>
export default {
    name: 'Loader'
}
</script>

<style scoped lang="scss">
.loader {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    img {
        animation: spin 2s linear 0s infinite;
        height: 64px;
    }
    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    }
}
</style>
