import { KEY_GOOGLE_MAPS } from './constant';

export const googleMapsClient = require('@google/maps').createClient({
        key: KEY_GOOGLE_MAPS
      });
  
  
  
  
  // getPlacebyId = async(id) => {
	// 	const query = await fetch (`https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=AIzaSyAywy0bnd4SnrC87Yx01_wD5yOBbOqoZPU`)
  //       .then(res => res.json())
  //         .then(res => res)
  //       console.log(query)
  //     return query
		

	// }
	
	