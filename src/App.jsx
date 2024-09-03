
import { useColorScheme } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Container from "@mui/material/Container";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const selectedMode = event.target.value;
    console.log(selectedMode);
    setMode(selectedMode);
    // setAge(event.target.value)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LightModeIcon fontsize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeOutlinedIcon fontsize="small" />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon fontsize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => theme.componentSize.appBarHeight,
        display: 'flex',
        alignItems: 'center',
      }}>
        <ModeSelect></ModeSelect>

      </Box >
      <Box sx={{
        backgroundColor: 'secondary.main',
        width: '100%',
        height: (theme) => theme.componentSize.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
      }}>
        Board bar
      </Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.componentSize.appBarHeight} - ${theme.componentSize.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center',
      }}>
        Board content
      </Box>
    </Container>
  );
}

export default App;
