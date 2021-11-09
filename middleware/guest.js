export default async ({ store, redirect }) => {
    try {
        await store.dispatch('authen/getMe')
        redirect('/view')
    } catch (err) {
        console.log('err', err.message);
        console.log('err', err?.response?.status);
        console.log('err', err?.response?.data?.message);
    }
}