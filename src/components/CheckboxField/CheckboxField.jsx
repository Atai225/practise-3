import React from 'react'
import { Controller } from 'react-hook-form'
import {FormControlLabel,Checkbox,FormGroup } from '@mui/material'

function CheckboxField({ control }) {
	return (
		<Controller
			name="checkbox"
			control={control}
			rules={{
				required: 'Field is required'
			}}
			render={({ field, fieldState: { error } }) => <>
					
				<FormGroup error={!!error} {...field} sx={{marginTop: "1rem",width: '90%'}}>
					<FormControlLabel control={<Checkbox  defaultValue='false'/>} label="Do you agree with terms?" />
				</FormGroup>
				{error && <div style={{fontSize: '14px', color: 'red', margin: '0 0 5px 0', }}>{error?.message}</div>}
			</>
			}
		/>
	)
}

export default CheckboxField