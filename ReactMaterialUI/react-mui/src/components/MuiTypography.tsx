import { Typography } from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
    <Typography variant="h1" > h1 Heading</Typography>
    <Typography variant="h2" > h2 Heading</Typography>
    <Typography variant="h3" > h3 Heading</Typography>
    <Typography variant="h4" component="h1" gutterBottom > h4 Heading</Typography>
    <Typography variant="h5" > h5 Heading</Typography>
    <Typography variant="h6" > h6 Heading</Typography>

    <Typography variant="subtitle1" > subtitle1 </Typography>
    <Typography variant="subtitle2" > subtitle2</Typography>

    <Typography variant="body1" >  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     Blanditiis, tenetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Esse repudiandae eligendi, 
    ea ratione cum delectus ab laborum laboriosam sunt nobis</Typography>

    <Typography variant="body2" > Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Esse repudiandae eligendi, 
    ea ratione cum delectus ab laborum laboriosam sunt nobis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Esse repudiandae eligendi, 
    ea ratione cum delectus ab laborum laboriosam sunt nobisLorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Esse repudiandae eligendi, 
    ea ratione cum delectus ab laborum laboriosam sunt nobis</Typography>
       
</div>
  )
}

export default MuiTypography