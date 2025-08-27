// export default function uploadFile(files, user) {
//   const formData = new FormData();

//   files.map((file, index) => {
//     formData.append(`file${index}`, file);
//   });

//   formData.append('user', user);

//   fetch('https://path/to/api', {
//     // content-type header should not be specified!
//     method: 'POST',
//     body: formData,
//   })
//     .then((response) => response.json())
//     .then((success) => {
//       // Do something with the successful response
//     })
//     .catch((error) => console.log(error));
// }
