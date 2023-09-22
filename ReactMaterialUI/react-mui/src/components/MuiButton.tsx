import React from 'react'
import { Stack,Button ,IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const MuiButton = () => {
  return (
 <Stack spacing={4}>

    <Stack spacing={2} direction ="row">

        <Button variant="text" href='https://www.google.com'>Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outline</Button>
</Stack>

<Stack spacing={2} direction="row">
<Button variant='contained' color='primary' >Primary</Button>
<Button variant='contained' color='secondary' >Secondary</Button>
<Button variant='contained' color='error' >Error</Button>
<Button variant='contained' color='info' >Info</Button>
<Button variant='contained' color='success' >Succuss</Button>
<Button variant='contained' color='warning' >Warning</Button>
</Stack>

<Stack display='block' spacing={3} direction="row">
    <Button variant='contained' size='small'>Small</Button>
    <Button variant='contained' size='medium'>Medium</Button>
    <Button variant='contained' size='large'>Large</Button>
     
</Stack>

<Stack spacing={3} direction='row' >
    <Button variant='contained' startIcon={<SendIcon />} disableRipple onClick={()=> alert("clicked")}>Send</Button>
    <Button variant='contained' endIcon={<SendIcon />}>Send</Button>

<IconButton aria-label='send' color='success' size='small'>
    <SendIcon /> 
</IconButton>


</Stack>
    </Stack>
  )
}

export default MuiButton