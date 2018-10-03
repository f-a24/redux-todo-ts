import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import * as CSSTransitionGroup from 'react-transition-group/TransitionGroup';
import './TodoApp.css';

interface IProps {
  task: string;
  tasks: string[];
  inputTask: (v: string) => void;
  addTask:  (v: string) => void;
  redirectToError: () => void;
}

/* Component */
export default class TodoApp extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
  }
  public render() {
    return (
      <div>
      <CssBaseline />
      <AppBar position="static">
      <Toolbar>
      <Typography variant="title" color="inherit">Todo</Typography>
      </Toolbar>
      </AppBar>
      <Input onChange={this.inputHandler} />
      <Button variant="raised" color="primary" onClick={this.addHandler}>add</Button>
      <List>
      <CSSTransitionGroup transitionName="example" transitionEnterTimeout={300}>
      {
        this.props.tasks.map((item, i) =>
          <ListItem key={i}>
          <ListItemText primary={`・${item}`} />
          </ListItem>)
      }
      </CSSTransitionGroup>
      </List>
      <button onClick={this.errorHandler}>Error</button>
      </div>
      );
  }
  private inputHandler (e: any): void {
    this.props.inputTask(e.target.value);
  }
  private addHandler(): void {
    this.props.addTask(this.props.task);
  }
  private errorHandler(): void {
    this.props.redirectToError();
  }
}
