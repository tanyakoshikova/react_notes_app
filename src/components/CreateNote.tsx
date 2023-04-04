import {Box, Button, InputBase, styled} from "@mui/material";

const Container = styled(Box)`
 & > * {
   margin: 20px 20px 20px 5px;
 } 
  div > input[type="text"] {
   border-bottom: 1px solid #111111;
   opacity: 0.4;
   width: 300px;
   padding-right: 25px;
 }
  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
    bottom: -10px;
  }
  & > span {
    font-size: 15px;
    position: relative;
    right: 40px;
  }
`

const CreateNote: React.FunctionComponent = () => {
    return (
        <Container>
            <InputBase
            placeholder={'Title'}
            />
            <Box component={"span"}>30</Box>
            <InputBase
                placeholder={'Details'}
            />
            <Box component={"span"}>40</Box>
            <InputBase
            type={"color"} defaultValue={'#f5f5f5'} placeholder={"Choose color"}
            />
            <Button variant={"outlined"}>Create</Button>
        </Container>
    )
}


export default CreateNote;