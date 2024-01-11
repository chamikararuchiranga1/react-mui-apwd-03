import {Card, Box }from "@mui/material";

export default function StudentCard() {
    return(
        <Card sx={{maxWidth: 345, padding: 2, margin: 1}}>
            <Box sx={{margin: 1}}>Name : Chamikara</Box>
            <Box sx={{margin: 1}}>Address : Chamikara</Box>
            <Box sx={{margin: 1}}>Age : Chamikara</Box>
            <Box sx={{margin: 1}}>School : Chamikara</Box>
        </Card>
    )
}
