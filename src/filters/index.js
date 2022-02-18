import Vue from 'vue'

function humanInt(value) {
    if (isNaN(value) || value <= 0) return '0'
    else {
        value = value.toFixed(0).split('').reverse().reduce((accumulator, current, index) => {
            if (current !== ' ') {
            if (index !== 0 && index % 3 === 0) accumulator.push(' ')
            accumulator.push(current)
        }

        return accumulator
        }, []).reverse().join('')
    }

    return value
}


export default function registerFilters () {
    Vue.filter('humanInt', humanInt)
}