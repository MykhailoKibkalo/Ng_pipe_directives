export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    strett: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
}
