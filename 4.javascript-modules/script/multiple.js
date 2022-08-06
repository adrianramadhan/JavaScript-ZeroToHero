const company = "Adrian Ramadhan Com";

function sum(first, second) {
    return first + second;
}

class Company{
    companyProfile(name) {
        console.log(`Hello ${name}, kami dari ${this.company}`);
    }
}

Company.prototype.company = company;

export{company, sum, Company};