import axios from 'axios'


// fetch items from api
export const getInventories = async () => {
    const response = await axios.get("http://localhost:3000/items")
    return response.data;
}

const AnalysisAPIService = { getInventories };
export default AnalysisAPIService;