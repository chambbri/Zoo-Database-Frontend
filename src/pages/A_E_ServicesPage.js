import React from 'react';
import { Link } from 'react-router-dom';
import InsertAEService from '../components/aeservices/InsertAEService';
import AEServiceList from '../components/aeservices/AEServiceList';

function AEServicePage() {
    const [aeservices, setAEServices] = useState([]);
    const [createAEService, setCreateAEService] = useState([]);

    const getAEServices = async () => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/aeservice');
        const exhibits = await res.json()
        setAEServices(aeservices)
    };

    useEffect(() => {
        getAEServices();
    }, []);

    return (
        <body>
            <h1>West Coast Best Coast Zoo Animals</h1>
            <div>
                <InsertAEService />
            </div>
            <br />
            <div>
               <AEServiceList aeservices={aeservices} />
            </div>
        </body>
    )
}

export default AEServicePage;