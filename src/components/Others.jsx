import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';



import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { client } from '../libs/client';
import toast from 'react-hot-toast'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';




export default function Others() {
 
  const others =[
    {value: '', text: '--Choose a value--'},
    {value: 'Bible Studies', text: 'Bible Stuties'},
    {value: 'Directed to Jw.org', text: 'Directed to Jw.org'},
    {value: 'Return Visit', text: 'Return Visit'},
    {value: 'Videos', text: 'Videos'},
  ]

  const [open, setOpen] = useState(false);
  const [other, setOther] = useState(others[0].value);
  const [otherQuantity, setOtherQuantity] = useState(0)
  const [selectedDate, setSelectedDate] = useState(null)

  const handleChange = (event) => {
    setOther(event.target.value);
  };

  const handleOtherQuantity = (event) => {
    setOtherQuantity(event.target.value);
  };


  const handleOtherDate = (date) => {
    setSelectedDate(date);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOtherSubmit = async () =>{

    try{
      if(other === ""){
        toast.error("please choose a component");
        return;
      }

      if(otherQuantity < 1){
        toast.error("enter number of other type");
        return;
      }

      if(selectedDate === null){
        toast.error("Enter current date");
        return;
      }

      const load = toast.loading('please wait...')
      const otherData = {
        _type: 'others',
      // Add your other data properties here
        title: other,
        quantity: +otherQuantity,
        date: selectedDate.toISOString().slice(0, 10),
      };
      
      const response = await client.create(otherData);
      toast.dismiss(load)
      setOther(others[0].value)
      setOtherQuantity(0)
      setSelectedDate(null)
      console.log(response);
      toast.success("component added successfully")

    }catch(error){
      console.error(error)
    }
  }


  return (
    <div className='px-15 py-15'>
      <Button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow" variant="outlined" onClick={handleClickOpen}>
       Add Others
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Others</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >

            <FormControl fullWidth sx={{ m: 1}} size="small" >
              <InputLabel id="demo-select-other-label">Choose a Component</InputLabel>
              <Select
                labelId="demo-select-other-label"
                value={other}
                label="Choose Books"
                onChange={handleChange}
               
              >
                {others.map(other =>(
                  <MenuItem key={other.value} value={other.value}>
                    {other.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>



            <TextField 
              label="Add Quantity" 
              fullWidth sx={{ m: 1}} 
              size="small" 
              inputProps={{ type: 'number'}} 
              value={otherQuantity}
              onChange={handleOtherQuantity}
              
            />

            <LocalizationProvider  dateAdapter={AdapterDayjs}>
              <DemoContainer fullWidth sx={{ m: 1,pb:2}} size="small" components={['DatePicker']}>
                <DatePicker onChange={handleOtherDate}  label="Add Date" value={selectedDate} />
              </DemoContainer>
            </LocalizationProvider>


            <Button onClick={handleOtherSubmit} fullWidth  sx={{ m: 1,}} size="medium" variant="contained" color="success">Add Record</Button>
            
          </Box> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}