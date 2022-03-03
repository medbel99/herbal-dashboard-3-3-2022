import axios from "axios"


export const getAllStock = () => async dispatch => {
    try {
        const response = await axios.get("https://herbalbackend.herokuapp.com/api/products");
        console.log(response.data)
        dispatch({ type: "GET_ALL_PRODUCTS", payload: response.data })

        //         axios.defaults.headers.common["Authorization"]=`Bearer ${response.data.token}`

        //       // const tkonDecoder= window.atob(response.data.token);
        //     const datas = response.data.token.split(".");
        //    console.log(JSON.parse(window.atob(datas[1])))
        //    console.log(JSON.parse(window.atob(datas[0])))

    } 
    catch (e) {
        console.log(e, "INVALID")
    }
} 