export default async ({ store, redirect }) => {
    try {
        await store.dispatch('authen/getMe')
        console.log(store.state.authen.user);
        if (store.state.authen.user.role === 'admin') {
            redirect('/admin/students')
        } else {
            redirect('/view')
        }
    } catch (err) {
        console.log('err', err.message);
        console.log('err', err?.response?.status);
        console.log('err', err?.response?.data?.message);
    }
}