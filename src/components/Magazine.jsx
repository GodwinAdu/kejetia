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




export default function Magazine() {
  
  const magazines = [
    {value: '', text: '--Choose an option--'},
    {value: 'Awake', text: 'Awake'},
    {value: 'Watch Tower', text: 'Watch Tower'},
    
  ];

  const languages =[
    {value: '', text: '--Choose language--'},
    {value: 'English', text: 'English'},
    {value: 'Twi', text: 'Twi'},
  ]

  const [open, setOpen] = useState(false);
  const [magazine, setMagazine] = useState(magazines[0].value);
  const [magazineQuantity, setMagazineQuantity] = useState(0)
  const [selectedDate, setSelectedDate] = useState(null)
  const [language, setLanguage] =useState(languages[0].value);

  const handleChange = (event) => {
    setMagazine(event.target.value);
  };

  const handleMagazineQuantity = (event) => {
    setMagazineQuantity(event.target.value);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  const handleMagazineDate = (date) => {
    setSelectedDate(date);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMagazineSubmit = async () =>{

    try{
      if(magazine === ""){
        toast.error("please choose a Magazine");
        return;
      }

      if(language === ""){
        toast.error("please select language type");
        return;
      }

      if(magazineQuantity < 1){
        toast.error("enter number of magazine type");
        return;
      }

      if(selectedDate === null){
        toast.error("Enter current date");
        return;
      }

      const load = toast.loading('please wait...')
      const magazineData = {
        _type: 'magazine',
      // Add your magazine data properties here
        title: magazine,
        language,
        quantity: +magazineQuantity,
        date: selectedDate.toISOString().slice(0, 10),
      };
      
      const response = await client.create(magazineData);
      toast.dismiss(load)
      setMagazine(magazines[0].value)
      setLanguage(languages[0].value)
      setMagazineQuantity(0)
      setSelectedDate(null)
      console.log(response);

      toast.success("Magazine added successfully")
    }catch(error){
      console.error(error)
    }
  }

  return (
    <div className='px-15 py-15'>
      <Button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow" variant="outlined" onClick={handleClickOpen}>
       Add Magazine
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Magazine</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >

          <FormControl fullWidth sx={{ m: 1}} size="small" >
              <InputLabel id="demo-select-magazine-label">Choose Magazine</InputLabel>
              <Select
                labelId="demo-select-magazine-label"
                value={magazine}
                label="Choose Magazine"
                onChange={handleChange}
               
              >
                {magazines.map(magazine =>(
                  <MenuItem key={magazine.value} value={magazine.value}>
                    {magazine.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>


            <FormControl fullWidth sx={{ m: 1}} size="small">
              <InputLabel id="demo-select-small-label">Choose Language</InputLabel>
              <Select
                labelId="demo-select-small-label"
                value={language}
                label="Choose Language"
                onChange={handleChangeLanguage}
               
              >
                {languages.map(language =>(
                  <MenuItem key={language.value} value={language.value}>
                    {language.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField 
              label="Add Quantity" 
              fullWidth sx={{ m: 1}} 
              size="small" 
              inputProps={{ type: 'number'}} 
              value={magazineQuantity}
              onChange={handleMagazineQuantity}
              
            />

            <LocalizationProvider  dateAdapter={AdapterDayjs}>
              <DemoContainer fullWidth sx={{ m: 1,pb:2}} size="small" components={['DatePicker']}>
                <DatePicker onChange={handleMagazineDate}  label="Add Date" value={selectedDate} />
              </DemoContainer>
            </LocalizationProvider>

            <Button onClick={handleMagazineSubmit} fullWidth  sx={{ m: 1,}} size="medium" variant="contained" color="success">Add Record</Button>
            
          </Box> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}