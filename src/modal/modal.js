// export const SERVER_URL = 'http://localhost:300';
export const SERVER_URL = 'https://severkbashi.netlify.app/api';

export const addProduct = async function (product) {
    try {
        let productAdded = {};
        await fetch(`${SERVER_URL}/admin/addProduct`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // mode: "no-cors",
            body: JSON.stringify(product),
        }).then(res => res.json())
            .then(data => productAdded = data);
        return productAdded;
    } catch (err) {
        throw err;
    }
}

export const addProductPhoto = async function (productID, dataForm) {
    try {
        await fetch(`${SERVER_URL}/admin/addImg/${productID}`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // mode: "no-cors",
            body: dataForm,
        });
    } catch (err) {
        throw err;
    }

}

export const getProduct = async function (proID) {
    try {
        const product = await fetch(
            `${SERVER_URL}/product/getproduct/${proID}`,
            {
                // credentials: "include",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => data);
        return product;
    } catch (err) {
        throw err;
    }
}
export const getProducts = async function () {
    try {
        const products = await fetch(
            `${SERVER_URL}/product/getproducts`,
            {
                credentials: "include",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => data);
        return products;
    } catch (err) {
        throw err;
    }
}

export const addCustomer = async function (customer) {
    try {
        await fetch(`${SERVER_URL}/customer/addCustomer`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // mode: "no-cors",
            body: JSON.stringify(customer),
        });
    } catch (err) {
        throw err;
    }
}

export const login = async function (loginInfo) {
    try {
        let user =
            await fetch(`${SERVER_URL}/login`, {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // mode: "no-cors",
                body: JSON.stringify(loginInfo),
            }).then((res) => res.json())
                .then((data) => data);
        return user;
    } catch (err) {
        throw err;
    }
}
export const addPill = async function (pill) {
    try {
        const pillAdded =
            await fetch(`${SERVER_URL}/customer/addPill`, {
                // credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // mode: "no-cors",
                body: JSON.stringify(pill),
            }).then(res => res.json())
                .then(data => data);
        return pillAdded;
    } catch (err) {
        throw err;
    }
}
export const getPills = async function (id) {
    try {
        const pills = await fetch(
            `${SERVER_URL}/customer/getPills`,
            {
                // credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ _id: id })
            }
        )
            .then((res) => res.json())
            .then((data) => data);
        return pills;
    } catch (err) {
        throw err;
    }
}