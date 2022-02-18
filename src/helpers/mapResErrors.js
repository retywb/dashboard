export default (err) => {
    const errorsArr = err
    const errors = {}
    errorsArr.forEach(({ field, message }) => {
        errors[field] = message
    })
    return errors
}
