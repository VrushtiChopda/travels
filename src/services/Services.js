import axios from "axios";

export const addPackage = async (data) => {
    return await axios.post('http://localhost:2000/api/package/addPackage', data);
}

export const handleUpdatePackage = async (packid, formdata) => {

    return await axios.put(`http://localhost:2000/api/package/updatePackage/${packid}`,
        formdata
    )

}       