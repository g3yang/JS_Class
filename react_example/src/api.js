const API_ROOT = 'http://localhost:8000';
const StudentAPI = {
    all:function(){
        return fetch(`${API_ROOT}/students`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json",                
            }
        });
    }
};

export default StudentAPI;