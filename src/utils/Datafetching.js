import axios from "axios";

const Datafetching = async (page) => {
    try {
        const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
            limit: 10,
            offset: page
        }, {
            headers: {
                "Content-Type": "application/json"
            }});
        if (response && response.data) {
            var data= response.data.jdList;
            console.log(data);
           return data;
        }
    } catch (error) {
        return error;
    }
}

export default Datafetching;
