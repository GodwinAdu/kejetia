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
import axios from 'axios'
import { client } from '../libs/client';
import toast from 'react-hot-toast'

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


export default function AddBook() {

  const books = [
    {value: '', text: '--Choose an option--'},
    {value: 'Bible Teach/Teach Us', text: 'Bible Teach/Teach Us'},
    {value: 'Enjoy Life Forever', text: 'Enjoy Life Forever'},
    {value: 'Lessons From the Bible', text: 'Lessons From the Bible'},
    {value: 'Secret of family happiness', text: 'Secret of family happiness'},
    {value: 'Young People Ask Vol 1', text: 'Young People Ask Vol 1'},
    {value: 'Young People Ask Vol 2', text: 'Young People Ask Vol 2'},
  ];

  const languages =[
    {value: '', text: '--Choose language--'},
    {value: 'English', text: 'English'},
    {value: 'Twi', text: 'Twi'},
  ]

  const [open, setOpen] = useState(false);
  const [book, setBook] = useState(books[0].value);
  const [bookQuantity, setBookQuantity] = useState(0)
  const [selectedDate, setSelectedDate] = useState(null)
  const [language, setLanguage] =useState(languages[0].value);

  const handleChange = (event) => {
    setBook(event.target.value);
  };

  const handleBookQuantity = (event) => {
    setBookQuantity(event.target.value);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  const handleBookDate = (date) => {
    setSelectedDate(date);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBookSubmit = async () =>{

    try{
      if(book === ""){
        toast.error("please choose a Book");
        return;
      }

      if(language === ""){
        toast.error("please select language type");
        return;
      }

      if(bookQuantity < 1){
        toast.error("enter number of book type");
        return;
      }

      if(selectedDate === null){
        toast.error("Enter current date");
        return;
      }

      const load = toast.loading('please wait...')
      const bookData = {
        _type: 'book',
      // Add your book data properties here
        title: book,
        language,
        quantity: +bookQuantity,
        date: selectedDate.toISOString().slice(0, 10),
      };
      
      const response = await client.create(bookData);
      toast.dismiss(load)
      setBook(books[0].value)
      setLanguage(languages[0].value)
      setBookQuantity(0)
      setSelectedDate(null)
      console.log(response);
      toast.success("Book added successfully")

    }catch(error){
      console.error(error)
    }
  }

  return (
    <div className='px-15 py-15'>
      <Button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow" variant="outlined" onClick={handleClickOpen}>
       Add Books
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Books</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
          <FormControl fullWidth sx={{ m: 1}} size="small" >
              <InputLabel id="demo-select-book-label">Choose Books</InputLabel>
              <Select
                labelId="demo-select-book-label"
                value={book}
                label="Choose Books"
                onChange={handleChange}
               
              >
                {books.map(book =>(
                  <MenuItem key={book.value} value={book.value}>
                    {book.text}
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
              value={bookQuantity}
              onChange={handleBookQuantity}
              
            />

            <LocalizationProvider  dateAdapter={AdapterDayjs}>
              <DemoContainer fullWidth sx={{ m: 1,pb:2}} size="small" components={['DatePicker']}>
                <DatePicker onChange={handleBookDate}  label="Add Date" value={selectedDate} />
              </DemoContainer>
            </LocalizationProvider>

            <Button onClick={handleBookSubmit} fullWidth  sx={{ m: 1,}} size="medium" variant="contained" color="success">Add Record</Button>
            
          </Box> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}