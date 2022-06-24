import React from 'react'
import { Controller } from 'react-hook-form'
import {MenuItem, Select, InputLabel, Box} from '@mui/material'

function Selector({ control, name }) {
	return (
		<Controller
			name={name}
			control={control}
			rules={{
				required: 'Choose an option!!!'
			}}
			render={({ field, fieldState: { error } }) => <>
				<InputLabel sx={{marginTop: "10px ", width: '90%'}} id="demo-simple-select-label">Select Label</InputLabel>
				<Select sx={{marginTop: "15px ",  width: '90%'}} {...field} error={!!error} variant="standard" label="Select">
					<MenuItem value={'Item1'}>Item 1</MenuItem>
					<MenuItem value={'Item2'}>Item 2</MenuItem>
					<MenuItem value={'item3'}>Item 3</MenuItem>
				</Select>
				{error && <div style={{fontSize: '14px', color: 'red', margin: '0 0 5px 0', }}>{error?.message}</div>}
			</>
			}
		/>
	)
}

export default Selector