const student = {
    name: 'Goytom',
    age: 24,
    address:{
        street: '405 Carmen ave',
        city: 'Ottawa',
        province: 'ON',
        country: 'Canada',
        zipcode: 'k1l6y1',

    },
    great: function(){
        console.log(`Hi, ${this.name}.`);
    },
    changeAddress: function(){
        this.address.street = '35 waller street';
        this.address.city = 'ottawa';
        this.address.province = 'ON';
        this.address.country = 'Canada';
        this.address.zipcode = 'k1n7g4';


    }


}

student.great();
