import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../store/todoSlice"
import { Delete, CheckCircle, Cancel } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  Typography
} from "@mui/material";

const ItemList = ({ list, completed }) => {
  const dispatch = useDispatch();

  const currentList = completed ? list.filter(t => t.completed === true) : list.filter(t => t.completed === false)
  let comment = (currentList.length === 0) ? "So when you are free, start another work to get tired!" : "";

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">{completed ? `Completed Todos` : `Todo List (${currentList.length})` }</Typography>
        <Typography>{comment}</Typography>
          <List>
            {currentList.map(t => (
              <ListItem
                divider
                key={t.id}
                style={{ textDecoration : completed ? 'line-through' : 'none' }} 
              >
                <ListItemText primary={t.title} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="complete"
                    color="primary"
                    style={{ margin: "0" }}
                    onClick={() => dispatch(completeTodo(t.id))}
                  >
                    {completed ? <Cancel /> : <CheckCircle />}
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => dispatch(deleteTodo(t.id))}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
      </Grid>
    </Grid>
  )
}

export default ItemList;
