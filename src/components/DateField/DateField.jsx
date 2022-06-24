import React from "react";
import { Controller } from "react-hook-form";
import { TextField, Box } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'


function DateField({ control, name }) {
	return (
		<Controller
			name={name}
			control={control}
			rules={{
				required: "Field is required",
			}}
			render={({ field, fieldState: { error } }) => (
				<Box sx={{marginTop: "20px", width: '90%'}}>
					<LocalizationProvider dateAdapter={AdapterDateFns} >
						<DatePicker
							{...field}
							minDate={new Date("05-24-2022")}
							label="Date"
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
					{error && <div style={{ fontSize: '14px', color: 'red', margin: '0 0 5px 0', }}>{error?.message}</div>}
				</Box>
			)}
		/>
	);
}

export default DateField;
