import React, { useState, useEffect, useMemo } from 'react';

import Table from './Table';

const List = () => {
    const [userRecords, setUserRecords] = useState(() => {
        const userRecordBuffer = localStorage.getItem('User Records');
        const userRecordParsed = JSON.parse(userRecordBuffer);
        return userRecordParsed || [''];
    });

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Phone Number',
                accessor: 'phone',
            },
            {
                Header: 'DOB',
                accessor: 'dob',
            },
            {
                Header: 'Address',
                columns: [
                    {
                        Header: 'City',
                        accessor: 'address.city',
                    },
                    {
                        Header: 'District',
                        accessor: 'address.district',
                    },
                    {
                        Header: 'Province',
                        accessor: 'address.province',
                    },
                    {
                        Header: 'Country',
                        accessor: 'address.country',
                    },
                ],
            },
        ],
        []
    );

    useEffect(() => {
        // setUserRecords();
    }, []);
    return (
        <div>
            <Table data={userRecords} columns={columns} />
        </div>
    );
};

export default List;