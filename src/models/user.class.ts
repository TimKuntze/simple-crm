export class User {
    firstName: string;
    lastName: string;
    email: string; 
    birthDate: number;
    street: string;
    postCode: number;
    city: string;

    constructor(obj?: any) {

        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.postCode = obj ? obj.postCode : '';
        this.city = obj ? obj.city : '';

    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email, 
            birthDate: this.birthDate,
            street: this.street,
            postCode: this.postCode,
            city: this.city
        }
    }
}