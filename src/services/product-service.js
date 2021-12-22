import axios from 'axios';

class ProductHttpService {
    
    constructor(){
        this.url = "https://apiapptrainingnewapp.azurewebsites.net";
    }

    async getData() {
        let resp = await axios.get(`${this.url}/api/Products`);
        return resp;
    }

    async getDataById(id) {
        let resp = await axios.get(`${this.url}/api/Products/${id}`);
        return resp;
    }

    async postData(prd) {
        let resp = await axios.post(`${this.url}/api/Products`, prd, {
            'Content-Type': 'application/json'
        });
        return resp;
    }

    async putData(id,prd) {
        let resp = await axios.put(`${this.url}/api/Products/${id}`, prd, {
            'Content-Type': 'application/json'
        });
        return resp;
    }

    async deleteData(id) {
        let resp = await axios.delete(`${this.url}/api/Products/${id}`);
        return resp;
    }
}

export default ProductHttpService;