import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function ShareWithFriends({ toSort, filter }) {
  let link =`http://localhost:8081/?filter=${filter}&sort=${toSort ? "true" : "false"}`
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Поделиться с друзьями</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Просто скопируйте ссылку, и отправьте друзьям:<br/>
            {link}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}