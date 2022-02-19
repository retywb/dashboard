<template>
    <div class="error">
        <div class="error__title">Ошибка</div>
        <div class="error__message">{{ message }}</div>
    </div>
</template>

<script>
export default {
    name: 'Error',
    props: {
        message: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped lang="scss">
.error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    // .error__title

    &__title {
        font-size: 48px;
        font-weight: 900;
        color: rgb(255, 166, 166);
    }

    // .error__message

    &__message {
        margin-top: 24px;
        font-size: 16px;
        @media (max-width: 662px){
            font-size: 14px;
        }
    }
}
</style>
