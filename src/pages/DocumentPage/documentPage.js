import React from "react";
import { DashboarHeader } from '../../components/header/index';
import { Document } from "../../components/document/document";
export const DocumentPage = () => {
    return(
        <div className="document">
            <div className="document-content">
                <DashboarHeader/>
                <div className="document-content__space" style={{backgroundColor: "aliceblue"}}>
                    <Document />   
                </div>
            </div>
        </div>
    );
};