import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHead } from '@mui/material';
import {EnjoyLifeTwi,EnjoyLifeEnglish,BibleLessonEnglish,BibleLessonTwi,SecretHappinessEnglish,LessonBibleTwi,SecretHappinessTwi, RoadEverlastingEnglish, RoadEverlastingTwi, FamilyLifeTwi, FamilyLifeEnglish, ListenGodTwi, ListenGodEnglish, QuestionYoungTwi, GoodNewsTwi, GoodNewsEnglish, SpiritDeadTwi, SpiritDeadEnglish, BibleTeachTwi, BibleTeachEnglish, YoungPeopleOneEnglish, YoungPeopleTwoTwi, YoungPeopleTwoEnglish, LessonBibleEnglish, AwakeTwi, AwakeEnglish, WatchtowerTwi, WatchtowerEnglish, Directed, BibleStudy, ReturnVisit,YoungPeopleOneTwi,QuestionYoungEnglish,Videos,EnjoyLifeBroTwi, EnjoyLifeBroEnglish} from '../yearly';

function TablePaginationActions(props) {
  
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
}
    

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, twi,english) {
  return { name, twi,english };
}

  
const rows = [
  createData('BROCHURES'),
  createData('Enjoy Life Forever - brochure',<EnjoyLifeBroTwi />,<EnjoyLifeBroEnglish /> ),
  createData('My Bible Lessons', <BibleLessonTwi />, <BibleLessonEnglish />),
  createData('Road to Everlasting Life', <RoadEverlastingTwi />, <RoadEverlastingEnglish />),
  createData('Your Family Life Can be Happy', <FamilyLifeTwi />, <FamilyLifeEnglish />),
  createData('Listen to God', <ListenGodTwi />, <ListenGodEnglish />),
  createData('10 Question Young People Ask', <QuestionYoungTwi />, <QuestionYoungEnglish />),
  createData('Good News', <GoodNewsTwi />, <GoodNewsEnglish />),
  createData('Spirit of the Dead', <SpiritDeadTwi />, <SpiritDeadEnglish />),
  createData('BOOKS'),
  createData('Bible Teach/ Teach Us', <BibleTeachTwi />, <BibleTeachEnglish />),
  createData('Young People Ask Vol 1', <YoungPeopleOneTwi />, <YoungPeopleOneEnglish />),
  createData('Young People Ask Vol 2', <YoungPeopleTwoTwi />, <YoungPeopleTwoEnglish />),
  createData('Lessons From the Bible', <LessonBibleTwi />, <LessonBibleEnglish />),
  createData('Enjoy Life Forever', <EnjoyLifeTwi />, <EnjoyLifeEnglish />),
  createData('Secret of Family Happiness', <SecretHappinessTwi />, <SecretHappinessEnglish />),
  createData('MAGAZINES'),
  createData('Awake', <AwakeTwi />, <AwakeEnglish />),
  createData('Watchtower', <WatchtowerTwi />, <WatchtowerEnglish />),
  createData('OTHERS'),
  createData('Videos', <Videos /> ),
  createData('Directed to Jw.org', <Directed />),
  createData('Bible Studies', <BibleStudy />),
  createData('Return Visits', <ReturnVisit />),
]



export default function CustomPaginationActionsTable() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  if(rows.name ==="BOOKS") {
    `text-3xl`
  }

  return (
    <TableContainer component={Paper}>
      <Table className="" aria-label="custom pagination table">
        <TableHead >
          <TableRow >
            <TableCell sx={{color:'rgb(2,0,36);',fontWeight:"bold"}}>All Components</TableCell>
            <TableCell sx={{color:'rgb(2,0,36);',fontWeight:"bold"}} align="right">Twi</TableCell>
            <TableCell sx={{color:'rgb(2,0,36);',fontWeight:"bold"}} align="right">English</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <div>{row.twi}</div>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <div>{row.english}</div>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
