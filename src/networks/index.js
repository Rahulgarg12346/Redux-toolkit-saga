import axios from 'axios'

export const loginapi = async (userdata) =>{
    try{
        const response = await axios.post(
            "http://schoolmanagementsystem.frontedgeenterprises.com/api/signin",userdata
        );
        console.log(response.data.message)
        return response.data
    }catch(error){
        console.log(error)
    }
}
