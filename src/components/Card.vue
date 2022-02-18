<template>
    <div class="card" @click.stop.prevent="showAdditionalInfo = !showAdditionalInfo">
        <div class="card__title">
            {{ title }}
            <input v-show="showAdditionalInfo" class="card__checkbox" type="checkbox"  @click.stop>
        </div>
        <div class="card__cost">{{ cost | humanInt }} руб.</div>
        <div class="card__company">
            <div class="card__company-name">ООО «{{ companyName }}»</div>
            <div class="card__company-inn">ИНН {{ companyInn }}</div>
        </div>
        <div v-show="showAdditionalInfo" class="card__additional-info">
            <div class="card__tags">
                <div class="card__tag"
                    v-for="(tag, index) in tags"
                    :key="index">
                    {{ tag }}
                </div>
            </div>
            <div class="card__owner-info">{{ clientName }}</div>
            <div class="card__tags">
                <div class="card__tag"
                    v-for="(tag, index) in tags"
                    :key="index">
                    {{ tag }} -- test
                </div>
            </div>
        </div>
        <div class="card__order-info">
            <span>{{ id }}</span>
            <span>от {{ date }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: {
            type: String,
            required: true
        },
        cost: {
            type: Number,
            required: true
        },
        companyName: {
            type: String,
            required: true
        },
        companyInn: {
            type: Number,
            required: true
        },
        clientName: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    },
    data: () => ({
        showAdditionalInfo: false
    }),
    mounted() {
        document.addEventListener('click', this.clickBodyListener)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.clickBodyListener)
    },
    methods: {
        clickBodyListener() {
            this.showAdditionalInfo = false
        }
    }
}
</script>
<style scoped lang="scss">
.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 260px;
    border-radius: 16px;
    background-color: rgb(255, 255, 255);
    padding: 16px 16px 8px;

    &:hover {
        cursor: pointer;
        box-shadow: 1px 1px 8px 7px rgba(34, 60, 80, 0.08);
    }

    & > * {
        margin-bottom: 8px;
    }

    &__title {
        display: flex;
        font-size: 20px;
        font-weight: 900;
    }
    

    &__cost, &__company, &__owner-info {
        font-size: 18px;
    }

    &__company-inn, &__order-info {
        font-size: 16px;
        color: grey
    }

    &__order-info {
        margin-top: 8px;

        span:first-child {
            margin-right: 24px;
        }
    }

    &__tags {
        display: flex;
        flex-wrap: wrap;
    }

    &__tag {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        min-width: 48px;
        padding: 4px 8px;
        margin: 0 4px 4px 0;
        border-radius: 24px;
        background-color: rgba(172, 218, 255, 0.52);
    }

    &__owner-info {
        display: flex;
        align-items: center;
        height: 60px;
        width: calc(100% + 16px);
        margin: 16px 0 16px -16px;
        padding-left: 16px;
        background-color: rgb(172, 217, 255);
    }
}
</style>
