export default function(list, id, name) {
    if (!id && !name) {
        return list
    }
    if (id && !name) {
        return list.filter(el => String(el.id).includes(id))
    }

    if (name && !id) {
        return list.filter(el => String(el.company_name.toLowerCase()).includes(name.toLowerCase()))
    }

    return list
            .filter(el => String(el.id).includes(id))
            .filter(el => String(el.company_name.toLowerCase()).includes(name.toLowerCase()))
}
