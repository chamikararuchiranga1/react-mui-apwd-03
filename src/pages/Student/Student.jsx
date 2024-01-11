import { Box} from "@mui/material";
import StudentCard from "../../component/StudentCard/StudentCard.jsx";
import AddStudent from "../../component/AddStudent/AddStudent.jsx";
import {useState} from "react";

export default function Student() {

    const [data, setData] = useState([]);

    const studentDataSave = (val) => {
        const  arr = [...data];
        arr.push(val);
        setData(arr);
    }

    return(
        <div>
            <h1>Student</h1>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <AddStudent saveStudent={(val)=> studentDataSave(val)}/>
            </Box>

                <Box sx={{
                    padding: 2,
                    marginTop: 2,
                    display: 'flex',
                    justifyContent: 'around',
                    borderRadius: 2,
                    backgroundColor: '#c2c1c1'
                }}>
                    {data.map((val, index) => (
                        <StudentCard key={index}/>
                    ))}
                </Box>
        </div>
)
}
