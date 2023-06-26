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
import {EnjoyLifeMonthTwi,EnjoyLifeMonthEnglish,BibleLessonMonthEnglish,BibleLessonMonthTwi,SecretHappinessMonthEnglish,LessonBibleMonthTwi,SecretHappinessMonthTwi, RoadEverlastingMonthEnglish, RoadEverlastingMonthTwi, FamilyLifeMonthTwi, FamilyLifeMonthEnglish, ListenGodMonthTwi, ListenGodMonthEnglish, QuestionYoungMonthTwi, GoodNewsMonthTwi, GoodNewsMonthEnglish, SpiritDeadMonthTwi, SpiritDeadMonthEnglish, BibleTeachMonthTwi, BibleTeachMonthEnglish, YoungPeopleOneMonthEnglish, YoungPeopleTwoMonthTwi, YoungPeopleTwoMonthEnglish, LessonBibleMonthEnglish, AwakeMonthTwi, AwakeMonthEnglish, WatchtowerMonthTwi, WatchtowerMonthEnglish, DirectedMonth, BibleStudyMonth, ReturnVisitMonth,YoungPeopleOneMonthTwi,QuestionYoungMonthEnglish,VideosMonth,EnjoyLifeBroMonthTwi, EnjoyLifeBroMonthEnglish} from '../monthly';

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
  createData('Enjoy Life Forever - brochure',<EnjoyLifeBroMonthTwi />,<EnjoyLifeBroMonthEnglish /> ),
  createData('My Bible Lessons', <BibleLessonMonthTwi />, <BibleLessonMonthEnglish />),
  createData('Road to Everlasting Life', <RoadEverlastingMonthTwi />, <RoadEverlastingMonthEnglish />),
  createData('Your Family Life Can be Happy', <FamilyLifeMonthTwi />, <FamilyLifeMonthEnglish />),
  createData('Listen to God', <ListenGodMonthTwi />, <ListenGodMonthEnglish />),
  createData('10 Question Young People Ask', <QuestionYoungMonthTwi />, <QuestionYoungMonthEnglish />),
  createData('Good News', <GoodNewsMonthTwi />, <GoodNewsMonthEnglish />),
  createData('Spirit of the Dead', <SpiritDeadMonthTwi />, <SpiritDeadMonthEnglish />),
  createData('BOOKS'),
  createData('Bible Teach/ Teach Us', <BibleTeachMonthTwi />, <BibleTeachMonthEnglish />),
  createData('Young People Ask Vol 1', <YoungPeopleOneMonthTwi />, <YoungPeopleOneMonthEnglish />),
  createData('Young People Ask Vol 2', <YoungPeopleTwoMonthTwi />, <YoungPeopleTwoMonthEnglish />),
  createData('Lessons From the Bible', <LessonBibleMonthTwi />, <LessonBibleMonthEnglish />),
  createData('Enjoy Life Forever', <EnjoyLifeMonthTwi />, <EnjoyLifeMonthEnglish />),
  createData('Secret of Family Happiness', <SecretHappinessMonthTwi />, <SecretHappinessMonthEnglish />),
  createData('MAGAZINES'),
  createData('Awake', <AwakeMonthTwi />, <AwakeMonthEnglish />),
  createData('Watchtower', <WatchtowerMonthTwi />, <WatchtowerMonthEnglish />),
  createData('OTHERS'),
  createData('Videos', <VideosMonth /> ),
  createData('Directed to Jw.org', <DirectedMonth />),
  createData('Bible Studies', <BibleStudyMonth />),
  createData('Return Visits', <ReturnVisitMonth />),
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
            `</TableRow>
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
