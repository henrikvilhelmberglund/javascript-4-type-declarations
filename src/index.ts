import axios from "axios";
import _ from "lodash"

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const url = "https://jsonplaceholder.typicode.com/users";

axios
  .get<User[]>(url)
  .then((response) => response.data.forEach(printBaseUserInfo))
  .catch((error) => console.log(error));

function printBaseUserInfo(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
  console.log(user.address.street);
  console.log(user.address.city);
  console.log(user.address.zipcode);
  console.log("");
  console.log("----------------------");
  console.log("");
}
