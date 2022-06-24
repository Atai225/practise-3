import React from "react";
import { Controller } from "react-hook-form";
import { TextField} from "@mui/material";

function Text ({ control, name}) {
	return (
		<Controller
			name={name}
			control={control}
			rules={{
				required: "Field is required",
			}}
			render={({ field, fieldState: { error } }) => (
				<>
					<TextField
					
						sx={{marginTop: "10px", width: '90%'}}
						variant="standard"
						error={!!error}
						{...field}
						id="standard-basic"
						label='Text'
						/>
						{error && <div style={{fontSize: '14px', color: 'red', margin: '0px 0px 5px 0px', }}>{error?.message}</div>}

				</>
			)}
		/>
	);
}

export default Text;
