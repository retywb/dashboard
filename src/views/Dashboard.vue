<template>
    <div class="dashboard">
        <Loader v-show="loading" />
        <div v-show="!errors.error_response && !loading" class="dashboard__filters">
            <div class="dashboard__field">
                <input 
                    v-model.trim="id"
                    type="number"
                    :placeholder="placeholderById" 
                    @focus="placeholderById = dashboard.placeholderByIdMax" 
                    @blur="placeholderById = dashboard.placeholderById" 
                    @input="filterCompany" 
                >
                <img 
                    src="~@/assets/svg/clear.svg"
                    :class="{'visibility': id}"
                    @click="clearSearch('id')"
                />
            </div>
            <div class="dashboard__field">
                <input
                    v-model.trim="name" 
                    type="text" 
                    :placeholder="dashboard.clientName"
                    @input="filterCompany"
                >
                <img
                    src="~@/assets/svg/clear.svg"
                    :class="{'visibility': name}"
                    @click="clearSearch('name')"
                />
            </div>
        </div>
        <div v-show="filteredCompanies.length" class="dashboard__content">
            <div class="dashboard__item"
                v-for="(company, index) in filteredCompanies"
                :key="index">
            <Card 
                :title="company.title"
                :cost="company.cost"
                :company-name="company.company_name"
                :company-inn="company.company_inn"
                :client-name="company.client_name"
                :tags="company.tags"
                :id="company.id"
                :date="company.date"
                />
            </div>
        </div>
        <NoResult v-show="noResult"/>
        <Error v-show="errors.error_response" :message="errors.error_response"/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Card from '@/components/Card'
import Loader from '@/components/common/Loader'

import dashboard from '@/constants/dashboard'

export default {
    name: 'Dashboard',
    components: {
        Card,
        Loader,
        Error: () => import ('@/components/common/Error'),
        NoResult: () => import('@/components/common/NoResult'),
    },
    data: () => ({
        id: '',
        name: '',
        placeholderById: dashboard.placeholderById,
        dashboard: {
            ...dashboard
        }
    }),
    computed: {
        ...mapGetters([
            'filteredCompanies',
            'loading',
            'errors'
        ]),
        noResult() {
            return !this.filteredCompanies.length && (this.name || this.id)
        }
    },
    created() {
        this.getCompanies()
    },
    methods: {
        ...mapActions([
            'getCompanies',
            'filterCompanies'
        ]),
        filterCompany(){
            this.filterCompanies({
                id: this.id, 
                name: this.name
            })
        },
        clearSearch(name) {
            if (name === 'id') {
                this.id = ''
            } else {
                this.name = ''
            }

            this.filterCompany()
        }
    }
}
</script>
<style scoped lang="scss">
.dashboard {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    padding: 8px;
    min-height: 100vh;
    
    // .dashboard__field

    &__field {
        position: relative;
        width: 280px;
        height: 40px;
        margin: 0 30px 16px 0px;
        img {
            position: absolute;
            top: 12px;
            right: -6px;
            width: 16px;
            height: 16px;
            cursor: pointer;
            visibility: hidden;
        }
        input {
            height: 100%;
            padding: 0 32px;
            font-size: 16px;
            border-radius: 16px;
            border: none;
            width: 230px;
            &:focus-visible {
                outline-color: rgba(172, 218, 255, 0.52);
            }
            &::placeholder {
                color: grey
            }
            @media (max-width: 662px) {
                margin-bottom: 16px;
            }
        }
        &::before {
            content: '';
            display: block;
            width: 16px;
            height: 16px;
            background: url('~@/assets/svg/search.svg') no-repeat center;
            background-size: contain;
            position: absolute;
            left: 8px;
            top: 12px;
        }
    }

    .visibility {
        visibility: visible;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0; 
    }

    // .dashboard__content

    &__content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        height: 100%;
        width: 100%;
    }

    // .dashboard__filters

    &__filters {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 8px;
        @media (max-width: 662px){
            flex-direction: column;
            align-items: center;
        }
    }

    // .dashboard__item

    &__item {
        margin: 8px;
    }
}
</style>
