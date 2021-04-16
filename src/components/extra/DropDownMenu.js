import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { FaBrain, FaUserGraduate } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DropDownMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <button type="button" onClick={handleClick}>
          <h2>
            <FaUserGraduate size="2em" className="about__icon" />
          </h2>
          <h3>
            Recent graduate from George Washington University's Coding Boot
            Camp.
          </h3>
        </button>
        {open ? (
          <div className={classes.dropdown}>
            Click me, I will stay visible until you click outside.
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
