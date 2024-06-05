import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
type Props = {
  filterName: string;
  posters: string[];
  selectedPosters: string[];
  setPosters: React.Dispatch<React.SetStateAction<string[]>>;
};

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      //   maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      //   width: 250,
    },
  },
};

const RESET_VALUE = "Reset";

const PosterFilter = ({
  filterName,
  posters,
  setPosters,
  selectedPosters,
}: Props) => {
  //   const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof posters>) => {
    const {
      target: { value },
    } = event;
    setPosters(
      value.includes(RESET_VALUE)
        ? []
        : typeof value === "string"
        ? value.split(",")
        : value
    );
  };

  return (
    <div className="w-1/2 bg-white ">
      <FormControl fullWidth={true}>
        <InputLabel id={`${filterName}-label`}>Posters Filter</InputLabel>
        <Select
          labelId={`${filterName}-multi-checkbox-label`}
          id={`${filterName}-multiple-checkbox`}
          multiple
          value={selectedPosters}
          onChange={handleChange}
          input={<OutlinedInput label={`${filterName}`} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          <MenuItem key={"Deselect-all"} value={RESET_VALUE}>
            <Checkbox checked={posters.length === 0} />
            <ListItemText primary={RESET_VALUE} />
          </MenuItem>

          {posters.map((poster: string) => (
            <MenuItem key={poster} value={poster}>
              <Checkbox checked={selectedPosters.indexOf(poster) > -1} />
              <ListItemText primary={poster} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default PosterFilter;
