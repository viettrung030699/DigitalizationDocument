import React, { useEffect, useState } from 'react';
import { Pagination, Table, PageItem } from 'react-bootstrap';
import  BootstrapTable  from 'react-bootstrap-table-next';
import paginationfactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import './table.scss';

export const DocumentTable = () => {
    const [counter, setCounter] = useState();
    const [page, setPage] = useState();
    const [items, setItems] = useState([]);
    
    const documents = [{
        "id" : "Số 12333",
        "type": "QUYẾT ĐỊNH",
        "abstract": "Về việc công bố thủ tục hành chính ,blalablalbal",
        "date": "2018-01-01"
    }, {
        "id" : "Số 2",
        "type": "QUYẾT ĐỊNH",
        "abstract": "Nội dung test 2",
        "date": "2020-11-11"
    }, {
        "id" : "Số 3",
        "type": "QUYẾT ĐỊNH",
        "abstract": "Nội dung test 2",
        "date": "2020-11-11"
    }, {
        "id" : "Số 4",
        "type": "QUYẾT ĐỊNH",
        "abstract": "Nội dung test 2",
        "date": "2020-11-11"
    }];

    const columns = [
        { dataField: "id", text: "Số", filter: textFilter()},
        { dataField: "type", text: "Loại", sort: true},
        { dataField: "abstract", text: "Trích Yếu"},
        { dataField: "date", text: "Ban Hành", sort: true}
    ];

    const calculatePages = (counter) => {
        let numbers = Math.floor((counter - 1) / 1) + 1;
        setPage(numbers);
        for (let i = 1; i <= numbers; i++) {
            items.push(
                <Pagination.Item key={i}>
                    {i}
                </Pagination.Item>
            )
        }
        setItems(items);
    };
    const options = {
      // pageStartIndex: 0,
      sizePerPage: 5,
      hideSizePerPage: true,
      hidePageListOnlyOnePage: true,
      totalSize: documents.length
    };

    useEffect(() => {
        // Count total document
        setCounter(documents.length);
        calculatePages(counter);
    
    },[])

    return(        
        <div className="content-table">
            <BootstrapTable 
                bootstrap4
                keyField="id"
                data={documents}
                columns={columns}
                filter={ filterFactory() }
                pagination={paginationfactory(options)}
            />
            {/* <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6 total-count">Total: {counter} documents</div> */}

        </div>
    );
};