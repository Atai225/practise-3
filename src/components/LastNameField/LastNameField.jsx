import React from "react";
import { Controller } from "react-hook-form";
import { TextField} from "@mui/material";

function LastNameField ({ control, name}) {
	return (
		<Controller
			name={name}
			control={control}
			rules={{
				required: "Field is required",
				minLength: {
					value: 3,
					message: "Min length is 3",
				},
				pattern: {
					value: /^([^0-9]*)$/,
					message: "Field should not contain numbers",
				},
			}}
			render={({ field, fieldState: { error } }) => (
				<>
					<TextField
					sx={{marginTop: "10px", width: '90%'}}
						variant="standard"
						error={!!error}
						{...field}
						id="standard-basic"
						label='Last name'
						
					/>
					{error && <div style={{fontSize: '14px', color: 'red', margin: '0 0 5px 0', }}>{error?.message}</div>}
				</>
			)}
		/>
	);
}

export default LastNameField;
