export default async function() {
    const response = await fetch(`${process.env.VUE_APP_URL_MOCKY_COMPANIES}`)
    return await response.json()
}