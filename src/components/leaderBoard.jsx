import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import firebase from "firebase";
import 'firebase/database';
import {makeStyles, withStyles, Grid} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

var firebaseConfig = {
  apiKey: "AIzaSyBSsSzF7wlSF1ZGAjQ6rtBLkHSb2NIh1TE",
  authDomain: "basketballgame-ca3f1.firebaseapp.com",
  databaseURL: "https://basketballgame-ca3f1.firebaseio.com",
  projectId: "basketballgame-ca3f1",
  storageBucket: "basketballgame-ca3f1.appspot.com",
  messagingSenderId: "941712457648",
  appId: "1:941712457648:web:ea762eda76cf0758b86075",
  measurementId: "G-6EJJ863RLH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgb(255, 60, 27)",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    backgroundColor: "#480f02b5",
    color: "white"
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "#e857009e",
      color: "white"
    },
  },
}))(TableRow);





const useStyles = makeStyles((theme) => ({
    boardContainer: {
        border: "solid green 1px",
        width: "100%",
        
    },
    text: {
        border: "solid red 1px",
        color: "white",
    }
}))

export default function LeaderBoard() {
    const classes = useStyles();
    const [user, setUser] = useState([]);
    var db = firebase.firestore();
    let row = [];
   
     for(let i = 0; i < 21; i++ ){
       row.push(
        <StyledTableRow key={i}>
          <StyledTableCell align="left">Rank {i}</StyledTableCell>
          <StyledTableCell align="center">User {i}</StyledTableCell>
          <StyledTableCell align="center">Score {i}</StyledTableCell>
        </StyledTableRow>
      );
      }
    

   useEffect(() => {
     if(user.length < 1){
      db.collection("game").orderBy('score', 'desc').get()
      .then(function(querySnapshot) {
        var user = []; 
       
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          let obj = {username: doc.id, score: doc.data().score}
          user.push(obj);
          
      });
        setUser(user);
        
    });
  }
  })

  //   db.collection("game").doc("user1")
  // .get()
  // .then(function(doc) {
  //   if (doc.exists) {
  //     console.log("Document data:", doc.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     // console.log("No such document!");
  //   }
  // }).catch(function(error) {
  //   // console.log("Error getting document:", error);
  // });

  

  return (
      // <Grid container spacing={5}  className={classes.boardContainer}>
      //     <Grid item sm={3} xs={null} />
      //     <Grid item sm={3} xs={12} >
      //       {user.map((u,i) => (
      //       <Typography key={i}  variant="body1"  className={classes.text} >
      //          User Name: {u}
      //       </Typography>
      //       ))}
      //     </Grid>
      //     <Grid item sm={3} xs={12}>
      //     {score.map((s,i) => (
      //       <Typography key={i} variant="body1"  className={classes.text} >
      //          Last Best: {s}
      //       </Typography>
      //     ))}
      //     </Grid>
      //     <Grid item sm={3} xs={null} />
      // </Grid>
    <TableContainer component={Paper}>
      
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Rank</StyledTableCell>
            <StyledTableCell align="center">User Name</StyledTableCell>
            <StyledTableCell align="center">Score</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.length < 1 && (<StyledTableRow><StyledTableCell align="center" colSpan={3} >Loading</StyledTableCell></StyledTableRow>)}
          {user.map((u,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align="left" component="th" scope="row">
                {i+1 === 1 && (`1st`)}
                {i+1 === 2 && (`2nd`)}
                {i+1 === 3 && (`3rd`)}
                {i+1 > 3 && (`${i+1}th`)}
              </StyledTableCell>
              <StyledTableCell align="center" component="th" scope="row">
                {u.username}
              </StyledTableCell>
              <StyledTableCell align="center" component="th" scope="row">
                {u.score}
              </StyledTableCell>
            </StyledTableRow>
          ))}
          {row}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
