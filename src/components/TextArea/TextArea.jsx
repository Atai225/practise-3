import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function TextArea({ control, name }) {
	return (
		<Controller
			name={name}
			control={control}
			rules={{
				required: "Field is required",
				maxLength: { value: 200, message: 'Max length is 200' },
			}}
			render={({ field, fieldState: { error } }) => (
				<>
					<TextField
					sx={{marginTop: "10px " , width: '90%'}}
						variant="standard"
						{...field}
						error={!!error}
						multiline rows={4} id="standard-basic" label="TextArea" />
						{error && <div style={{fontSize: '14px', color: 'red', margin: '0 0 5px 0', }}>{error?.message}</div>}
				</>
			)}
		/>
	);
}

export default TextArea;
