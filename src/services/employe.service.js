import Employe from '../models/employe.model';

class EmployeService {
    async createEmploye( data) {
        console.log(data, "INI ADALAH DATA")
        return Employe.create(data);
    }
    async findAllEmployes() {
        return Employe.find();
    }

    async findEmploye(id) {
        return await Employe.findById(id);
    }

    async updateEmploye(id, data,) {
        let employe = await this.findEmploye(id);
            employe.fullname = data.fullname;
            employe.lastname = data.lastname;
            employe.address = data.address;
            employe.email = data.email;
            employe.age = data.age;
            employe.city = data.city;
            employe.updateAt = Date.now();
        return Employe.create(employe);
    }

    async deleteEmploye(id) {
        return await Employe.deleteOne(id);
    }



}

export default EmployeService;
