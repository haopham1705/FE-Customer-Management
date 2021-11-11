import axiosClient from './axiosClient'

const productApi = {
    async getAll(params) {
        const url = '/customers'
        const productList = await axiosClient.get(url, params)

        return productList;
    },

    get(id) {
        const url = `/customers/${id}`

        return axiosClient.get(url)
    },

    add(data) {
        const url = '/customers'

        return axiosClient.post(url, data)
    },

    update(data) {
        const url = `/customers/${data.id}`

        return axiosClient.patch(url, data)
    },

    remove(id) {
        const url = `/customers/${id}`

        return axiosClient.delete(url)
    }
}

export default productApi;
