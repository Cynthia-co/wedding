// import React from 'react';
// import { useForm, Controller } from "react-hook-form";
// import { Checkbox } from "@mui/material";
// import Select from "react-select";
// const Form = () => {

// const { register, control, handleSubmit } = useForm({
//     defaultValues:{
//         checkbox: true,
//     }
// });
//   const onSubmit = data => console.log(data);
   
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>Prénom : </label>
//       <input {...register("firstName", { required: true, maxLength: 20 })} />
//       <label>Nom : </label>
//       <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
//       <label>E-mail : </label>
//       <input {...register("email", { pattern: /^[A-Za-z]+$/i })} />
//       <input onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//         name="checkbox"
//         control={control}
//         rules={{ required: true }}
//         render={({ field }) => <Checkbox {...field} />}
//       />
//       </input>
//       <input type="number" {...register("number", { min: 0, max: 10 })} />
//       <input type="submit" />
//     </form>
//   );
//   }
// export default Form;