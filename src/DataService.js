import axios from 'axios';

export default class DataService {

    URL="http://127.0.0.1:8081";

    getAllData=() => {
        return axios.get(this.URL+"/data");
    }

    modifyData=(data) => {
        return axios.post(this.URL+"/data", data);
    }

    deleteData=(data) => {
        return axios.delete(this.URL+"/data/"+data);
    }

    addData = (data) => {
        return axios.put(this.URL+"/data", data);
    }

}