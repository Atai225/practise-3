import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function EmailField({ control,name }) {
	return (
		<Controller
			name={name}
			control={control}
			rules={{
				required: "Field is required",
				pattern: {
					value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
					message: 'Invalid email',
				}
			}}
			render={({ field, fieldState: { error } }) => (
				<>
					<TextField
					sx={{marginTop: "10px", width: '90%'}}

						error={!!error}
						{...field}
						type='email'
						variant="standard"
						id="standard-basic"
						label="Email" />
						{error && <div style={{fontSize: '14px', color: 'red', margin: '0 0 5px 0', }}>{error?.message}</div>}
				</>
			)}
		/>
	);
}

export default EmailField;
