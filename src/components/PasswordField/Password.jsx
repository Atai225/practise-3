import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function PasswordField({ control, name }) {
	return (
		<Controller
			name={name}
			control={control}
			rules={{
				required: "Field is required",
				pattern: {
					value: /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*([^\w\s]|[_]))\S{8,30}$/,
					message: 'Invalid password',
				},
				minLength: { value: 6, message: 'Password must be at least 6 characters' }
			}}
			render={({ field, fieldState: { error } }) => (
				<>
					<TextField sx={{marginTop: "10px", width: '90%'}}
						variant="standard"
						{...field}
						id="demo-helper-text-misaligned-no-helper"
						label="Password"
						error={!!error}/>
						{error && <div style={{fontSize: '14px', color: 'red', margin: '0 0 5px 0', }}>{error?.message}</div>}

				</>
			)}
		/>
	);
}

export default PasswordField;
