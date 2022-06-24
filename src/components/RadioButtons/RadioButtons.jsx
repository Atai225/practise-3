
import React from 'react'
import { Controller } from 'react-hook-form'
import { RadioGroup, FormControlLabel, Radio, FormLabel, Box } from '@mui/material'

function RadioButtons({ control }) {
	return (
		<Controller
			name="radio"
			control={control}
			rules={{
				required: 'Choose an option!!!'
			}}
			render={({ field, fieldState: { error } }) => <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '90%'}}>
				<FormLabel sx={{marginTop: "10px ", }} id="demo-row-radio-buttons-group-label">Gender</FormLabel>
					<RadioGroup sx={{marginTop: "10px ", }} {...field}  row variant="standard">
						<FormControlLabel value="female" control={<Radio />} label="Female" />
						<FormControlLabel value="male" control={<Radio />} label="Male" />
						<FormControlLabel value="other" control={<Radio />} label="Other" />
					</RadioGroup>
				{error && <div style={{fontSize: '14px', color: 'red', margin: '0 0 5px 0', }}>{error?.message}</div>}
			</Box>
			}
		/>
	)
}

export default RadioButtons