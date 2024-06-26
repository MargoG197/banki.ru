import * as React from 'react';
/////// импортируем компоненты  material ui
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SortSwitch({sort, onChange}) {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });
  
////// редактируем оригинальный handleChange и добавляем туда свое изменение своего состояния  onChange(event.target.checked)
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    onChange(event.target.checked)
  };

  return (
    <FormControl component="fieldset" variant="standard" sx={{ marginTop: "10px" }}>
      <FormLabel component="legend">Выберите сортировку</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={state.jason} onChange={handleChange} name="jason" />
          }
          label="Сортировать по максимальной сумме"
        />
      </FormGroup>
    </FormControl>
  );
}