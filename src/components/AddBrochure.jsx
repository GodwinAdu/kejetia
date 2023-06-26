import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import toast from 'react-hot-toast'
import { client } from '../libs/client';


// const books =[
//   "Awake",
//   "Bible Teach/Teach Us",
//   "Enjoy Life Forever",
//   "Lessons From the Bible",
//   "Secret of family happiness",
//   "Watchtower",
//   "Young People Ask Vol 1",
//   "Young People Ask Vol 2"
// ]


export default function AddBrochure() {

  const brochures = [
    {value: '', text: '--Choose an option--'},
    {value: 'Enjoy Life Forever', text: 'Enjoy Life Forever'},
    {value: 'Good News', text: 'Good News'},
    {value: 'Listen to God', text: 'Listen to God'},
    {value: 'My Bible Lessons', text: 'My Bible Lessons'},
    {value: 'Road to Everlasting Life', text: 'Road to Everlasting Life'},
    {value: 'Spirits of the Dead', text: 'Spirits of the Dead'},
    {value: 'Your Family Life Can Be Happy', text: 'Your Family Life Can Be Happy'},
    {value: '10 Question Young people Ask', text: '10 Question Young people Ask'},
  ];

  const languages =[
    {value: '', text: '--Choose language--'},
    {value: 'English', text: 'English'},
    {value: 'Twi', text: 'Twi'},
  ]

  const [open, setOpen] = useState(false);
  const [brochure, setBrochure] =useState(brochures[0].value);
  const [brochureQuantity, setBrochureQuantity] =useState(0);
  const [selectedDate, setSelectedDate] = useState(null)
  const [language, setLanguage] =useState(languages[0].value);

  const handleChange = (event) => {
    setBrochure(event.target.value);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  const handleBrochureQuantity = (event) => {
    setBrochureQuantity(event.target.value);
  };

  const handleBrochureDate = (date) => {
    setSelectedDate(date);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBrochureSubmit = async () =>{

    try{
      if(brochure === ""){
        toast.error("please choose Brochure type");
        return;
      }

      if(language === ""){
        toast.error("please select language type");
        return;
      }

      if(brochureQuantity < 1){
        toast.error("enter number of brochure type");
        return;
      }

      if(selectedDate === null){
        toast.error("Enter current date");
        return;
      }

      const load = toast.loading('please wait...')
      const brochureData = {
        _type: 'brochure',
      // Add your book data properties here
        title: brochure,
        language,
        quantity: +brochureQuantity,
        date: selectedDate.toISOString().slice(0, 10),
      };
      
      const response = await client.create(brochureData);

      toast.dismiss(load)
      setBrochure(brochures[0].value)
      setLanguage(languages[0].value)
      setBrochureQuantity(0)
      setSelectedDate(null)
      
      console.log(response);
      toast.success("Brochure added successfully")

    }catch(error){
      console.error(error)
    }
  }

  return (
    <div className='px-15 py-15'>
      <Button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow" variant="outlined" onClick={handleClickOpen}>
       Add Brochures
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Brochures</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
          <FormControl fullWidth sx={{ m: 1}} size="small">
              <InputLabel id="demo-select-book-label">Choose Brochures</InputLabel>
              <Select
                labelId="demo-select-book-label"
                value={brochure}
                label="Choose Brochures"
                onChange={handleChange}
               
              >
                {brochures.map(brochure =>(
                  <MenuItem key={brochure.value} value={brochure.value}>
                    {brochure.text}
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
              value={brochureQuantity}
              onChange={handleBrochureQuantity}
            />

            <LocalizationProvider  dateAdapter={AdapterDayjs}>
              <DemoContainer fullWidth sx={{ m: 1,pb:2}} size="small" components={['DatePicker']}>
                <DatePicker onChange={handleBrochureDate}   label="Add Date" value={selectedDate} />
              </DemoContainer>
            </LocalizationProvider>

            <Button onClick={handleBrochureSubmit} fullWidth  sx={{ m: 1,}} size="medium" variant="contained" color="success">Add Record</Button>
            
          </Box> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}