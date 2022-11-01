import {Box} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
// import NewLink1 from "./NewLink1";
// import NewLink2 from "./NewLink2";

const Info = () => {

    const data = [
        {
            name: 'sunil',
            id: 1
        }, {
            name: 'kumar',
            id: 2
        }, {
            name: 'kumawat',
            id: 3
        }
    ]
    return <Box> 

    {
        data.map((d) => {
            return (
            <Box key={d.id}> {
                <Link to={ROUTES.INFO + '/' + d.id}>{d.name}</Link>
            } </Box>)})
    }
     </Box>

}
export default Info;
