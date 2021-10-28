import React from 'react';
import { DashboarHeader } from '../../components/header/index';
import { DocumentTable } from '../../components/tables/table';
import './dashboardPage.scss';

export const DashboardPage = () => {
    return(
        <div className="dashboard">
            <div className="dashboard-content">
                <DashboarHeader/>
                <div className="dashboard-content__table">
                    <DocumentTable/>
                </div>
            </div>
            
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        
    );
};